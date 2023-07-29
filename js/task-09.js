function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
console.log(body);
const changeColorBtn = document.querySelector('.change-color');
console.log(changeColorBtn);
const nameColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);
function onChangeColorBtnClick(evt) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}