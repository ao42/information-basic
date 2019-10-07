function monte(){
  var n_in = 0; // 円内

    var x = Math.random();
    var y = Math.random();
    var r = Math.sqrt(x * x + y * y);

    if(r < 1){
      alert("円の中に入ったよ〜")
      // 内側
      n_in++;
    }else {
      alert("残念円の外でした")
    }
}
