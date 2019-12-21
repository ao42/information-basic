var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x, y;
for (y=0; y<100; y+=10) {
  for (x=0; x<100; x+=10) {
    if ((x+y)%80 == 0) {
      ctx.fillRect(x, y, 10, 10);
    }
  }
}
