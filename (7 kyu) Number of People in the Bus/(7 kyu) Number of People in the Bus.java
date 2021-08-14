import java.util.ArrayList;

class Metro {

  public int countPassengers(ArrayList<int[]> stops) {
    int totalPeople = 0;
    
    for(int[] stop : stops) {
      totalPeople += stop[0] - stop[1];
    }
    
    return totalPeople;
  }
}
