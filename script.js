const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateInput();
});

function validateInput(){
    const nameval = username.value.trim();
    const emailval = email.value.trim();
    const passval = password.value.trim();
    const cpassval = cpassword.value.trim();

    if(nameval===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailval===''){
        setError(email,'Email is required')
    }
    else{
        setSuccess(email)
    }
    if(passval===''){
        setError(password,'Password is required')
    }
    else if(passval.length<8){
        setError(password,'Password should more thatn 8 characters')
    }
    else{
        setSuccess(password)
    }
    if(cpassval===''){
        setError(cpassword,'Password is required to confirm')
    }
    else if(passval!==cpassval){
        setError(cpassword,'Confirm Password not matched')
    }
    else{
        setSuccess(cpassword)
    }

}

function setError(element,message){
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = message;
    formGroup.classList.add('error')
    formGroup.classList.remove('success')
}
function setSuccess(element,message){
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = '';
    formGroup.classList.add('success')
    formGroup.classList.remove('error')
}

