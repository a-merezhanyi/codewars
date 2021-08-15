using System;
using System.Collections.Generic;

public class Kata
    {
        public static int Number(List<int[]> peopleListInOut)
        {
            int totalPeople = 0;

            foreach (var stop in peopleListInOut) {
              totalPeople += stop[0] - stop[1];
            }

            return totalPeople;
        }
    }
