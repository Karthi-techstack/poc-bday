// Gift message content
const giftMessageText = `Ithu virtual gift thaa 🎁💐, last year yarum wish pannala sonnna. Intha time ellarum wish pannangala un list irukura peoples 📱👯‍♀️. Miss panna sorry 🙏, ivolu thaa kedachi. Oota ku thanks soliru ne 😋🍽️.

Unaku gift iruku, naa ooru mathiri plan iruthan 🛫, naa panna thituva athu pannatha ithu pannatha nu 😂. So, ne inperson ya irukum pothu naa unaku antha gift tharan 🤩💝.

`;

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
