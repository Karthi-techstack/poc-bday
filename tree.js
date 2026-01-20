// Birthday: January 23, 2002
const birthDate = new Date('2002-01-23T00:00:00');

// Update counter
function updateCounter() {
    const now = new Date();
    const diffInMs = now - birthDate;
    const seconds = Math.floor(diffInMs / 1000);
    
    document.getElementById('secondsCounter').textContent = seconds.toLocaleString();
}

// Create fireworks
function createFireworks() {
    const container = document.getElementById('fireworksContainer');
    const colors = ['particle-red', 'particle-yellow', 'particle-blue', 'particle-green', 'particle-pink', 'particle-purple'];
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6) + 100;
    
    // Create 30 particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = `firework-particle ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        // Random direction
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 5 + Math.random() * 8;
        const tx = Math.cos(angle) * velocity * 50;
        const ty = Math.sin(angle) * velocity * 50;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1500);
    }
}

// Create flying sky lanterns
function createSkyLanterns() {
    const container = document.getElementById('skyLanterns');
    const numberOfLanterns = 3;
    
    for (let i = 0; i < numberOfLanterns; i++) {
        setTimeout(() => {
            const lantern = document.createElement('div');
            lantern.className = 'lantern';
            
            // Random horizontal position with more spacing
            const startX = Math.random() * 100;
            lantern.style.left = `${startX}%`;
            
            // Larger drift (side to side movement)
            const drift = (Math.random() - 0.5) * 500;
            lantern.style.setProperty('--drift', `${drift}px`);
            
            // Random animation duration (10-14 seconds)
            const duration = 10 + Math.random() * 4;
            lantern.style.setProperty('--duration', `${duration}s`);
            
            // Random delay
            const delay = Math.random() * 2;
            lantern.style.animationDelay = `${delay}s`;
            
            // Create inner glow
            const glow = document.createElement('div');
            glow.className = 'lantern-glow';
            glow.style.setProperty('--duration', `${duration}s`);
            glow.style.animationDelay = `${delay}s`;
            glow.style.setProperty('--drift', `${drift}px`);
            
            lantern.appendChild(glow);
            container.appendChild(lantern);
            
            // Remove lantern after animation
            setTimeout(() => {
                lantern.remove();
            }, (duration + delay) * 1000 + 500);
        }, i * 1000); // Increased stagger from 600ms to 1000ms
    }
}

// Initialize
updateCounter();
setInterval(updateCounter, 2000); // Update every second

// Start creating lanterns after a short delay
setTimeout(createSkyLanterns, 500);

// Create fireworks every 2 seconds
setInterval(createFireworks, 1000);

// Keep creating new lanterns every 18 seconds
setInterval(createSkyLanterns, 18000);

// Redirect to gallery page after 20 seconds
setTimeout(() => {
    console.log('Redirecting to gallery.html');
    window.location.replace('gallery.html');
}, 20000);
