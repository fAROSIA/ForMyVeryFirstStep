def GetID(name):
    with open('d:\\test\\c4\\' + name) as f00:
        ID_list = f00.read()
        return ID_list.split(",")


def LoadPID(raw):
    name = [[], [], []]
    index = []
    j = 0
    with open('d:\\test\\c4\\' + raw) as f11:
        for line in f11:
            for each in enumerate(line.split('\t')):
                name[each[0]].append(each[1])
            if line == '\t\t\n':
                index.append(j)
            j += 1
    index.append(j)
    IDs, Ns, Fs = name
    for x in range(len(Ns)):
        str1 = Ns[x]
        Ns[x] = str1.replace("\n", " ")
        str1 = Fs[x]
        Fs[x] = str1.replace("\n", " ")
    return IDs, Ns, Fs, index
