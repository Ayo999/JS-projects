const output = document.getElementById('output')
const button = document.getElementById('button');
button.addEventListener('click', function(e){
    const binaryNum = document.getElementById('binaryNum').value;
    const decimalNum = parseInt(binaryNum, 2);
    if(isNaN(decimalNum)){
        output.textContent = 'Invalid input';
    }else if(binaryNum.length > 8){
        output.textContent = 'Input length should not be more than 8';
    }else{
        output.textContent = decimalNum;
    }
})