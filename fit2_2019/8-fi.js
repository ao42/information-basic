var unsei = new Array("大吉","中吉","小吉","吉","末吉","凶","大凶");

function tuika(){
  var　un = prompt("追加したい運勢を入力してね");
  unsei.push(un);
}

function mikuji(){
  var n = unsei.length;
  var uranau = Math.floor(Math.random()*n);
  document.getElementById("res").innerHTML = unsei[uranau];
}
