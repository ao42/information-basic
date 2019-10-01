function days() {
  var x = "<p>日 &nbsp;月 &nbsp;火 &nbsp;水 &nbsp;木 &nbsp;金 &nbsp;土</p><p>";
  var day = ['日','月','火','水','木','金','土'];
  var nday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var m = Number(document.getElementById("month").value);
  var y = Number(document.getElementById("year").value);

  var j = Math.floor(y/100);
  var k = Math.floor(y%100);
  var ist = (1+Math.floor((m+1)*2.6)+k+Math.floor(k/4)+Math.floor(j/4)-2*j-1)%7

  for(var i = 0; i < ist;i++){
    x= x + "*&nbsp; &nbsp; ";
  }

  for(var n = 1; n <= nday[m-1]; n++) {
    var week　= (n+Math.floor((m+1)*2.6)+k+Math.floor(k/4)+Math.floor(j/4)-2*j)%7

    if(Math.floor(n/10)==0){
      x = x + n + "&nbsp; &nbsp;";
    }else{
      x = x + n + " ";
    }
    if(day[week]=='日'){
      x = x + "</p><p>";
    }

  }
  document.getElementById('calendar').innerHTML = x;
}
