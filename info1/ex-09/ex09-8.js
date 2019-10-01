function knock() {
  var x = document.getElementById('biscuit').innerHTML;
  n =document.getElementById('n').value;
  for (var y = 2; y <= n; y = y + 1) {
    x = x + '<li>ポケットを叩くとビスケットが'+y+'つ</li>';
  }
  document.getElementById('biscuit').innerHTML = x;
}
