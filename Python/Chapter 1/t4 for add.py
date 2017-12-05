import os
import re
IDs=['999','888','777']
Ns=['','','']
os.chdir('d:\\test')
g=open('d:\\test\\a.txt')
a=g.read()
g.close()
lids=a.split(",")

for lid in lids:
     lines=[]
     f=open('d:\\test\\'+lid+'\\Layout.xml','r')
     for line in f:
          lines.append(line)

     




     for line in f.readlines():
          haveit=re.findall("</label>",line)
          if len(haveit)>0:
               li=line+1
     for i in range(len(IDs)):
          f.insert(li,'\n\t<key ID="'+IDs[i]+'"    name="'+Ns[i]+'"   />')
     
     f.close()
