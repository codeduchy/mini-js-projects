const API_KEY= "e6e897d442d14835b8ab573eaeb74bb6";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipe(recipes) {
  recipeListEl.innerHTML="";
  recipes.forEach((recipe)=>{
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    
    const recipeImageEl = document.createElement("img");
    recipeImageEl.src= recipe.image;
    recipeImageEl.alt= "Recipe image";

    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    const recipeIngredientsEl= document.createElement("p");
    recipeIngredientsEl.innerHTML = `
    <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((i) => i.original).join(", ")}
    `;

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeListEl.appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
  })
}

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipe(recipes);
  console.log(recipes);
}

init();