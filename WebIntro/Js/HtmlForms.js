
//-------------------------------text input--------------------------------
const nameText = document.querySelector('#name');
const nameError =  document.querySelector('#errorName');
nameText.addEventListener('input', () =>{
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(!namePattern.test(nameText.value))
        nameError.innerHTML = "Name is Incorrect";
    else
    nameError.innerHTML = "";
});
//----------------------------------Number input-----------------------
const pwd = document.querySelector('#password');
const pwdError =  document.querySelector('#errorPassword');
pwd.addEventListener('input', () =>{
    let pwdPattern = new RegExp('^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$');
    if(!pwdPattern.test(pwd.value))
        pwdError.innerHTML = "Password is Incorrect format";
    else
        pwdError.innerHTML = "";
});
//----------------------------------Email input------------------------
const email = document.querySelector('#email');
const emailError =  document.querySelector('#errorEmail');
email.addEventListener('input', () =>{
    let emailPattern = new RegExp('^[A-za-z]+([+. \-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$');
    if(!emailPattern.test(email.value))
        emailError.innerHTML = "Email is Incorrect format";
    else
        emailError.innerHTML = "";
});
//---------------------------------Tel input--------------------
const tel = document.querySelector('#tel');
const errorTel =  document.querySelector('#errorTel');
tel.addEventListener('input', () =>{
    let phonePattern = new RegExp('^[0-9]{2}\\s[0-9]{10}$');
    if(!phonePattern.test(phonePattern.value))
        errorTel.innerHTML = "Phone number is Incorrect format";
    else
        errorTel.innerHTML = "";
});
//------------------------------range-------------------
const salary = document.querySelector('#salary');
const outputSal =  document.querySelector('#salary_output');
outputSal.innerHTML = salary.value;
salary.addEventListener('input', () =>{
    outputSal.innerHTML = salary.value;
});







