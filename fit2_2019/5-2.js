function hai(){
  var n1 = prompt("名前を入力してください");
  var n2 = prompt("前回とは違う名前を入力してください");
  var n3 = prompt("前回とは違う名前を入力してください");
  var n4 = prompt("前回とは違う名前を入力してください");
  var n5 = prompt("前回とは違う名前を入力してください");
  var n6 = prompt("前回とは違う名前を入力してください");

  const name=[n1,n2,n3,n4,n5,n6];
  name.sort();
  const divideLength = 3;

  for(let i = 0; i < name.length; i += divideLength){
   　// 指定した個数ずつに分割
   　let splitname = name.slice(i, i + divideLength);
   　// カンマで接続、文字列に
   　let numStr = splitname.join();
   　alert(numStr);
  }
}
