function timeout_callback() {
  alert("timeout!");
}

function timer(){
  setTimeout(timeout_callback,10000);
}
