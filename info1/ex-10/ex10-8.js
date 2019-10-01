function FizzBuzz() {
  var x = document.getElementById('FB').innerHTML;
   for (var i = 2; i <= 100; i = i + 1) {
    if (i == 31 || i == 32 || i == 34 || i == 34 || i == 35 || i == 37 || i == 38 ) {//3でも５でも割り切れるとき
      x = x + '<li>'+'あほ'+'</li>';
   } else if (i % 3 == 0) {//３で割り切れるとき
      x = x + '<li>'+'あほ'+'</li>';
    } else if (i % 10 == 0) {//５で割り切れるとき
      x = x + '<li>'+' あほ'+'</li>';
    } else {//どれにも当てはまらないとき
      x = x +'<li>'+i+'</li>';
    }
  }
  document.getElementById('FB').innerHTML = x;
}
