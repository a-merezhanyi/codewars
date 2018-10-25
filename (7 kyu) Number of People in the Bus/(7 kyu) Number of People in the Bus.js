const number = (stops) => stops.reduce((a, c) => (a += c[0] - c[1]), 0);
