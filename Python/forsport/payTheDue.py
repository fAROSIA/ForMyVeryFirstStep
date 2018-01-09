bb = input('b:')
pp = input('+:')
basic_salary =float(bb)
plus_t =float(pp)
insurence = basic_salary * 0.222 + 3
tax0 = basic_salary + plus_t - insurence - 3500
if tax0 <= 1500:
    tax = tax0 * 0.03
elif tax0 <= 4500:
    tax = tax0 * 0.1 - 105
elif tax0 <= 9000:
    tax = tax0 * 0.2 - 555
gg = basic_salary + plus_t - insurence - tax
print("Insurence:%.2s\n" (insurence))
print("individual tax:%.2f\n" (tax))
print("what you got:%.2f\n" (gg))