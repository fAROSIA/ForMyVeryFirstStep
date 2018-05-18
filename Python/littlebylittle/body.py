# -*- coding:utf-8 -*-
import get_input
import QuickSort1 as QuickSort

list2sort = get_input.get_input()
print(list2sort)
QuickSort.quick_sort(list2sort, 0, len(list2sort) - 1)
print(list2sort)
