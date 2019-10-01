function calcBMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var heightm = height/100;
  var bmi = weight / (heightm * heightm);

  if (bmi<18.5){
    alert('痩せ気味');
  }else if(25<bmi){
    alert('肥満');
  }else{
    alert('普通');
  }
}
