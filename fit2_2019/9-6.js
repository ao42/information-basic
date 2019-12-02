function taipu(){
	var timer_id;
	var i = 0;

  var mozi = document.getElementById("mozi").value;
  var n = mozi.length

	timer_id = setInterval((function(){
			console.log(i);

      var elem = document.getElementById("test");
      elem.innerHTML = (mozi.charAt(i));

			i++;
			if (i == n) {
				clearInterval(timer_id);
			}
	}), 1000);
}
