const textInputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(spanEl);
const ontextInputElInput = () => {
    spanEl.textContent = event.currentTarget.value;
}
textInputEl.addEventListener('input', ontextInputElInput);