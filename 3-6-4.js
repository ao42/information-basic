function iftest() {
  var str = prompt("自然数を半角でを入力してください。（０は自然数に含まれません。）");
  var num = Number(str);

  if (num == 0 ) {
    alert("1以上の自然数でお願いします。");
  } else if (num % 2 == 0 && num % 3 == 0) {
    alert("2の倍数かつ3の倍数です。");
  } else if (num % 2 == 0) {
    alert("2の倍数です。");
  } else if (num % 3 == 0) {
    alert("3の倍数です。");
  } else {
    alert("2の倍数でも、3の倍数でもありません。");
  }
}

//0をより効率よく記述できる方法って無いですかねぇ。
