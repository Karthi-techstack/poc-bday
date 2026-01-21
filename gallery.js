// Array of 30 local image file paths
const photoUrls = [
    'image/photo1.jpg', 'image/photo-1.jpg', 'image/photo-2.jpg', 'image/photo-3.jpg', 'image/photo2.jpg', 'image/photo3.jpg', 'image/photo4.jpg', 'image/photo5.jpg',
    'image/photo6.jpg', 'image/photo7.jpg', 'image/photo8.jpg', 'image/photo9.jpg', 'image/photo10.jpg',
    'image/photo11.jpg', 'image/photo12.jpg', 'image/photo13.jpg', 'image/photo14.jpg', 'image/photo15.jpg',
    'image/photo16.jpg', 'image/photo17.jpg', 'image/photo18.jpg', 'image/photo19.jpg', 'image/photo20.jpg',
    'image/photo21.jpg', 'image/photo22.jpg', 'image/photo23.jpg', 'image/photo24.jpg', 'image/photo25.jpg',
    'image/photo26.jpg', 'image/photo27.jpg', 'image/photo28.jpg', 'image/photo29.jpg', 'image/photo-29.jpg', 'image/photo30.jpg'
];

// Pastel background colors - change every 6 images
const pastelColors = [
    'linear-gradient(135deg, #FFB3BA 0%, #FFCCCB 100%)',      // Pastel Pink (photos 1-6)
    'linear-gradient(135deg, #BAE1FF 0%, #ADD8E6 100%)',      // Pastel Blue (photos 7-12)
    'linear-gradient(135deg, #BAFFC9 0%, #98FF98 100%)',      // Pastel Green (photos 13-18)
    'linear-gradient(135deg, #E0BBE4 0%, #D5AAFF 100%)',      // Pastel Purple (photos 19-24)
    'linear-gradient(135deg, #FFDAB9 0%, #FFB6C1 100%)',      // Pastel Peach (photos 25-30)
    'linear-gradient(135deg, #B4E7FF 0%, #C1F0F6 100%)'       // Pastel Cyan (photos 31-36)
];

// Title colors matching backgrounds
const titleColors = [
    '#D81B60',      // Deep Pink
    '#0277BD',      // Deep Blue
    '#00796B',      // Deep Green
    '#6A1B9A',      // Deep Purple
    '#D84315',      // Deep Peach
    '#00838F'       // Deep Cyan
];

// Memory icons to fly
const memoryIcons = ['📸', '📷', '🎥', '💭', '✨', '🌟', '🎁', '🎉', '🪩', '🎊'];

let currentPhotoIndex = 0;

// Create flying memories
function createFlyingMemories() {
    const container = document.getElementById('flyingMemories');
    const numberOfMemories = 10;
    
    for (let i = 0; i < numberOfMemories; i++) {
        const memory = document.createElement('div');
        memory.className = 'memory-icon';
        memory.textContent = memoryIcons[Math.floor(Math.random() * memoryIcons.length)];
        
        // Random horizontal position
        const startX = Math.random() * 100;
        memory.style.left = `${startX}%`;
        memory.style.bottom = '-50px';
        
        // Random drift
        const drift = (Math.random() - 0.5) * 300;
        memory.style.setProperty('--drift', `${drift}px`);
        
        // Random delay
        const delay = Math.random() * 3;
        memory.style.animationDelay = `${delay}s`;
        
        container.appendChild(memory);
        
        // Remove after animation
        setTimeout(() => {
            memory.remove();
        }, 8000 + delay * 1000);
    }
}

// Display photos one by one
function displayNextPhoto() {
    if (currentPhotoIndex >= photoUrls.length) {
        // All photos shown, redirect to wishes
        window.location.href = 'wishes.html';
        return;
    }
    
    const photoElement = document.getElementById('currentPhoto');
    const container = document.querySelector('.gallery-container');
    const titleElement = document.getElementById('galleryTitle');
    
    // Set the photo
    photoElement.src = photoUrls[currentPhotoIndex];
    
    // Change background color every 6 images
    const colorIndex = Math.floor(currentPhotoIndex / 6);
    container.style.background = pastelColors[colorIndex % pastelColors.length];
    
    // Change title color to match background
    titleElement.style.color = titleColors[colorIndex % titleColors.length];
    titleElement.style.textShadow = `0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px ${titleColors[colorIndex % titleColors.length]}40`;
    
    // Create flying memories
    createFlyingMemories();
    
    // Reset animation
    photoElement.style.animation = 'none';
    setTimeout(() => {
        photoElement.style.animation = 'fadeInOut 2.5s ease-in-out forwards';
    }, 10);
    
    currentPhotoIndex++;
    
    // Schedule next photo (2.5 seconds for animation)
    setTimeout(displayNextPhoto, 2500);
}

// Start the slideshow
displayNextPhoto();
