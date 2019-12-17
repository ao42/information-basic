var lineThrough = "none";

function changeTextDecoration() {
  if (lineThrough == "none") {
    lineThrough = "line-through";
  } else {
    lineThrough = "none";
  }
  var ele = document.getElementById("line");
  ele.style.textDecoration = lineThrough;
}


// function li(){
//   var obj = document.getElementById(li);
//   obj.id = "il";
// }
//
//
// function li(){
// 	var li = document.getElementById("p3");
//
// 	if (p3.style.color == "red"){
// 		p3.style.color = "blue";
// 	}else{
// 		p3.style.color = "red";
// 	}
// }


// function changeId(idname){
//   var obj = document.getElementById(idname);
//   obj.id = "bbb";
// }
//
// function changeId(idname){
//   var obj = document.getElementById(idname);
//   obj.id = "aaa";
// }
