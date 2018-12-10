def fibonacci(n):
    return 1 if n < 3 else fibonacci(n - 1) + fibonacci(n - 2)
