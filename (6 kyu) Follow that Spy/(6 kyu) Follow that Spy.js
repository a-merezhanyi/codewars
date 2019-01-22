/** Follow that Spy (6 kyu) https://www.codewars.com/kata/follow-that-spy/
 * We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he
 * travels from places to places to avoid being tracked. Each of his travels are
 * based on a list of itineraries in an unusual or incorrect order. The task is
 * to determine the routes he will take in his every journey. You are given an
 * array of routes of his itineraries. List down only the places where he will
 * go.
 *
 * Example:
 * routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]
 * result: "USA, BRA, UAE, JPN, PHL"
 *
 * NOTE: It is safe to assume that there will be no repeating place with
 * different route and there are no empty routes and could have at least one (1)
 * route (from one waypoint to another).
**/

const findRoutes = (routes) => {
  const trace = []; // A tracked route
  
  routes.map((currentPair) => {
    // Search first point
    if (!routes.find((point) => point[1] === currentPair[0])) {
      // Push first point to the route
      trace.push(currentPair[0]);
      trace.push(currentPair[1]);
    }
  }).map(() => {
    // Compute a route
    routes.map((currentPair) => {
      // Push next point to the route
      currentPair[0] === trace[trace.length - 1] && trace.push(currentPair[1]);
    });
  });
  
  return trace.join(', ');
}