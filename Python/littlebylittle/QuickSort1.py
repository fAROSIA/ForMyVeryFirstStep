# -*- coding:utf-8 -*-
def quick_sort(arr, low, high):
    i = low
    j = high
    if i >= j:
        return arr
    k = arr[i]
    while i != j:
        while i < j and arr[j] >= k:
            j -= 1
        while i < j and arr[i] <= k:
            i += 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
    arr[low] = arr[i]
    arr[i] = k
    quick_sort(arr, low, i - 1)
    quick_sort(arr, j + 1, high)
    return arr
