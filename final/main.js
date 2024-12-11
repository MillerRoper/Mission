import {reviews} from "./reviews.mjs"

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'enabled') {
        enableDarkMode();
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }
});


let currentReviewIndex = 0;
function filterout() {

    
    const reviewedList = reviews.filter( (review) => review.rating > 1)
    console.log(reviewedList)
    return reviewedList;
}


function displayReview() {



    const reviewNameElement = document.getElementById('review-name');
    const reviewRatingElement = document.getElementById('review-rating');
    const reviewTextElement = document.getElementById('review-text');

    const newReviews = filterout();
    console.log(newReviews)

    const currentReview = newReviews[currentReviewIndex];

    reviewNameElement.textContent = currentReview.name;
    reviewRatingElement.textContent = '★'.repeat(currentReview.rating) + '☆'.repeat(5 - currentReview.rating);
    reviewTextElement.textContent = currentReview.text;

    if (currentReviewIndex === 3){
        currentReviewIndex = 0;
    }
    else{
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const repairFormButton = document.getElementById('repair-form-trigger');
    
    if (repairFormButton) {
        repairFormButton.addEventListener('click', displayReview);
    }
});