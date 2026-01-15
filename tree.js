// Birthday: January 23, 2002
const birthDate = new Date('2002-01-23T00:00:00');

// Heart colors
const heartColors = ['❤️', '💖', '💗', '💓', '💕', '💝', '💞', '💘'];

// Update counter
function updateCounter() {
    const now = new Date();
    const diffInMs = now - birthDate;
    const seconds = Math.floor(diffInMs / 1000);
    
    document.getElementById('secondsCounter').textContent = seconds.toLocaleString();
}

// Create heart leaves in proper tree shape
function createHeartLeaves() {
    const leavesContainer = document.getElementById('treeLeaves');
    const numberOfLeaves = 80; // More leaves for fuller tree
    
    // Tree shape parameters
    const centerX = 50; // Center percentage
    const treeTop = 15; // Top of tree
    const treeBottom = 45; // Bottom of tree canopy
    
    for (let i = 0; i < numberOfLeaves; i++) {
        setTimeout(() => {
            const leaf = document.createElement('span');
            leaf.className = 'heart-leaf';
            leaf.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
            
            // Create triangular/cone tree shape
            const heightPercent = Math.random(); // 0 to 1, where 0 is top
            const y = treeTop + (heightPercent * (treeBottom - treeTop));
            
            // Width increases as we go down (cone shape)
            const maxWidth = heightPercent * 35; // Wider at bottom
            const x = centerX + (Math.random() - 0.5) * maxWidth * 2;
            
            leaf.style.left = `${x}%`;
            leaf.style.top = `${y}%`;
            
            leavesContainer.appendChild(leaf);
        }, i * 80); // Stagger the appearance
    }
}

// Initialize
updateCounter();
setInterval(updateCounter, 1000); // Update every second

// Start creating leaves after a short delay
setTimeout(createHeartLeaves, 500);

// Redirect to wishes page after 20 seconds
setTimeout(() => {
    window.location.href = 'wishes.html';
}, 20000);
