
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function onBtnClick() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
}
btn.addEventListener('click', onBtnClick);