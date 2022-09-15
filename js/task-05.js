const textInputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function ontextInputElInput(event) {
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous';
    }
};
textInputEl.addEventListener('input', ontextInputElInput);
