const inputValid = document.querySelector('#validation-input');
inputValid.addEventListener('blur', handlerCheck);
function handlerCheck(event) {
    
    if (event.currentTarget.value.length === Number(inputValid.dataset.length)) {
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');

    } else {
        inputValid.classList.remove('valid');
        inputValid.classList.add('invalid');
    }
}