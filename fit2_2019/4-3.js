function monte(){
  var n = 100;
  var n_in = 0;

  for(var i = 0; i < n; i++){
    var x = Math.random();
    var y = Math.random();
    var r = Math.sqrt(x * x + y * y);

    if(r < 1){
      n_in++;
    }
  }
  var result = 4 * n_in / n;
  alert(result);
}
