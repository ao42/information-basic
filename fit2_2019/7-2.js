function Dr() {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0,0,200,200);

  var x = 100;  // 中心点のX座標
  var y = 100;  // 中心点のY座標
  var r = 80;   // 半径

  ctx.lineWidth = 3.0;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'lightgrey';

  var nsu = document.getElementById("Nsu").value;

  ctx.beginPath();
  ctx.moveTo(x + Math.sin(0 * 2 * Math.PI / 6) * r, y - Math.cos(0 * 2 * Math.PI / 6) * r);

  var z = 0

  for(z = 1; z <= nsu; z++){
  ctx.lineTo(x + Math.sin(z * 2 * Math.PI / nsu) * r, y - Math.cos(z * 2 * Math.PI / nsu) * r);
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

}
