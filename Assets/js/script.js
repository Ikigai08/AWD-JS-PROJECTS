// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Loop through each card and add a click event listener
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Replace this alert with your desired functionality
            alert("You clicked a card!");
        });
    });
});
