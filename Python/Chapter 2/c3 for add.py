import os
import re

name=[[],[],[]]
IDs=[]
Ns=[]
Fs=[]
flag=[]
i=0
with open('d:\\test\\c3\\total.txt') as f:
	for line in f:
		for each in enumerate(line.split('\t')):
			name[each[0]].append(each[1])
		if line=='\t\t\n':
			flag.append(i)
		i+=1
flag.append('end')
IDs, Ns, Fs = name

for x in range(len(Ns)):
    str1 = Ns[x]
    Ns[x] = str1.replace("\n", "")
    str1 = Fs[x]
    Fs[x] = str1.replace("\n", "")
f.close


os.chdir('d:\\test\\c3')
g = open('d:\\test\\c3\\a.txt')
a = g.read()
g.close()
lids = a.split("\t")
lids[-1]=lids[-1].replace("\n", "")

s0=0
k=0
for lid in lids:
	lines = []
	lines0 = []
	f = open('d:\\test\\c3\\' + lid + '\\Layout.xml', 'r')
	lines = f.readlines()
	i = 0
	fl = 0
	lines0 = lines

	for line in lines0:
		line = line.replace('\t', '').replace('\n', '').replace(' ', '')
		if line == '</label>':
			fl = i
			i += 1
		else:
			i += 1
	j = 0
	for j in range(s0,len(IDs)):
		if j==flag[k]:
			s0=j+1
			k+=1
			lines.insert(fl, '\n\n\n\n\n')
			s = ''.join(lines)
			f = open('d:\\test\\c3\\' + lid + '\\Layout.xml', 'w+')
			f.write(s)
			f.close()
			break

		if Fs[j] == '免费':
			lines.insert(fl, '\n\t<key ID="' + IDs[j] + '"    name="' + Ns[j] + '"  Sort="100" free="1" />')
		else:
			lines.insert(fl, '\n\t<key ID="' + IDs[j] + '"    name="' + Ns[j] + '"  Sort="100" free="0" />')
		fl += 1
	lines.insert(fl, '\n\n\n\n\n')
	s = ''.join(lines)
	f = open('d:\\test\\c3\\' + lid + '\\Layout.xml', 'w+')
	f.write(s)
	f.close()

