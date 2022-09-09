const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemPotatoesEl = document.createElement('li');
console.log(itemPotatoesEl);
itemPotatoesEl.classList.add('item');
itemPotatoesEl.textContent = 'Potatoes';

const itemMushroomsEl = document.createElement('li');
console.log(itemMushroomsEl);
itemMushroomsEl.classList.add('item');
itemMushroomsEl.textContent = 'Mushrooms';

const itemGarlicEl = document.createElement('li');
console.log(itemGarlicEl);
itemGarlicEl.classList.add('item');
itemGarlicEl.textContent = 'Garlic';

const itemTomatosEl = document.createElement('li');
console.log(itemTomatosEl);
itemTomatosEl.classList.add('item');
itemTomatosEl.textContent = 'Tomatos';

const itemHerbsEl = document.createElement('li');
console.log(itemHerbsEl);
itemHerbsEl.classList.add('item');
itemHerbsEl.textContent = 'Herbs';

const itemCondimentsEl = document.createElement('li');
console.log(itemCondimentsEl);
itemCondimentsEl.classList.add('item');
itemCondimentsEl.textContent = 'Condiments';

const list = document.querySelector('#ingredients');

list.append(itemPotatoesEl, itemMushroomsEl, itemGarlicEl, itemTomatosEl, itemHerbsEl, itemCondimentsEl);


