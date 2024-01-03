let calculateButton = document.getElementById('calculateBtn')
let result = document.getElementById('result')
calculateButton.addEventListener('click', function(e){
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let bmiValue = weight / (height/100)**2
    let roundedBmi = parseFloat(bmiValue.toFixed(1));
    if (roundedBmi < 18.5){
        result.textContent = `BMI = ${roundedBmi} (Underweight)`
    }else if(roundedBmi >= 18.5 && roundedBmi <= 24.9){
        result.textContent = `BMI = ${roundedBmi} (Healthy Weight)`
    }else if(roundedBmi >= 25 && roundedBmi <= 29.9){
        result.textContent = `BMI = ${roundedBmi} (Overweight)`
    }else if(roundedBmi >= 30){
        result.textContent = `BMI = ${roundedBmi} (Obesity)`
    } 
})