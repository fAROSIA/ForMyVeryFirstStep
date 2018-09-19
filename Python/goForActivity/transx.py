import xlrd
import os


def xmlFormater(sheetIndex=0):
    arr = []
    arr1 = []
    workbook = xlrd.open_workbook(
        'c:\\Users\\duandz\\Desktop\\Act\\test\\raw.xls')
    sheet = workbook.sheet_by_index(sheetIndex)
    for i in range(sheet.nrows):
        arr0 = sheet.row_values(i)
        a = '\t\t\t\t<key ID="' + str(int(arr0[1])) + '"\tname="' + str(
            arr0[2]) + '"\tSort="100" free="1" />\n'
        arr0[1] = str(int(arr0[1]))
        arr1.append(arr0)
        arr.append(a)
    return arr, arr1


def writeFile(arr, gameName):
    gameType = {
        "经典斗地主": "900",
        "经典麻将": "901",
        "拖拉机": "902",
        "德州扑克": "903",
        "赖子斗地主": "904",
        "二人麻将": "905",
        "欢乐斗地主": "906",
        "四川麻将": "907",
        "血流成河": "908",
        "跑得快": "909",
        "二人斗地主": "910",
        "推倒胡": "911",
        "闪电斗地主": "912",
        "大众麻将": "913",
        "金三顺": "914",
        "拼十": "915",
        "保皇": "916",
        "疯狂麻将": "917",
        "三人麻将": "918",
        "拱猪": "922",
        "炒底升级": "923",
        "百变斗地主": '924'
    }
    xmlHeader = """<?xml version="1.0" encoding="gb2312" ?>\n\t<Tourney>\n\t<!--比赛归类配置-->\n\t\t<MatchGroup>\n\t\t\t<label\tname=""\tFlag="1">\n\t\t\t</label>\n"""
    xmlFooter = """\t\t</MatchGroup>\n\t</Tourney>"""
    arrHeader = '\t\t\t<label\tname="' + gameName + '"\tFlag="1">\n'
    arrFooter = '\t\t\t</label>\n'
    os.chdir("c:\\Users\\duandz\\Desktop\\Act\\test")
    if not (os.path.exists(
            "c:\\Users\\duandz\\Desktop\\Act\\test\\" + gameType[gameName])):
        os.mkdir(gameType[gameName])
    path0 = os.getcwd()
    path = os.path.join(path0, gameType[gameName])
    os.chdir(path)
    ff = open("config.ini", 'w+')
    ff.write('[attribute]\n')
    ff.write('name=' + gameName)
    ff.close
    f = open("Layout.xml", 'w+')
    arr.append(arrFooter)
    arr.append(xmlFooter)
    arr.insert(0, arrHeader)
    arr.insert(0, xmlHeader)
    f.writelines(''.join(arr))
    f.close


def write181():
    text1 = xmlFormater()
    text11 = ''.join(text1[0])
    text2 = xmlFormater(1)
    text22 = ''.join(text2[0])
    os.chdir("c:\\Users\\duandz\\Desktop\\Act\\test")
    if not (os.path.exists("c:\\Users\\duandz\\Desktop\\Act\\test\\181")):
        os.mkdir("181")
    os.chdir("c:\\Users\\duandz\\Desktop\\Act\\test\\181")
    f1 = open("config.ini", 'w+')
    f1.write('[attribute]\n')
    f1.write('name=随来随打，今日大赛')
    f1.close
    f2 = open("Layout.xml", 'w+')
    f2.writelines(
        '''<?xml version="1.0" encoding="gb2312" ?>\n<Tourney>\n\t<!--比赛归类配置-->\n\t<MatchGroup>\n\t\t<label name="" Flag="1">\n\t\t</label>\n\t\t<label name="广告" Flag="1" ad="1">\n\t\t</label>\n\t\t        <label name="今日大赛" tnycolor="" Flag="0" id="8001" SortGroup="2">\n'''
    )
    f2.writelines(text11)
    f2.writelines(
        '''\t\t</label>\n\t\t<label name="随来随打" tnycolor="" Flag="0" id = "8002" SortGroup="1">\n'''
    )
    f2.writelines(text22)
    f2.writelines(
        '''\t\t</label>\n\t</MatchGroup>\n\t<LabelSortGroup name = "随来随打（30分钟内开始）" ShowTime = "" ShowMinutes = "30"   Position = "0" Flag = "1" id="1" />\n\t<LabelSortGroup name = "今日大赛" ShowTime = "23:59" ShowHour = "23"  Position = "1" Flag = "1" id="2" />\n</Tourney>'''
    )
    f2.close


index = 0
left = 0
text, content = xmlFormater()
right = len(content)
gameName = content[0][0]
text, content = xmlFormater()
for i in range(left, right):
    if content[i][0] != gameName:
        index = i
        arr2add = text[left:index]
        writeFile(arr2add, gameName)
        left = i
        gameName = content[i][0]
        next
    arr2add = text[left:]
    writeFile(arr2add, gameName)
write181()
