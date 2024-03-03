
document.addEventListener("DOMContentLoaded", function () {
 
    const cards = document.querySelectorAll('.card');

    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            
            alert("Dont judge!");
        });
    });
});
