const refs = {
    inputControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
refs.text.style.fontSize = `${refs.inputControl.value}px`;
refs.inputControl.addEventListener('input', handlerInput);
function handlerInput(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;

} 