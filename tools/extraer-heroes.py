import re,json,sys
src=sys.argv[1]; out=sys.argv[2]
L=open(src,encoding='utf8').read().split('\n')
def split_name(s):
    m=re.match(r'(.*?) \((.*)\)$',s); return (m.group(1),m.group(2)) if m else (s,s)
# classes
classes=[]
i=0
while i<len(L) and not L[i].startswith('## Clases: bonos'): i+=1
i+=4
bon={}
while L[i].startswith('|'):
    c=[x.strip() for x in L[i].strip('|').split('|')]
    n,en=split_name(c[0].replace('**',''))
    bon[n]=dict(n=n,en=en,desc=c[1],bonus=[b.strip() for b in c[2].split('·')]); i+=1
# per class skills
j=0
while not L[j].startswith('## Habilidades por clase'): j+=1
cur=None; sec=None
while not L[j].startswith('## Habilidades comunes'):
    l=L[j]
    if l.startswith('### '):
        cur=split_name(l[4:])[0]; bon[cur]['skills']=[]; bon[cur]['feat']=None; sec=None
    elif l.startswith('**Dote de clase'):
        m=re.search(r'\*([^*]+)\* \(([^)]+)\): (.*)',l); bon[cur]['feat']=dict(n=m.group(1),en=m.group(2),t=m.group(3))
    elif l.startswith('**Iniciales'): sec='i'
    elif l.startswith('**Tier'): sec=None
    elif sec=='i' and l.startswith('|') and not l.startswith('|---') and not l.startswith('| Habilidad'):
        c=[x.strip() for x in l.strip('|').split('|')]
        bon[cur]['skills'].append(dict(n=c[0],en=c[1],a=c[2],t=c[3]))
    j+=1
classes=list(bon.values())
# races
k=0
while not L[k].startswith('## Héroes por facción'): k+=1
facs=[];fac=race=None
for x in range(k,len(L)):
    l=L[x]
    if l.startswith('## Glosario'): break
    if l.startswith('### '):
        n,en=split_name(l[4:]); fac=dict(n=n,en=en,races=[]); facs.append(fac)
    elif l.startswith('#### ') and fac:
        n,en=split_name(l[5:]); race=dict(n=n,en=en,types=[]); fac['races'].append(race)
    elif l.startswith('##### ') and race:
        n,en=split_name(l[6:]); d=L[x+2]
        m=re.match(r'Cal (\d)\+ · Def (\d)\+ · Armas: (.*) · Reglas: (.*)$',d)
        if not m: print('NOPARSE',n,d); continue
        rules=[r.strip() for r in re.split(r',\s*(?![^()]*\))',m.group(4))]
        tough=0
        for r in rules:
            t=re.match(r'Resistente\((\d+)\)',r)
            if t: tough=int(t.group(1))
        race['types'].append(dict(n=n,en=en,cal=int(m.group(1)),def_=int(m.group(2)),w=m.group(3),rules=[r for r in rules if r!='Héroe' and not r.startswith('Resistente')],tough=tough))
json.dump(dict(classes=classes,facs=facs),open(out,'w',encoding='utf8'),ensure_ascii=False,separators=(',',':'))
print(len(classes),[len(c['skills']) for c in classes],sum(len(f['races']) for f in facs),[ (f['n'],len(f['races'])) for f in facs])
