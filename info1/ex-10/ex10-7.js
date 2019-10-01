function FizzBuzz() {
  var x = document.getElementById('FB').innerHTML;
   for (var i = 2; i <= 100; i = i + 1) {
    if (i % 3 == 0 && i % 5 == 0) {//3でも５でも割り切れるとき
      x = x + '<li>'+'FizzBuzz'+'</li>';
   } else if (i % 3 == 0) {//３で割り切れるとき
      x = x + '<li>'+'Fizz'+'</li>';
    } else if (i % 5 == 0) {//５で割り切れるとき
      x = x + '<li>'+'Buzz'+'</li>';
    } else {//どれにも当てはまらないとき
      x = x +'<li>'+i+'</li>';
    }
  }
  document.getElementById('FB').innerHTML = x;
}
