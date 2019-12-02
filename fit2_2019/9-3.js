function light_print(event) {
    var elm = document.getElementById('lighttext');
    elm.value = event.value;
    console.log(event.value);
    var n = event.value;

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,200,20);
    ctx.fillRect(-10, 10, n, 20);


}

window.addEventListener('devicelight', light_print);
