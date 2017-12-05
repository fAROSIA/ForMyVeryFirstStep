import os
name = [[],[]]
index=[0]
j=0
with open('d:\\test\\raw.txt') as f:
    for line in f:
        for each in enumerate(line.split('\t')):
            print("each:",each)
            print("each[0]:",each[0])
            print("each[1]:",each[1])
            print('====================================')
            name[each[0]].append(each[1])
            print('====================================')
            print('====================================')
            print('====================================')
            if each[1]=='\n':
                z=int((j+1)/2)
                index.append(z)
            j+=1
a,b = name
