//task 8 
var counter = 0;
var formFields = document.querySelectorAll("input")


function disableFormFields() {
    for (var i = 0; i < formFields.length; i++) { // i passa por todos os input's
        formFields[i].disabled = true; // Desativa todos os campos de entrada
    }
}
function enableFormFields() {
    for (var i = 0; i < formFields.length; i++) {
        formFields[i].disabled = false; // Ativa todos os campos de entrada
    }
}

function validForm() {
    var isFirstNameValid = firstname.value[0] == firstname.value[0].toUpperCase();
    var isLastNameValid = lastname.value.length < 20;
    
    var currentYear = new Date().getFullYear(); 
    var birthYear = new Date(birthday.value).getFullYear(); 
    var isAgeValid = currentYear - birthYear >= 16 && currentYear - birthYear <= 65;

    var isEmailValid = email.value.lastIndexOf(".com") == email.value.length-4 || email.value.lastIndexOf("co.il") == email.value.length-5;
    var isPhoneValid = phone.value.length == 10 && phone.value.indexOf("0") == 0

    if(isFirstNameValid && isLastNameValid && isAgeValid 
    && isEmailValid && isPhoneValid) {
        alert("Welcome")
        return true
    }
    else{
        if(!isFirstNameValid){ 
            firstname.style.border = "1px solid red"
            alert("The first letter of your name needs to be on uppercase")
            }
        if(!isLastNameValid){
            lastname.style.border = "1px solid red"
            alert("The family name has more than 20 characters")
            }
        if(!isAgeValid){
            birthday.style.border = "1px solid red"
            alert("The allowed age is between 16 and 65")
            }
        if(!isEmailValid){
            email.style.border = "1px solid red"
            alert("The email formats needs to end with '.com' or 'co.il'")
            }
        if(!isPhoneValid){
            phone.style.border = "1px solid red"
            alert("The phone number needs to contain 10 characters and to beagin with'0'")
            }
    
    counter++;
    document.getElementById("errorWatch").innerText = "wrong attempts: " + counter;
     
    if (counter == 4) { 
        timer()
        alert("Wait 30 seconds for another try");
        disableFormFields()
        counter = 0; // Reinicie o contador
        setTimeout(function () {
            alert("You can try again");
            enableFormFields()
            document.getElementById("anotherTryTimer").innerText = " "
        }, 30000); // 30 segundos
    }
            
    return false    
    }    
}

function timer() {
    var seconds = 30;
    var countdownElement = document.getElementById("anotherTryTimer");

    var interval = setInterval(function () {
        countdownElement.innerText = "wait " + seconds + " seconds for trying again :_:";
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            countdownElement.innerText = "";
            document.getElementById("errorWatch").innerText = "";
            
        }
    }, 1000);
}










