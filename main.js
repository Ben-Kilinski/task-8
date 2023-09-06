//task 8 
function validForm() {
    var isFirstNameValid = firstname.value[0] == firstname.value[0].toUpperCase();
    var isLastNameValid = lastname.value.lenght < 20;
    var isAgeValid = 65 >= birthday.value.getFullYear() >= 16;
    var isEmailValid = email.value.lastIndexOf(".com") == email.value.length-4 || email.value.lastIndexOf("co.il") == email.value.length-5;
    var isPhoneValid = phone.value.lenght == 10 && phone.value.indexOf("0") == 0

}