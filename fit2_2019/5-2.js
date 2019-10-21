function hai(){
  var name=[];

  for (i=0 ; i<6 ; i++){
    name[i] = prompt("名前を入力してください");
  }
  
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
