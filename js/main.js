var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 1000;
c.height = 500;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255) {
  while (perm.includes((val = Math.floor(Math.random() * 255))));
  perm.push(val);
}
var lerp = (a, b, c) => a + (b - a) * c;
var noise = (x) => {
  return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
};

/* Background Color */
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

  ctx.fillStyle = "black";
  ctx.beginPath();
  for (let i = 0; i < c.width; i++)
    ctx.lineTo(i, noise(i));

  ctx.fill();
}

loop();

// set the change interval
setInterval(function () {
  requestAnimationFrame(loop);
}, 50000);
