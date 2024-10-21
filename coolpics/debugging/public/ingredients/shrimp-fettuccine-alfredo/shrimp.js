// Ingredients and directions for the Chicken Stir-Fry recipe
const ingredients = [
    "1/2 c. reduced-sodium soy sauce",
    "2 Tbsp. honey",
    "2 tsp. toasted sesame oil",
    "1 Tbsp. canola oil",
    "1 head broccoli, cut into small florets",
    "1 bell pepper, seeds and ribs removed, chopped",
    "2 cloves garlic, finely chopped",
    "1 lb. boneless, skinless chicken breast, cut into 1\" pieces",
    "1/3 c. cashews",
    "Freshly ground black pepper"
  ];
  
  const directions = [
    "In a small bowl, whisk soy sauce, honey, and sesame oil.",
    "In a large skillet over high heat, heat oil. Cook broccoli, bell pepper, and garlic, stirring frequently, until softened, about 5 minutes. Add chicken and cook, tossing occasionally, until golden brown and cooked through, about 8 minutes. Stir in cashews; season with pepper.",
    "Pour sauce into skillet and bring to a simmer. Cook, stirring occasionally, until thickened, about 5 minutes."
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
  