// Взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

const allRecipes = document.getElementById('recipes');
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

fetch(url)
    .then(response => response.json())
    .then(recipesObject => {
        const { recipes } = recipesObject;

        for (const recipe of recipes) {
            const recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe-container');

            recipeContainer.innerHTML = `
                <h1>Recipe ${recipe.id}: ${recipe.name}</h1>
                <div class="recipe-inner">
                    <img class="img" src="${recipe.image}" alt="Image of ${recipe.name}">
                    <div class="recipe-info">
                        <div class="recipe-info-top">
                            <ul>
                                <p><strong>Ingredients:</strong></p>
                                ${recipe.ingredients.map(ingr => `<li>${ingr}</li>`).join('')}
                            </ul>
                            <ul>
                                <p><strong>Instructions:</strong></p>
                                ${recipe.instructions.map(instr => `<li>${instr}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recipe-info-middle">
                            <div><p><i>Prepare Time:</i> ${recipe.prepTimeMinutes} min,</p> 
                                 <p><i>Cook Time:</i> ${recipe.cookTimeMinutes} min,</p> 
                                 <p><i>Difficulty:</i> ${recipe.difficulty},</p>
                                 <p><i>Servings:</i> ${recipe.servings},</p>
                                 <p><i>Calories Per Serving:</i> ${recipe.caloriesPerServing}</p>
                            </div>
                            <div><p><i>Cuisine:</i> ${recipe.cuisine},</p>
                                 <p><i>Meal Type:</i> ${recipe.mealType.join(', ')},</p>
                                 <p><i>Tags:</i> ${recipe.tags.join(', ')}</p>
                            </div>
                        </div>
                        <div class="recipe-info-bottom">
                            <p><i>Rating:</i> ${recipe.rating},</p>
                            <p><i>Review Count:</i> ${recipe.reviewCount},</p>
                            <p><i>Published By:</i> User ${recipe.userId}</p>
                        </div>
                    </div>
                </div>
            `;

            allRecipes.appendChild(recipeContainer);
        }
    });

