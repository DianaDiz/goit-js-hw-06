const categoriesEL = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEL.children.length}`);

const items = document.querySelectorAll('.item');

items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const quantityEl = item.querySelectorAll('li');
    const elementsEl = document.querySelector('.item');
    console.log(`Elements: ${quantityEl.length}`);
    
    
});


