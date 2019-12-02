function timeout_callback() {
  alert("timeout!");
}

function timer(){
  var neko = setInterval(timeout_callback,10000);
}

function bureiku(){
  clearInterval();
}


var testTimer;

function timer(){
testTimer=setInterval(timeout_callback,10000);
}

function bureiku(){
clearInterval(testTimer);
}
