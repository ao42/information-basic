var y =   1;

function knock() {
  var x = document.getElementById('biscuit').innerHTML;
  y = y + 1
  x = x + '<li>ポケットを叩くとビスケットが'+y+'つ</li>';
  document.getElementById('biscuit').innerHTML = x;
}
