// Array of romantic love wishes
const loveWishes = [
    {
        message: `My dearest Aishwarya, watching you grow into the amazing person you are today fills my heart with pride and joy.
Every moment with you has been a blessing, and I'm so grateful for the love and laughter you bring into our lives.
Your kindness, strength, and beautiful spirit inspire us every single day.
Happy Birthday to my precious daughter! May this year bring you endless happiness, success, and all the love you deserve.
You are truly special, and I wish you a day as beautiful and wonderful as you are.
Stay blessed, stay happy, and know that you are loved beyond measure. 💕✨🌹`,
        sender: "From Mom & Dad 🤍💙"
    },
    {
        message: `Dear Aishwarya, as your sister, I've watched you grow into an incredible woman.
You've always been there for me through thick and thin, supporting me with your love and wisdom.
Your strength, compassion, and beautiful heart inspire me every single day.
Thank you for being not just my sister, but my best friend and my rock.
On your special day, I wish you all the happiness in the world.
May this year bring you endless joy, success, and all the dreams you deserve. 💕🎉`,
        sender: "From Your Sister 👯‍♀️"
    },
    {
        message: `To the most beautiful soul I know, your presence in my life is a gift I cherish every single day.
The way you light up every room with your smile, the way you care so deeply for those around you, 
the way you love unconditionally - it all makes you truly extraordinary.
On your birthday, I want you to know how much you mean to me and how grateful I am for you.
May your day be filled with all the love, joy, and magic you deserve.
Happy Birthday to my forever inspiration and my greatest blessing. 💕✨`,
        sender: "From Your Best Friend 💖"
    },
    {
        message: `Aishwarya, you are the light of our family, the warmth in our hearts, and the joy in our souls.
Watching you grow has been one of life's greatest pleasures, and I'm so proud of the woman you've become.
Your love, your laughter, your kindness - these are the things that make life beautiful.
On this special day, I wish for you all the happiness, success, and love that the world has to offer.
May every moment of your birthday be as special as you are to all of us.
Forever grateful for you, my dear. 💕🌹`,
        sender: "From Grandma 👵💕"
    },
    {
        message: `You are not just a friend, you are family. You are the one who stands by me, believes in me, and loves me unconditionally.
Your friendship is a treasure, your love is pure, and your presence in my life is a blessing I never take for granted.
Thank you for being the most amazing person, for all the memories we've created, and for the beautiful moments yet to come.
On your birthday, I celebrate you and everything you are.
Wishing you a day filled with love, laughter, and all the happiness your heart can hold.
Happy Birthday to my forever friend and soulmate. 💕✨🎉`,
        sender: "From Your Soulmate 💑"
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
            // All love wishes shown, redirect to feedback page
            window.location.href = 'feedback.html';
            return;
        }
        
        displayLoveWish();
    });
}

// Display first love wish on load
displayLoveWish();
