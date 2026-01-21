let cakeAlreadyCut = false;

function cutCake() {
    if (cakeAlreadyCut) return;
    cakeAlreadyCut = true;
    
    const cake = document.getElementById('cake');
    const instruction = document.getElementById('instruction');
    const foodAnimation = document.getElementById('foodAnimation');
    
    // Show eating animation
    foodAnimation.classList.add('active');
    
    // Change instruction - show birthday message
    instruction.textContent = '';
    instruction.style.fontSize = '2rem';
    instruction.style.color = '#fff';
    
    // Hide the cake slowly
    cake.style.opacity = '0';
    cake.style.transition = 'opacity 0.5s';
    
    // Create cake explosion
    setTimeout(() => {
        createCakeExplosion();
        createConfetti();
        createBalloons();
    }, 500);
    
    // Redirect to tree page after 10 seconds from cake cut (no countdown shown)
    setTimeout(() => {
        window.location.href = 'tree.html';
    }, 10000);
}

function createCakeExplosion() {
    const container = document.getElementById('confettiContainer');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const numberOfPieces = 1000;
    
    for (let i = 0; i < numberOfPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'cake-piece';
        
        // Random direction for each piece
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const distance = Math.random() * 400 + 250;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rotate = Math.random() * 720 - 360;
        
        piece.style.left = centerX + 'px';
        piece.style.top = centerY + 'px';
        piece.style.setProperty('--tx', `${tx}px`);
        piece.style.setProperty('--ty', `${ty}px`);
        piece.style.setProperty('--rotate', `${rotate}deg`);
        
        // Random colors for pieces
        const colors = ['#553c13', '#3d2a0d', '#6b4c1f', '#8b5a2b', '#a0522d'];
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(piece);
        
        // Remove piece after animation
        setTimeout(() => {
            piece.remove();
        }, 7000);
    }
}

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const numberOfConfetti = 150;
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#ffd700', '#ff69b4', '#87ceeb'];
    
    for (let i = 0; i < numberOfConfetti; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '-10px';
            confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 15);
    }
}

function createBalloons() {
    const container = document.getElementById('balloonsContainer');
    const balloonColors = ['balloon-red', 'balloon-blue', 'balloon-yellow', 'balloon-green', 'balloon-pink', 'balloon-purple'];
    const numberOfBalloons = 20;
    
    for (let i = 0; i < numberOfBalloons; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = `balloon ${balloonColors[Math.floor(Math.random() * balloonColors.length)]}`;
            
            // Random horizontal position
            const startX = Math.random() * 100;
            balloon.style.left = `${startX}%`;
            
            // Random drift
            const drift = (Math.random() - 0.5) * 200;
            balloon.style.setProperty('--drift', `${drift}px`);
            
            // Random duration
            const duration = 5 + Math.random() * 3;
            balloon.style.animationDuration = `${duration}s`;
            
            // Random delay
            const delay = Math.random() * 1;
            balloon.style.animationDelay = `${delay}s`;
            
            container.appendChild(balloon);
            
            // Remove balloon after animation
            setTimeout(() => {
                balloon.remove();
            }, (duration + delay) * 1000);
        }, i * 150);
    }
}
