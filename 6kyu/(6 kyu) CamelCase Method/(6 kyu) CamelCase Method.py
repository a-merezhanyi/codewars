def camel_case(string):
    # #1
    # return "".join(c.capitalize() for c in string.split())
    # #2
    return string.title().replace(" ", "")
