const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const defaultName = textOutput.textContent;
textInput.addEventListener('input', handlerInput);
function handlerInput(event) {
   textOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
        textOutput.textContent = "Anonymous";
   } 

}