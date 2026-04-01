const API_KEY = 'f30726a15c764d02b237bee250c541e9';
const recipeResults = document.getElementById('recipeResults');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

let recipesData = []; // Store fetched data for sorting/filtering

// Function to fetch recipes
async function getRecipes() {
    const query = searchInput.value;
    if (!query) return alert("Please enter a food item");

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&number=12&apiKey=${API_KEY}`);
        const data = await response.json();
        recipesData = data.results;
        displayRecipes(recipesData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display recipes on the UI
function displayRecipes(recipes) {
    recipeResults.innerHTML = "";
    
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>⏱ ${recipe.readyInMinutes} mins</p>
            <p>🥗 Health Score: ${recipe.healthScore}</p>
        `;
        recipeResults.appendChild(card);
    });
}

// Filter and Sort Logic
function applyFilters() {
    let filtered = [...recipesData];
    const diet = document.getElementById('filterDiet').value;
    const sort = document.getElementById('sortOption').value;

    // Filter by diet
    if (diet !== "") {
        filtered = filtered.filter(r => r.diets.includes(diet));
    }

    // Sort logic
    if (sort === "time") {
        filtered.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else if (sort === "health") {
        filtered.sort((a, b) => b.healthScore - a.healthScore);
    }

    displayRecipes(filtered);
}

// Event Listeners
searchBtn.addEventListener('click', getRecipes);
document.getElementById('filterDiet').addEventListener('change', applyFilters);
document.getElementById('sortOption').addEventListener('change', applyFilters);