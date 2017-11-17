import os
name = [[],[]]
index=[]
i=0
with open('d:\\test\\raw.txt') as f:
    for line in f:
        for each in enumerate(line.split('\t')):
            name[each[0]].append(each[1])
            if each[1]=='\n':
                z=int((i+1)/2)
                index.append(z)
            i+=1

a,b = name
for x in range(len(b)):
    str1=b[x]
    str2=str1.replace("\n"," ")
    b[x]=str2
