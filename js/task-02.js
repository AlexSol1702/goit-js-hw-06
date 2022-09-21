const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elems = [];

const ingredientsRef = items => {
  items.map((item) => {
    const ingredientRef = document.createElement("li");
    ingredientRef.textContent = `${item}`;
    ingredientRef.classList.add("item");

    return elems.push(ingredientRef); 
  })
    const ingredientsList = document.querySelector("#ingredients");
    ingredientsList.append(...elems);
};
  
ingredientsRef(ingredients);


