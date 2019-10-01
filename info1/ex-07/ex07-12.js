function uru(){
  var year = document.getElementById('answer').value
  if(year%400==0){
    alert(year+"年は閏年です")
  }else if (year%100==0) {
      alert(year+"年は閏年ではありません");
  }else if (year%4==0) {
    alert(year+"年は閏年です");
  }else {
    alert(year+"年は閏年ではありません");
  }
}
