function randam() {
  var num = Math.random();
  if (num < 0.1) {
    alert("洋食")
  }else if (num < 0.33 && num >= 0.1) {
    alert("和食")
  }else if (num < 0.66 && num >= 0.33) {
    alert("中華")
  }else {
    alert("その他")
  }
}

function ifelse() {
  var num = Math.random();
  if (num < 0.1) {
    alert("洋食")
  }else if (num < 0.33 && num >= 0.1) {
    alert("和食")
  }else if (num < 0.66 && num >= 0.33) {
    alert("中華")
  }else {
    alert("その他")
  }
}

function switch() {
  var word = prompt("今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください");

    switch (word) {
    case "洋食":
    alert("素敵な一日を！");
    break;

    switch (word) {
    case "和食":
    alert("素敵な一日を！");
    break;

    switch (word) {
    case "中華":
    alert("素敵な一日を！");
    break;

    switch (word) {
    case "その他":
    alert("素敵な一日を！");
    break;

    default:
    alert("洋食/和食/中華/その他でお答えください");
    break;
    }
}
