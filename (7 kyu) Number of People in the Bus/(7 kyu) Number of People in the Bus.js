// #1
// function number(busStops) {
//   let totalPeople = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// }
// #2
// function number(busStops) {
//   return busStops.reduce((people, next) => {
//     const [on, off] = next;
//     return people + on - off;
//   }, 0);
// }
// #3
const number = (busStops) => busStops.reduce((a, c) => a + c[0] - c[1], 0);
