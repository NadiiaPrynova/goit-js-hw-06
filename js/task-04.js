const output = document.querySelector("#value");
let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


incrementBtn.addEventListener('click', onIncrementBtnClick)
function onIncrementBtnClick(event) {
    counterValue += 1;
    output.textContent = counterValue;
}
decrementBtn.addEventListener('click', onDecrementBtnClick)
function onDecrementBtnClick(event) {
    counterValue -= 1;
    output.textContent = counterValue;
}
