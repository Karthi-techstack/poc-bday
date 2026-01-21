// Navigate to wishes page
function goToWishes() {
    window.location.href = 'wishes.html';
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Create falling petals
function createFallingPetal() {
    const container = document.getElementById('petalsContainer');
    if (!container) return;
    
    const petal = document.createElement('div');
    petal.className = 'falling-petal';
    petal.textContent = '🌸';
    
    // Random horizontal position
    const startX = Math.random() * window.innerWidth;
    petal.style.left = startX + 'px';
    petal.style.top = '-50px';
    
    // Random duration (6-12 seconds)
    const duration = 6 + Math.random() * 6;
    petal.style.animationDuration = duration + 's';
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 200;
    petal.style.setProperty('--drift', drift + 'px');
    
    container.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Continuously create falling petals
function startFallingPetals() {
    setInterval(createFallingPetal, 300);
}

// Wishes carousel rotation
function rotateWishes() {
    // Removed - wishes carousel deleted
}

// Add staggered animation to wish cards
document.addEventListener('DOMContentLoaded', function() {
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Start wishes carousel
    rotateWishes();
    
    // Start falling petals
    startFallingPetals();
});

