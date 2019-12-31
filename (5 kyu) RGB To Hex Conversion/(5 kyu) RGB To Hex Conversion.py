def rgb(r, g, b):
    def decToHex(c):
        if (c > 255):
            return "FF"
        if (c < 0):
            return "00"
        else:
            return hex(c)[2:].zfill(2).upper()

    return decToHex(r) + decToHex(g) + decToHex(b)
