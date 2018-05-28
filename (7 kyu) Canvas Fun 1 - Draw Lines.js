/** Canvas Fun #1: Draw Lines (7 kyu)
 * http://www.codewars.com/kata/canvas-fun-number-1-draw-lines
 *
 * Given some points, your task is to draw lines between two adjacent points.
 * points is given by a 2D integer array. Each subarray has two elements,
 * means the x-coordinate, y-coordinate of each point.
 *
 * The basic canvas(width 100 x height 100), background color(white) and
 * pen's color(red) are already defined in the initial code(please don't
 * delete or modify them).
 */
function drawLines(points) {
  var canvas = new Canvas(100, 100); //Create a 100 x 100 canvas
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 100, 100); //Draw background
  ctx.strokeStyle = "#ff0000"; //Set pen's color
  ctx.beginPath();
  //Don't delete or modify the code above
  //Your code starts here:

  const xCoordinate = 0;
  const yCoordinate = 1;
  // start from 0 point
  ctx.moveTo(points[0][xCoordinate], points[0][yCoordinate]);
  for (let i = 1; i < points.length; i++) {
    // draw a line to the next point
    ctx.lineTo(points[i][xCoordinate], points[i][yCoordinate]);
  }

  //Don't delete or modify the following code
  ctx.stroke(); //Draw the path you made above
  return canvas.toDataURL(); //Returns the image data
}
