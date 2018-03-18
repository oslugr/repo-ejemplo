#!/usr/bin/env python

from functools import reduce
import datetime


def time_it(func, numbers, *args):
    start_t = datetime.datetime.now()
    for i in range(numbers):
        func(args[0])
    print (datetime.datetime.now()-start_t)

def square_sum1(numbers):
    return reduce(lambda sum, next: sum+next**2, numbers, 0)


def square_sum2(numbers):
    a = 0
    for i in numbers:
        a += i**2
    return a

def square_sum3(numbers):
    a = 0
    map(lambda x: a+x**2, numbers)
    return a

def square_sum4(numbers):
    a = 0
    return [a+i**2 for i in numbers]

time_it(square_sum1, 100000, [1, 2, 5, 3, 1, 2, 5, 3])
time_it(square_sum2, 100000, [1, 2, 5, 3, 1, 2, 5, 3])
time_it(square_sum3, 100000, [1, 2, 5, 3, 1, 2, 5, 3])
time_it(square_sum4, 100000, [1, 2, 5, 3, 1, 2, 5, 3])
