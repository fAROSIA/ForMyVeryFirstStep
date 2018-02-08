import os

def GoData(index,layoutIDs,IDs,Ns,Fs,Game_names):   
    y = 0
    h = 0
    k = 0
    index.insert(0, -1)
    for lid in layoutIDs:
        if IDs[k] == '':
            h += 1
            k += 1
        os.mkdir(lid)
        path0 = os.getcwd()
        path = os.path.join(path0, lid)
        os.chdir(path)
        ff = open("config.ini", 'w+')
        ff.write('[attribute]\n')
        ff.write('name=' + Game_names[h])
        ff.close
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
        f.write('\t<label    name="' + Game_names[h] + '"  Flag="1"  >\n')

        # part3

        for i in range(index[y] + 1, index[y + 1]):
            if Fs[i] == '免费 ':
                f.write('\n\t\t\t<key ID="' +
                        IDs[i] +
                        '"    name="' + Ns[i] + '"  Sort="100" free="1" />')
            else:
                f.write('\n\t\t\t<key ID="' +
                        IDs[i] +
                        '"    name="' + Ns[i] + '"  Sort="100" free="0" />')
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