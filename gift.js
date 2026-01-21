// Gift message content
const giftMessageText = `My Dearest Aishwarya,

Today, I celebrate not just your birthday, but the beautiful soul that has transformed my entire world. You are my greatest blessing, my deepest love, and my forever dream come true.

Every moment with you feels like a precious gift wrapped in stardust and love. Your smile lights up my darkest days, your laughter is the sweetest melody to my heart, and your presence makes everything feel magical and complete.

You've bloomed into my forever love, each tick of the clock weaving your radiant soul deeper into mine. Like stardust scattered across time, your beauty multiplies with every heartbeat, making eternity feel too short.

Thank you for being the most incredible woman I know. Thank you for your unconditional love, your unwavering support, and for choosing to share this beautiful journey with me. You are my soulmate, my inspiration, and my greatest treasure.

On this special day, I want you to know that you are cherished beyond measure, loved beyond words, and appreciated more than you could ever imagine. May this year bring you endless joy, boundless success, and dreams that come true.

Happy Birthday to my forever love, my soulmate, and my greatest blessing! 💕✨

With all my heart and soul,
Your Forever Love 💑`;

// Create floating love emojis and gift boxes
function createFloatingEmojis() {
    const emojis = ['💕', '❤️', '💖', '💗', '💝', '🎁', '💐', '✨'];
    const container = document.body;
    
    for (let i = 0; i < 12; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        const startX = Math.random() * window.innerWidth;
        emoji.style.left = startX + 'px';
        emoji.style.bottom = '-50px';
        
        const duration = 6 + Math.random() * 4;
        emoji.style.animationDuration = duration + 's';
        
        const delay = Math.random() * 2;
        emoji.style.animationDelay = delay + 's';
        
        container.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), (duration + delay) * 1000);
    }
}

// Display gift message on page load
document.addEventListener('DOMContentLoaded', function() {
    const giftTextDiv = document.getElementById('giftText');
    giftTextDiv.textContent = giftMessageText;
    
    // Create floating emojis
    createFloatingEmojis();
    
    // Keep creating floating emojis
    setInterval(createFloatingEmojis, 8000);
});

// Go to feedback page
function goToFeedback() {
    window.location.href = 'feedback.html';
}
