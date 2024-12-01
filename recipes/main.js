import recipes from './recipes.mjs';


function getRandomNumber(length){
    return Math.floor(Math.random()*length)
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = getRandomNumber(listLength);
	return list[randomNum];
}

console.log(getRandomListEntry(recipes));



function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption class= "details">
		<ul class="tags">
        ${tagsTemplate(recipe.tags)
        }
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__rating">
        ${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
		${recipe.description}
		</p>
</figcaption>
</figure>`;
}


function tagsTemplate(tags) {
   let html=""
	// loop through the tags list and transform the strings to HTML
    // Follow the pattern of ratingTemplate or the recipeTemplate functions

	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    // The rating argument can be a number between 1 and 5. If it's 4, we need 4 full stars and 1 empty star.

    // check to see if the current index of the loop is less than our rating
    // if so then output a filled star

    // else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}



function renderRecipes(recipeList) {
	// get the element we will output the recipes into

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.

    const recipe = getRandomListEntry(recipes);
    let recipemain = (recipeTemplate(recipe));

    const main = document.querySelector("main")

    console.log(main)

    // Set the recipemain, which is the generated html string, to the the innerHTML of main
    main.innerHTML = recipemain 

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();


function filter(query) {
    // You need to implement the filterFunction. Basically if the return value of the filterFunction is true, it will keep it. False will exclude it
	const filtered = recipes.filter(filterFunction)
	// sort by name. Look up the function localeCompare on google and it should show how to use it
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
    console.log("searchhandler")
	// get the search input (follow the same pattern as what we used to get the form element) (the value you can get from the variableName.value)
    // convert the value in the input to lowercase (if you google how to lowercase a string)
    // use the filter function to filter our recipes (call that filter function above passing the lower case search input)
    // render the filtered list (since the filter function returns a filtered, sorted array, we will then call renderRecipes() and pass that array as a parameter)

}

const form = document.querySelector("form")

form.addEventListener("submit",searchHandler)