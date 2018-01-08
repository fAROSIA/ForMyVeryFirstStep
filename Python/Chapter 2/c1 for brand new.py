import os
os.chdir('d:\\test\\c1')
print("请输入比赛类型数量:")
num = input()
raw = []
for e in range(int(num)):
    raw.append(e + 1)
print("请输入比赛名称:")
Game_name0 = input()
Game_name = Game_name0.split(",")

# 读取layout ID
layout0 = []
f0 = open('d:\\test\\c1\\ID.txt')
layout0 = f0.read()
f0.close
lids = layout0.split(",")
name = [[], [], []]
j = 0
index = []
flag = []
IDs = []
Ns = []
Fs = []
for d in raw:
    with open('d:\\test\\c1\\raw' + str(d) + '.txt') as f:
        for line in f:
            for each in enumerate(line.split('\t')):
                name[each[0]].append(each[1])
            if line == '\t\t\n':
                index.append(j)
            j += 1
    name[0].append('Flamenco')
    name[1].append('Flamenco')
    name[2].append('Flamenco')
    index.append(j)
    j += 1
IDs, Ns, Fs = name
for x in range(len(Ns)):
    str1 = Ns[x]
    Ns[x] = str1.replace("\n", " ")
    str1 = Fs[x]
    Fs[x] = str1.replace("\n", " ")
f.close

# 写入
y = 0
h = 0
k = 0
index.insert(0, -1)
for lid in lids:
    if IDs[k] == 'Flamenco':
        h += 1
        k += 1
    os.mkdir(lid)
    path0 = os.getcwd()
    path = os.path.join(path0, lid)
    os.chdir(path)
    f = open("Layout.xml", 'w+')

    # part1
    f.write("""<?xml version="1.0" encoding="gb2312" ?>
<Tourney>
<!--比赛归类配置-->
    <MatchGroup>

        <label    name=""  Flag="1"  >


        </label>


    """)

    # part2
    f.write('\t<label    name="' + Game_name[h] + '"  Flag="1"  >\n')

    # part3

    for i in range(index[y] + 1, index[y + 1]):
        if Fs[i] == '免费':
            f.write('\n\t\t\t<key ID="' + IDs[i]
                    + '"    name="' + Ns[i] + '"  Sort="100" free="1" />')
        else:
            f.write('\n\t\t\t<key ID="' + IDs[i]
                    + '"    name="' + Ns[i] + '"  Sort="100" free="0" />')
        k = i + 1
    y += 1
    f.write('\n')

    # part4
    f.write("""
        </label>







    </MatchGroup>

</Tourney>""")
    f.close()
    os.chdir(path0)
