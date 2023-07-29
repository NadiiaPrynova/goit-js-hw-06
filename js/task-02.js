const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const list = document.querySelector('#ingredients');
// const listIngredient = document.createElement('li');
// listIngredient.textContent = 'Potatoes';
// listIngredient.classList.add('item');
// const listIngredient2 = document.createElement('li');
// listIngredient2.textContent = 'Mushrooms';
// listIngredient2.classList.add('item');listIngredient.textContent = 'Potatoes';
// const listIngredient3 = document.createElement('li');
// listIngredient3.textContent = 'Garlic';
// listIngredient3.classList.add('item');listIngredient.textContent = 'Potatoes';
// const listIngredient4 = document.createElement('li');
// listIngredient4.textContent = 'Tomatos';
// listIngredient4.classList.add('item');listIngredient.textContent = 'Potatoes';
// const listIngredient5 = document.createElement('li');
// listIngredient5.textContent = 'Herbs';
// listIngredient5.classList.add('item');listIngredient.textContent = 'Potatoes';
// const listIngredient6 = document.createElement('li');
// listIngredient6.textContent = 'Condiments';
// listIngredient6.classList.add('item');listIngredient.textContent = 'Potatoes';
// list.append(listIngredient, listIngredient2, listIngredient3, listIngredient4, listIngredient5, listIngredient6)
// console.log(list);



const listIngredients = ingredients.map(ingredient => {
  const listIngredient = document.createElement("li");
  listIngredient.textContent = ingredient;
  listIngredient.classList.add('item');
  
  return listIngredient
;
})
const list = document.querySelector("#ingredients");
list.append(...listIngredients);
console.log(list);

