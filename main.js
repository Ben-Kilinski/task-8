//task 8 
function validForm() {
    var isFirstNameValid = firstname.value[0] == firstname.value[0].toUpperCase();
    var isLastNameValid = lastname.value.lenght < 20;
    var isAgeValid = 65 >= birthday.value.getFullYear() >= 16;
    var isEmailValid = email.value.lastIndexOf(".com") == email.value.length-4 || email.value.lastIndexOf("co.il") == email.value.length-5;
    var isPhoneValid = phone.value.lenght == 10 && phone.value.indexOf("0") == 0

    var i = 0

    if(isFirstNameValid && isLastNameValid && isAgeValid && isEmailValid && isPhoneValid){
        Alert("Welcome")
        return true
    }
    else{
        for(var i=0; i<4;i++){
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
            document.body.innerHTML = "<h1>Try number: ${i}</h1>"
            return false    
        }
    alert("Wait 30 seconds for another try")  
    setTimeout(validForm, 30000)  
    for(var counter=30; counter>0; counter--){
        document.body.innerHTML += "<h1>Next try on: ${counter}</h1>"
        if(counter = 0){
            alert("Try again")
        }
    }
    }    
}