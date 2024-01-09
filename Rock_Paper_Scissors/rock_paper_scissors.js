let buttons = document.querySelectorAll("[data-button]")
buttons.forEach((button) => 
button.addEventListener("click", function(e){
    const player = button.dataset.button
    console.log(player);

        const randomNum = Math.floor(Math.random()*3)
        let cpu = buttons[randomNum].dataset.button
        console.log(cpu);

        if(player == "PAPER" && cpu == "ROCK"){
            console.log("PLAYER WINS");
        }else if(player == "ROCK" && cpu == "SCISSORS"){
            console.log("PLAYER WINS");
        }else if(player == "SCISSORS" && cpu == "PAPER"){
            console.log("PLAYER WINS");
        }else if(cpu == "PAPER" && player == "ROCK"){
            console.log("CPU WINS");
        }else if(cpu == "ROCK" && player == "SCISSORS"){
            console.log("CPU WINS");
        }else if(cpu == "SCISSORS" && player == "PAPER"){
            console.log("CPU WINS");
        }else if(player == cpu){
            console.log("IT'S A TIE!");
        }
    }
)
)