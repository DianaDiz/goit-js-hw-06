const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const li = document.createElement('li');
li.textContent = `${ingredients[0]}`;
li.classList.add('item');
console.log(li);

const array = [];

ingredients.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = `${element}`;
  return array.push(li);
});
console.log(array);

const ul = document.querySelector('#ingredients');
ul.append(...array);