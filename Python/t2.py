import os

#创建布局文件
os.chdir('d:\\test')
print ("请输入比赛名称:")
Game_name=input()
i=0
a=[]
#读取数据
g=open('d:\\test\\ID.txt')
a=g.read()
g.close
lids=a.split(",")

name = [[],[]]
index=[0]
j=0
y=0
with open('d:\\test\\raw.txt') as f:
    for line in f:
        for each in enumerate(line.split('\t')):
            name[each[0]].append(each[1])
            if each[1]=='\n':
                z=int((j+1)/2)
                index.append(z)
            j+=1
IDs,Ns = name
index.append(len(Ns)+1)
for x in range(len(Ns)):
    str1=Ns[x]
    Ns[x]=str1.replace("\n"," ")


#写入
for lid in lids:
    os.mkdir(lid)
    path0=os.getcwd()
    path=os.path.join(path0,lid)
    os.chdir(path)
    f=open("Layout.xml",'w+')

#part1
    f.write("""<?xml version="1.0" encoding="gb2312" ?>
<Tourney>
<!--比赛归类配置-->
    <MatchGroup>
          
        <label    name=""  Flag="1"  >


        </label>

        
    """)

#part2 
    f.write('\t<label    name="'+Game_name+'"  Flag="1"  >\n')	    

#part3

    for i in range(index[y],index[y+1]-1):
        f.write('\n\t\t\t<key ID="'+IDs[i]+'"    name="'+Ns[i]+'"   />')
    y+=1
    f.write('\n')

#part4
    f.write("""
        </label>







                    

    </MatchGroup>

</Tourney>""")
    f.close()
    os.chdir(path0)
