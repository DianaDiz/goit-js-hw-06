let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let valueEL = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onIncrementBtnClick = () => {
    counterValue += 1;
    return valueEL.textContent = counterValue;
};
incrementBtn.addEventListener('click', onIncrementBtnClick);

const onDecrementBtnClick = () => {
    counterValue -= 1;
    return valueEL.textContent = counterValue;
}
decrementBtn.addEventListener('click', onDecrementBtnClick);

