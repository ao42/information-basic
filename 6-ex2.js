var size = 12;
var color = "red";

function changeStyle1() {
  size = size + 1;
  if (color == "red") {
    color = "black";
  } else {
    color = "red";
  }

  var ele = document.getElementById("p1234");
  ele.style.fontSize = size + "px";
  ele.style.color = color;
}

function changeStyle2() {
  if (color == "red") {
    color = "black";
  } else {
    color = "red";
  }

  var ele = document.getElementById("p1234");
  ele.style.color = color;
}

function changeStyle3() {
  size = size + 1;

  var ele = document.getElementById("p1234");
  ele.style.fontSize = size + "px";
}
