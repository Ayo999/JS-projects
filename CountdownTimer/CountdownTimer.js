let startButton = document.getElementById('start')
let resetButton = document.getElementById('reset')
let output = document.getElementById('output')
startButton.addEventListener('click', function(e){
    let hours = document.getElementById('inputHours').value;
    let minutes = document.getElementById('inputMinutes').value;
    let seconds = document.getElementById('inputSeconds').value;  
     if((hours == '24' && minutes != '00' || hours == '24' && seconds != '00') || (hours == '00' && minutes == '00' && seconds == '00')){
        console.error('ERROR!');
    }else{
            let timeInSecs = (hours * 3600) + (minutes * 60) + (seconds * 1)
            console.log(timeInSecs);
            let myInterval = 
            setInterval(() => {
                timeInSecs--
                console.log(timeInSecs);
                if(timeInSecs === 0){
                    clearInterval(myInterval);
                }
                let hoursOutput = Math.floor(timeInSecs/3600).toString().padStart(2, '0')
                let minutesOutput = Math.floor(timeInSecs%3600/60).toString().padStart(2, '0')
                let secondsOutput = (timeInSecs % 60).toString().padStart(2, '0')
                
                output.textContent = `${hoursOutput} : ${minutesOutput} : ${secondsOutput}`
            }, 1000)
        }
    }
)


