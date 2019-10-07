function ifelse() {
  var wo = prompt("今日の夕飯の気分を（洋食/和食/中華/その他）で答えてください");
  if (wo=="洋食") {
    alert("ニューオリンズ")
  }else if (wo=="和食") {
    alert("松乃家")
  }else if (wo=="中華") {
    alert("大阪王将")
  }else {
    alert("improve")
  }
}

function SW() {
  var word = prompt("今日の夕飯の気分を（洋食/和食/中華/その他/何でも）で答えてください");

    switch (word){
    case "洋食":
    alert("ニューオリンズ");
    break;


    case "和食":
    alert("松乃家");
    break;


    case "中華":
    alert("大阪王将");
    break;


    case "その他":
    alert("imorove");
    break;

    case "何でも":
    var num = Math.random();
    if (num < 0.1) {
      alert("ニューオリ")
    }else if (num < 0.33 && num >= 0.1) {
      alert("松乃家")
    }else if (num < 0.66 && num >= 0.33) {
      alert("大阪王将")
    }else {
      alert("improve")
    }    break;

    default:
    alert("（洋食/和食/中華/その他/何でも）でお応えください")
        break;
  }
}
