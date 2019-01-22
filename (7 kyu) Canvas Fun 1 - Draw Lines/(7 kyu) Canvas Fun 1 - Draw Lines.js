function drawLines(points) {
  var canvas = new Canvas(100, 100); //Create a 100 x 100 canvas
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 100, 100); //Draw background
  ctx.strokeStyle = '#ff0000'; //Set pen's color
  ctx.beginPath();
  //Don't delete or modify the code above
  //Your code starts here:
  /* #1
  const xCoordinate = 0;
  const yCoordinate = 1;
  ctx.moveTo(points[0][xCoordinate], points[0][yCoordinate]);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][xCoordinate], points[i][yCoordinate]);
  }
  */
  /* #2
  ctx.moveTo(...points[0])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(...points[i]);
  }
  */
  /* #3 */
  // start from 0 point
  ctx.moveTo(...points.shift());
  points.forEach((p) =>
    // draw a line to the next point
    ctx.lineTo(...p),
  );

  //Don't delete or modify the following code
  ctx.stroke(); //Draw the path you made above
  return canvas.toDataURL(); //Returns the image data
}
