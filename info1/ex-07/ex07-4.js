function calcBMI() {
                var height = document.getElementById("height").value;
                var weight = document.getElementById("weight").value;
                var heightm = height/100;
                var bmi = weight / (heightm * heightm);
                alert('BMI: ' + bmi);
            }
