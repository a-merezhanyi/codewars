import re

def balance(book):
    calc_lines = []
    total_expense =0
    book = re.sub("[^\w\d\.\s\n]", "", book)
    book = re.sub("\s{2,}", "\n", book)
    lines = book.splitlines()
    budget = float(lines.pop(0))
    remains = budget
    
    for line in lines:
        line = line.split()
        balance  = float(line[-1])
        
        total_expense += balance 
        remains -= balance 
        calc_lines.append(" ".join(
            line[:-1]) \
            + " {:.2f}".format(balance) \
            + " Balance {:.2f}".format(remains))
    
    return \
        "Original Balance: {:.2f}\r\n".format(budget) \
        + '\r\n'.join(calc_lines) \
        + "\r\n" \
        + "Total expense  {:.2f}\r\n".format(total_expense) \
        + "Average expense  {:.2f}".format(total_expense / len(lines))
