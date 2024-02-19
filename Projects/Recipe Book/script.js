// ! Recipe Class to represent each recipe

class Recipe {
    constructor(name, ingredients, instructions, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.image = image;
    }
}

// ! Sample Recipes
const muttonRecipe = new Recipe(
    'Muttton',
    ['Mustard oil ', 'Goat Meat ', 'Tomato ', 'Onions ', 'Garlic ', 'spices.'],
    'Cook muttton. Goat Meat, onions, and garlic. Add tomato sauce and other spices. Cook for 1 hr',
    'mutton.jpg'
);
const maggieRecipe = new Recipe(
    'Maggie',
    ['Mustard oil ', 'Maggie ', 'Tomato ', 'Onions ', 'Garlic ', 'spices ', 'Maggie Massala ', 'Water.'],
    'Cook garlic and onliom in oil. Maggie, onions, and garlic. Add tomato sauce and other spices. Cook for 10 min',
    'maggie.jpeg'
);


//  ! Display Recipe on Page Load
document.addEventListener('DOMContentLoaded', () => {
    displayRecipe(muttonRecipe);
});


// ! Function to display a recipe
const displayRecipe = (recipe) => {
    const recipeContainer = document.getElementById('recipe-container');

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = 'Recipe Image';
    recipeImage.classList.add('recipe-image');

    const recipeName = document.createElement('h2');
    recipeName.textContent = recipe.name;

    const recipeIngredients = document.createElement('p');
    recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;

    const recipeInstructions = document.createElement('p');
    recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;

    const recipeButton = document.createElement('button');
    recipeButton.textContent = 'Show Recipe';
    recipeButton.classList.add('recipe-button');
    recipeButton.addEventListener('click', () => {

        // ! Toggle between recipes
        if (recipe === muttonRecipe) {
            displayRecipe(maggieRecipe);
        }
        else {
            displayRecipe(muttonRecipe);
        }
    });

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(recipeIngredients);
    recipeCard.appendChild(recipeInstructions);
    recipeCard.appendChild(recipeButton);

    recipeContainer.innerHTML = '';
    recipeContainer.appendChild(recipeCard);

}


