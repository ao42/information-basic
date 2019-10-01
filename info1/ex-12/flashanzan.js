// 変数を定義して初期化する
var x = 0;
var y = '';
var count = 0;
var answer = 0;

function anzan1() {
  // 0.5秒おきに flashanzan() 関数を呼び出す
  timerId = setInterval("flashanzan();",500);
}

function anzan2() {
  // 0.2秒おきに flashanzan() 関数を呼び出す
  timerId = setInterval("flashanzan();",200);
}

function flashanzan() {
  // 呼び出されるごとに変数countを1増やす
  count++;
  // 変数countが10を超えた場合
  if (count>10) {
    // timerIdのタイマーを消去する
    clearInterval(timerId);
    // 数字を入力してもらい数字に変換して変数yに代入する
    y = Number(prompt("合計は？（半角数字で）",""));
    // 変数yと変数answerに代入された答えが等しいとき
    if (y==answer) {
      alert('あたり！');
    }
    // 変数yと変数answerに代入された答えが等しくないとき
    else {
      alert('はずれ！' + '\n' + '答えは' + answer);
    }
    // 変数countとanswerとyを初期化する
    count=""
    answer=""
    y=""


  }
  // 変数countが10を超えない場合
  else {
    // 変数countが2で割り切れない場合
    if (count%2!=0) {
      // 1から10までの数字をランダムに作って変数xに代入する
      x = Math.floor(Math.random() * 10) + 1;
      // 変数xをHTMLに表示する
      document.getElementById("result").innerHTML=x
      // 合計を計算するため変数xを変数answerに加える
      answer=Number(answer)+Number(x)
    }
    // 変数countが2で割り切れる場合はHTMLの表示を初期化する
    else{
      document.getElementById("result").innerHTML=""
    }
  }
}