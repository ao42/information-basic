function hai(){
  var n1 = prompt("みよじを入力してください");
  var n2 = prompt("名前を入力してください");
  var n3 = prompt("年齢を入力してください");
  var n4 = prompt("性別を入力してください");

  var human = {
    name: {familyName: n1, firstName: n2 },
    age: n3,
    gender: n4
  };

  alert("姓: " + human.name.familyName);
  alert("名: " + human.name["firstName"]);
  alert("年齢: " + human.age);
  alert("性別: " + human['gender']);
}
