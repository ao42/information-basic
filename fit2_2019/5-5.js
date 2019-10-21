function b1(){
  var aaa = document.getElementsByClassName("aaa");
  var an = (aaa.length);
  for (i=0 ; i<=an ; i++){
    aaa[i].innerHTML = "要素"+(i+1);
  }
}

function b2(){
  var ccc = document.getElementsByClassName("ccc");
  var cn = (ccc.length);
  var mean = document.getElementById("mean").value;
  for (i=0 ; i<=cn ; i++){
    ccc[i].innerHTML = mean;
  }
}

function b3() {
  var aaabbb = document.getElementsByClassName("aaa bbb");
  var abn = (aaabbb.length);
  var mean = document.getElementById("mean").value;
  for (i=0 ; i<=abn ; i++){
    aaabbb[i].innerHTML = mean;
  }
}
