let count = 0;
let output = document.getElementById('output')
increase = () => {
    count++;
    output.textContent = count;
}
decrease = () => {
    count--;
    output.textContent = count;
}
reset = () => {
    count=0;
    output.textContent = count;
}
