function calculate(){
    var bmi;
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "Underweight 😒";
        result.style.color = "#F7D716";
    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight 😍";
        result.style.color = "#3EC70B";
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight 😮";
        result.style.color = "#FF1818";
    }
    else{
        category = "Obese 😱";
        result.style.color = "#990000";
    }
    document.getElementById("category").textContent = category;
}