function knock() {
  var x = document.getElementById('biscuit').innerHTML;
  for (var y = 1; y <= 100; y = y + 1) {
    x = x + '<li>ポケットを叩くとビスケットが'+y+'つ</li>';
  }
  document.getElementById('biscuit').innerHTML = x;
}
