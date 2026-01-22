// Array of romantic love wishes
const loveWishes = [
    {
        message: `Happy Birthday Wifey! 🎉🥳 You being on earth since 24 years (757366848 seconds) 🌍💕 En baby ku 24 vayasu aagirichi but still epdi thaa alaga baby mathiri irukalo pa, porumaiya iruku pa enaku 😍👶. Think pani patha nanum one decade ku mela unkuda iruthu irukan 🥰⏳.`,
        sender: " - Ammu ❤️"
    },
    {
        message: `Happy birthday to the woman who already owns my heart ❤️ — I can’t wait to call you my wife and spend every birthday after this by your side 💍✨. Your smile lights up my life 😊☀️, may your birthday be as beautiful and full of love as you make every day for me 🌹💖. Every year with you is a gift 🎁, and I promise to cherish you today and always 🤗💕. I’m excited to build our future together 🚀❤️.`,
        sender: " - Ammu ❤️"
    },
    {
        message: `Every year you grow stronger, more beautiful, and divinely radiant, a timeless vision that steals my soul anew 🌟😘. 
        I thought of celebrating by holding hands ✋❤️, cheers 🥂, huggies 🤗, kiss 💋, funny 😂, irritating moments 😜, etc.! 
        No worries, we will celebrate together soon with lot of fun and love 🎈🎊.
        We struggled a lot to reach this destination 💪❤️. Ne nerya struggle aagi iruka, problem face pani iruka, enaku kaga nerya nerya pani iruka 🙏. 
        Thanks a lot 🥺💝. 
        Always ATG 51% thaa and naa 49% thaa 😇. Nerya solanum thaa, nerla soluran apo thaa good natural feelings kedaikum 🌈. 
        Yaru una pathi sonalum think pannatha, you doing good and great thaa always 🌟👏.
        `,
        sender: " - Ammu ❤️"
    },
    {
        message: `Soon, we will start our life happily 🏡💑.`,
        sender: " - Ammu ❤️"
    }
];

let currentLoveIndex = 0;

// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsBackground');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '💕';
            
            const startX = Math.random() * window.innerWidth;
            heart.style.left = startX + 'px';
            heart.style.top = window.innerHeight + 'px';
            
            const duration = 8 + Math.random() * 4;
            heart.style.animationDuration = duration + 's';
            
            const delay = Math.random() * 2;
            heart.style.animationDelay = delay + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), (duration + delay) * 1000);
        }, i * 300);
    }
}

// Display current love wish
function displayLoveWish() {
    const wish = loveWishes[currentLoveIndex];
    document.getElementById('loveMessage').textContent = wish.message;
    document.getElementById('loveSender').textContent = wish.sender;
    document.getElementById('loveCounter').textContent = `${currentLoveIndex + 1} / ${loveWishes.length}`;
    
    // Update button states
    document.getElementById('prevButton').disabled = currentLoveIndex === 0;
    
    // Animate card
    const card = document.getElementById('loveCard');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'cardSlideIn 0.8s ease-out';
    }, 10);
    
    // Create floating hearts
    createFloatingHearts();
}

// Previous button handler
const prevButton = document.getElementById('prevButton');
if (prevButton) {
    prevButton.addEventListener('click', () => {
        if (currentLoveIndex > 0) {
            currentLoveIndex--;
            displayLoveWish();
        }
    });
}

// Next button handler
const nextButton = document.getElementById('nextButton');
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentLoveIndex++;
        
        if (currentLoveIndex >= loveWishes.length) {
            // All love wishes shown, redirect to gift page
            window.location.href = 'gift.html';
            return;
        }
        
        displayLoveWish();
    });
}

// Display first love wish on load
displayLoveWish();
