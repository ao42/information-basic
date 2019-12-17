var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 100;  // 中心点のX座標
var y = 100;  // 中心点のY座標
var r = 80;   // 半径

ctx.lineWidth = 3.0;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'lightgrey';

ctx.beginPath();
ctx.moveTo(x + Math.sin(0 * 2 * Math.PI / 5) * r, y - Math.cos(0 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(3 * 2 * Math.PI / 5) * r, y - Math.cos(3 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(1 * 2 * Math.PI / 5) * r, y - Math.cos(1 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(4 * 2 * Math.PI / 5) * r, y - Math.cos(4 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(2 * 2 * Math.PI / 5) * r, y - Math.cos(2 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(5 * 2 * Math.PI / 5) * r, y - Math.cos(5 * 2 * Math.PI / 5) * r);
ctx.closePath();
ctx.fill();
ctx.stroke();
