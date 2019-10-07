function monte(){
  var n = prompt("試行回数を入力してください");
  var n_in = 0; // 円内

  for(var i = 0; i < n; i++){
    var x = Math.random();
    var y = Math.random();
    var r = Math.sqrt(x * x + y * y);

    if(r < 1){
      // 内側
      n_in++;
    }
  }

  var result = 4 * n_in / n;
  alert(result);
}
