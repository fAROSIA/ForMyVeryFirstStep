 import os
import re
IDs=['777','8888','999']
Ns=['','','']
os.chdir('d:\\test')
g=open('d:\\test\\a.txt')
a=g.read()
g.close()
lids=a.split(",")

for lid in lids:
     lines=[]
     lines0=[]
     f=open('d:\\test\\'+lid+'\\Layout.xml','r')
     lines=f.readlines()
     i=0
     fl=0
     lines0=lines
     
     for line in lines0:
          line=line.replace('\t','').replace('\n','').replace(' ','')
          if line=='</label>':
               fl=i
               i+=1
          else:
               i+=1
     j=0
     for j in range(len(IDs)):
          lines.insert(fl,'\n\t<key ID="'+IDs[j]+'"    name="'+Ns[j]+'"   />')
          fl+=1
     lines.insert(fl,'\n\n\n\n\n')
     s=''.join(lines)
     f=open('d:\\test\\'+lid+'\\Layout.xml','w+')
     f.write(s)
     f.close()

'''
     for line in f.readlines():
          haveit=re.findall("</label>",line)
          if len(haveit)>0:
               li=line+1
     for i in range(len(IDs)):
          f.insert(li,'\n\t<key ID="'+IDs[i]+'"    name="'+Ns[i]+'"   />')
'''     
