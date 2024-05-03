function weightHeight(weight, height) {
    var bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        return ("Your bmi is " + bmi + ",  underweight");
    } else if (bmi > 24.9) {
        return ("Your bmi is " + bmi + ",Overweight");
    } else {
        return ("Your bmi is " + bmi + ", Normal weight");
    }
}

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    
    

    var height = document.getElementById("height").value;
 
    var result = weightHeight(weight, height);

    document.getElementById("result").innerText = result;
    
}



