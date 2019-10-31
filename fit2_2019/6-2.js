function b1(){
  var all = document.getElementsByClassName("aaa");
  for (var i = 0; i < all.length; i++){
    all[i].style.background="white";
  }

  var ccc = document.getElementsByClassName("ccc");
  var color = document.getElementById("color").value;
  for (var i = 0; i < ccc.length; i++){
    ccc[i].style.background=color;
  }
}

function b2(){
  var all = document.getElementsByClassName("aaa");
  for (var i = 0; i < all.length; i++){
    all[i].style.background="white";
  }

  var ab = document.getElementsByClassName("aaa bbb");
  var color = document.getElementById("color").value;
  for (var i = 0; i < ab.length; i++){
    ab[i].style.background=color;
  }
}
