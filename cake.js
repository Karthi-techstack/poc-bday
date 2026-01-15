let cakeAlreadyCut = false;

function cutCake() {
    if (cakeAlreadyCut) return;
    cakeAlreadyCut = true;
    
    const cake = document.getElementById('cake');
    const instruction = document.getElementById('instruction');
    
    // Change instruction
    instruction.textContent = '🎉 Happy Birthday! 🎉';
    instruction.style.fontSize = '2rem';
    
    // Hide the cake slowly
    cake.style.opacity = '0';
    cake.style.transition = 'opacity 0.5s';
    
    // Create cake explosion
    setTimeout(() => {
        createCakeExplosion();
        createConfetti();
    }, 500);
    
    // Redirect to tree page after 10 seconds from cake cut
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
