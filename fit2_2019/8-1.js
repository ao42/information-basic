function mikuji(){
  var unsei = new Array("大吉","中吉","小吉","吉","末吉","凶","大凶");
  var uranau = Math.floor(Math.random()*7);
  document.getElementById("res").innerHTML = unsei[uranau];
}
