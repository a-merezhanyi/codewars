import re


def travel(r, zipcode):  # #1
    addresses = r.split(",")
    records = []
    for x in addresses:
        addr = re.search(r"(^\d+) ([a-zA-z.\s]+) ([A-Z]{2} \d+)$", x)
        records.append({
            "house": addr.group(1),
            "street": addr.group(2),
            "zip": addr.group(3)
        })
    streets = []
    houses = []
    for r in records:
        if (r["zip"] == zipcode):
            streets.append(r["street"])
            houses.append(r["house"])
    return "{}:{}/{}".format(
        zipcode,
        ",".join(streets),
        ",".join(houses)
    )


def travel(r, zipcode):  # #2
    streets = []
    houses = []
    addresses = r.split(",")
    for x in addresses:
        if " ".join(x.split()[-2:]) == zipcode:
            streets.append(" ".join(x.split()[1:-2]))
            houses += x.split()[:1]
    return "{}:{}/{}".format(zipcode, ",".join(streets), ",".join(houses))
