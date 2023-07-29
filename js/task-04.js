const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(counterValue);
console.log(decrementBtn);
// console.log(incrementBtn);

incrementBtn.addEventListener('click', onIncrementBtnClick)
function onIncrementBtnClick(event) {
    counterValue.textContent += 1;
}
decrementBtn.addEventListener('click', onDecrementBtnClick)
function onDecrementBtnClick(event) {
    counterValue.textContent -= 1;
}
