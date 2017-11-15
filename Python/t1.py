import os

#创建布局文件
os.chdir('d:\\test')
print ("请输入layout ID:")
lid0=input()
lid1=lid0.split(",")
print(lid1)
lids = [int(lid1[k]) for k in range(len(lid1))]
print(lids)
print ("请输入比赛名称:")
Game_name=input()
for lid in lids:
    os.mkdir(lid)
    path0=os.getcwd()
    path=os.path.join(path0,lid)
    os.chdir(path)


    #写入
    f=open("Layout.xml",'w+')
    i=0
    IDs=['1','2','3']
    Ns=['rose','mary','jack']
    #part1
    f.write("""<?xml version="1.0" encoding="gb2312" ?>
    <Tourney>
    <!--比赛归类配置-->
            <MatchGroup>
          
                    <label    name=""  Flag="1"  >


                    </label>
    """)

    #part2 
    f.write('\t\t<label    name="'+Game_name+'"  Flag="1"  >\n')	    

    #part3

    for ID in IDs:
        f.write('\n\t\t\t<key ID="'+ID+'"    name="'+Ns[i]+'"   />')
        i+=1

    f.write('\n')

    #part4
    f.write("""
                    </label>







                    

            </MatchGroup>

    </Tourney>

    """)
    f.close()
    os.chdir(path0)
