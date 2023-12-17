var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 1000;
c.height = 500;
document.body.appendChild(c);

/* Background Color*/
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* loop background */
function loop() {
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(0, 0, c.width, c.height);
}

loop();

// set the change interval
setInterval(function() {
  requestAnimationFrame(loop);
}, 50000);
