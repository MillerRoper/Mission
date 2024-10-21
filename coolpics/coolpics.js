// Get references to the menu button and the menu items
const menuButton = document.getElementById('menuButton');
const menuItems = document.querySelector('nav ul');

// Initialize aria-expanded attribute
menuButton.setAttribute('aria-expanded', 'false');

// Add a click event listener to toggle the 'show' class on the menu items
menuButton.addEventListener('click', function () {
    const isHidden = menuItems.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', !isHidden); // Update aria-expanded
});

// Add keyboard accessibility
menuButton.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') { // Check for Enter or Space key
        event.preventDefault(); // Prevent default behavior (e.g., scrolling)
        menuButton.click(); // Simulate a click
    }
});

// Function to handle the viewing of an image
function viewHandler(event) {
    const clickedElement = event.target;


    // Check if the clicked element has a src attribute (i.e., it's an image)
    if (clickedElement.tagName === 'IMG') {
        const newImageSrc = clickedElement.src.replace('-sm.jpeg', '-full.jpeg'); // Assuming original filename structure

        const template = viewerTemplate(newImageSrc, clickedElement.alt)
        document.body.insertAdjacentHTML("afterbegin", template)
        const viewer = document.querySelector('.viewer');
        viewer.classList.remove('hide'); // Show the viewer
        viewer.style.opacity = '1'; // Ensure viewer is visible

        // Add a listener to the close button (X)
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

// Function to remove the viewer div from the DOM
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.style.opacity = '0'; // Fade out the viewer
    setTimeout(() => {
        viewer.remove(); // Hide the viewer after fading out
    }, 300); // Match the transition duration
}

// Add event listener to the .gallery section
const gallerySection = document.querySelector('.gallery');
gallerySection.addEventListener('click', viewHandler);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }