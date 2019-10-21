function hai(){

  var name=[];

  for (i=0 ; i<6 ; i++){
    name[i] = prompt("名前を入力してください");
  }
  // いくつずつに分けるか
  const divideLength = 3;

  for(let i = 0; i < name.length; i += divideLength){
   　// 指定した個数ずつに分割する
   　let splitname = name.slice(i, i + divideLength);
   　// カンマで接続し、文字列にする
   　let numStr = splitname.join();
   　alert(numStr);
  }
}
