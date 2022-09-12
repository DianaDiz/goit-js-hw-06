const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const inputElLength = inputEl.getAttribute('data-length');

function onInputElBlur () {
    const isValid = event.currentTarget.value.length === Number(inputElLength);
    
    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }

}

inputEl.addEventListener('blur', onInputElBlur);
