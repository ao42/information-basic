var w = 100;
var timerId;

function zoom() {
  w = Number(document.getElementById('picture').getAttribute('width'));
  timerId = setInterval('change();', 100);
}

function change() {
  w += 10;
  document.getElementById('picture').setAttribute('width', w);
  if (w > 500) {
    clearInterval(timerId);
  }
}
