const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ingredientsNeeded = 0;
  let combinedRecipe;
  recipes.forEach(recipe => {
    ingredientsNeeded = 0;
    recipe.ingredients.forEach(ingredient => {
      if (bakeryA.includes(ingredient) || bakeryB.includes(ingredient)) {
        ingredientsNeeded++;
        if (ingredientsNeeded === recipe.ingredients.length) {
          combinedRecipe = recipe.name;
        } 
      }
    })
  });
  return combinedRecipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));