// Navigate to wishes page
function goToWishes() {
    window.location.href = 'wishes.html';
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Add staggered animation to wish cards
document.addEventListener('DOMContentLoaded', function() {
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
