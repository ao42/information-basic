function bloodtype() {
var a=document.getElementById('a').value
var b=document.getElementById('b').value

  if (a == 'yes'&& b == 'yes') {
    document.getElementById('answer').value = 'AB';
  }else if (a == 'yes'&& b == 'no') {
    document.getElementById('answer').value = 'A';
  }else if (a == 'no'&& b == 'yes') {
    document.getElementById('answer').value = 'B';
  }else if (a == 'no'&& b == 'no') {
    document.getElementById('answer').value = 'o';
  }else {
    document.getElementById('answer').value = 'yesかnoを入力してください';
  }
}
