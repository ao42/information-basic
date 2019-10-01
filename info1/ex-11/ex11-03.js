function days() {
  var x = "";
  var day = ['日','月','火','水','木','金','土'];
  var ndays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var y = Number(document.getElementById('month').value);
  var z = Number(document.getElementById('year').value);
  for(var n = 1; n <= ndays[y-1]; n = n + 1) {
    x = x + "<li>" + n + "日"+'('+day[n%7]+')'+'</li>';
  }
  document.getElementById('calendar').innerHTML = x;
}
