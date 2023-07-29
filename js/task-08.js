const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    const formElement = evt.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        return alert('Empty input! Please fill all fields!')
    }
    const formData = {
        email,
        password,
    };
    console.log(formData);
    // console.log(formElement.email.value);
    // console.log(formElement.password.value);
    evt.currentTarget.reset();
}