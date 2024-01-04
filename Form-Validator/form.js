let button = document.getElementById('button');
button.addEventListener("click", function(e) {
    checkFirst()
    checkLast()
    checkEmail()
    checkPassword()
    event.preventDefault()
    if(fnameError.textContent == "" && lnameError.textContent == "" && emailError.textContent == "" && passwordError.textContent == "" ){
        alert('SUBMITTED!')
    }
})

checkFirst = () => {
    let firstName = document.getElementById('firstName').value;
    let fnameError = document.getElementById('fnameError');
       if(firstName.trim() == ''){
           fnameError.textContent = "First Name cannot be empty!";
        }else if(firstName.trim().length < 3){
            fnameError.textContent = "First Name should be at least 3 characters";
        }else if(firstName.trim().length >= 3){
            fnameError.textContent = "";
        }
}

checkLast = () => {
    let lastName = document.getElementById('lastName').value;
    let lnameError = document.getElementById('lnameError');
       if(lastName.trim() == ''){
           lnameError.textContent = "Last Name cannot be empty!"
        }else if(lastName.trim().length < 3){
            lnameError.textContent = "Last Name should be at least 3 characters";
        }else if(lastName.trim().length >= 3){
            lnameError.textContent = "";
        }
}

checkEmail = () => {
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(re)){
        emailError.textContent = "";
    }else if(email .trim().length > 0 && !email.match(re)){
        emailError.textContent = "Looks like this is not an email";
    }else if(email.trim() == ''){
        emailError.textContent = "Email cannot be empty!";
    }
}

checkPassword = () => {
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    const passwordRegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(password.trim() == ''){
        passwordError.textContent = "Password cannot be empty!";
    }else if(password.trim().length < 8){
        passwordError.textContent = "Password should be at least 8 characters";
    }else if(password.match(passwordRegExp)){
        passwordError.textContent = "";
    }else{
        passwordError.textContent = "Invalid password";
    }
}