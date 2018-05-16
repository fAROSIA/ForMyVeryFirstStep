def get_input():
    arr = []
    arr = input("plz input some number to sort:")
    arr = arr.split(",")
    arr = list(map(int, arr))
    return arr
