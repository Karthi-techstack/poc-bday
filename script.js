// Navigate to wishes page
function goToWishes() {
    window.location.href = 'wishes.html';
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Wishes carousel rotation
function rotateWishes() {
    const carousel = document.getElementById('wishesCarousel');
    if (!carousel) return;
    
    const wishes = carousel.querySelectorAll('.wish-item');
    let currentIndex = 0;
    
    setInterval(() => {
        wishes.forEach(wish => wish.classList.remove('active'));
        wishes[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % wishes.length;
    }, 4000);
}

// Add staggered animation to wish cards
document.addEventListener('DOMContentLoaded', function() {
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Start wishes carousel
    rotateWishes();
});

