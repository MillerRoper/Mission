// Ingredients and directions for the Sloppy Joes recipe
const ingredients = [
    "1 Tbsp. extra-virgin olive oil",
    "1 medium yellow onion, chopped",
    "1 red bell pepper, seeds and ribs removed, chopped",
    "1/2 c. ketchup",
    "2 cloves garlic, finely chopped",
    "1 Tbsp. chili powder",
    "2 Tbsp. apple cider vinegar",
    "2 Tbsp. yellow mustard",
    "1 Tbsp. brown sugar",
    "1 Tbsp. Worcestershire sauce",
    "Kosher salt",
    "Freshly ground black pepper",
    "1 lb. ground beef",
    "1 c. canned tomato sauce",
    "6 hamburger buns, toasted"
  ];
  
  const directions = [
    "In a large skillet over medium-high heat, heat oil. Cook onion and bell pepper, stirring occasionally, until softened and slightly golden, 10 to 15 minutes.",
    "Add ketchup and cook, stirring occasionally, until color has darkened and ketchup is reduced to a thick paste, 7 to 10 minutes.",
    "Add garlic and chili powder and cook, stirring, until fragrant, about 1 minute. Add vinegar, mustard, brown sugar, and Worcestershire sauce; season with salt and pepper. Cook, stirring frequently, until incorporated, about 1 minute more.",
    "Increase heat to high and add ground beef. Using a fork, break apart beef until separated and no big lumps remain. Cook, stirring frequently, until browned, about 5 minutes.",
    "Add tomato sauce and bring to a boil, stirring to combine. Let cool slightly; season with salt, if needed.",
    "Divide beef mixture among buns and serve."
  ];
  
  // Function to populate the ingredients and directions
  function displayRecipe() {
    const ingredientsList = document.getElementById('ingredients-list');
    const directionsList = document.getElementById('directions-list');
  
    ingredients.forEach(ingredient => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  
    directions.forEach(direction => {
      const listItem = document.createElement('li');
      listItem.textContent = direction;
      directionsList.appendChild(listItem);
    });
  }
  
  // Initialize recipe display
  document.addEventListener('DOMContentLoaded', displayRecipe);
  