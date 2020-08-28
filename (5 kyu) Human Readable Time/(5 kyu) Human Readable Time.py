# #1
#def make_readable(seconds):
#    hours = seconds/60**2
#    minutes = (seconds%60**2)/60
#    seconds = (seconds%60**2%60)
#    return "%02d:%02d:%02d" % (hours, minutes, seconds)

# #2
#def make_readable(seconds):
#    hours, seconds = divmod(seconds, 60 ** 2)
#    minutes, seconds = divmod(seconds, 60)
#    return '{:02}:{:02}:{:02}'.format(hours, minutes, seconds)

# #3
def make_readable(seconds):
    return '{:02}:{:02}:{:02}'.format(seconds / 3600, seconds / 60 % 60, seconds % 60)
