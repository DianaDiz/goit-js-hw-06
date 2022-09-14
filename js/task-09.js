
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');


function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  return span.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btn.addEventListener('click', onBtnClick);