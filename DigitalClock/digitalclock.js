function displayTime(){
    getHours = new Date().getHours().toString().padStart(2, '0')
    getMinutes = new Date().getMinutes().toString().padStart(2, '0')
    getSeconds = new Date().getSeconds().toString().padStart(2, '0')
    
    let display = document.getElementById('display')
    display.textContent = `${getHours} : ${getMinutes} : ${getSeconds}`
}

setInterval(displayTime, 1000)

