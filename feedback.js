// Response messages
const responses = {
    yes: {
        emoji: '🎉',
        title: 'That\'s Wonderful! 💕',
        message: 'Thank you so much for the love and support! We\'re thrilled you enjoyed the gift. Wishing you the most amazing birthday ever, filled with joy, laughter, and beautiful moments. Enjoy every second of your special day! 🎂✨'
    },
    no: {
        emoji: '😢',
        title: 'We Appreciate Your Feedback! 💙',
        message: 'Thank you for being honest with us. Your feedback helps us do better next time. Despite this, we still wish you the happiest birthday ever! May your day be filled with love, happiness, and wonderful surprises. Enjoy your special day! 🎈💕'
    }
};

// Handle Yes button
document.getElementById('yesButton').addEventListener('click', () => {
    showResponse('yes');
});

// Handle No button
document.getElementById('noButton').addEventListener('click', () => {
    showResponse('no');
});

// Show response
function showResponse(type) {
    const response = responses[type];
    
    // Hide question page
    document.getElementById('questionPage').style.display = 'none';
    
    // Show response page
    document.getElementById('responsePage').style.display = 'block';
    
    // Set response content
    document.getElementById('responseEmoji').textContent = response.emoji;
    document.getElementById('responseTitle').textContent = response.title;
    document.getElementById('responseMessage').textContent = response.message;
    
    // Handle continue button
    document.getElementById('continueButton').addEventListener('click', () => {
        // Redirect to home page or end page
        window.location.href = 'index.html';
    });
}
