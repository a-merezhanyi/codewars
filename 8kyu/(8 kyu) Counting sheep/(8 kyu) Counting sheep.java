// #1
public class Counter {
  public int countSheeps(Boolean[] arrayOfSheeps) {
    int sheepNumber = 0;
    for (int i = 0; i < arrayOfSheeps.length; i++) {
      if (arrayOfSheeps[i] == null) {
        continue;
      }
      if (arrayOfSheeps[i] == true) {
        sheepNumber = sheepNumber + 1;
      }
    }
    return sheepNumber;
  }
}

// #2
public class Counter {
  public int countSheeps(Boolean[] arrayOfSheeps) {
    int sheepNumber = 0;
    for (Boolean sheep: arrayOfSheeps) {
      if (sheep != null && sheep) {
        sheepNumber++;
      }
    }
    return sheepNumber;
  }
}

// #3
import java.util.*;

public class Counter {
  public int countSheeps(Boolean[] arrayOfSheeps) {
    return Arrays
      .stream(arrayOfSheeps)
      .filter(sheep -> sheep != null)
      .filter(sheep -> sheep == true)
      .toArray()
      .length;
  }
}

// #4
import java.util.*;

public class Counter {
  public int countSheeps(Boolean[] arrayOfSheeps) {
    return (int)Arrays
      .stream(arrayOfSheeps)
      .filter(Objects::nonNull)
      .filter(Boolean::booleanValue)
      .count();
  }
}
