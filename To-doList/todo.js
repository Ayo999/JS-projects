let ul = document.getElementById('ul')
let button = document.getElementById('button')

button.addEventListener('click', function(){
    let input = document.getElementById('inputBox');
    if(input.value === ''){
        alert('This field cannot be left empty!')
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value;
        ul.appendChild(li);
        saveData()
// Create delete symbol to remove tasks
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        span.id  = 'span';
        li.appendChild(span);
    }
    input.value = '';
    saveData()
})
// Line through when clicked to mark task as completed    
    ul.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle('clicked')
            saveData()
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        }
})  


function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function showTasks(){
    ul.innerHTML = localStorage.getItem("data");
}
showTasks()

// Time and Date
// function updateTime(){
//     let dateBox = document.getElementById('dateBox')
//     let timeBox = document.getElementById('timeBox')
//     const currentDate = new Date()
//     let year = currentDate.getFullYear().toString().padStart(2, '0')
//     let month = currentDate.getMonth()+1
//     let day = currentDate.getDate().toString().padStart(2, '0')
//     let hours = currentDate.getHours().toString().padStart(2, '0')
//     let minutes = currentDate.getMinutes().toString().padStart(2, '0')
//     let seconds = currentDate.getSeconds().toString().padStart(2, '0')
//     dateBox.textContent = `${year} - ${month} - ${day}`
//     timeBox.textContent = `${hours} : ${minutes} : ${seconds}`
// }

// setInterval(updateTime, 1000)
