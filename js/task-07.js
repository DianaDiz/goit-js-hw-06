const inputEl = document.querySelector('#font-size-control');
//console.log(inputEl);
const textEl = document.querySelector('#text');
//console.log(textEl);

textEl.style.fontSize = inputEl.value + 'px';
console.log(inputEl.value + 'px');

inputEl.addEventListener('input', onInputEl);

function onInputEl(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    
};





