// Response messages
const responses = {
    yes: {
        emoji: '🎉',
        title: 'That\'s Wonderful! 💕',
        message: 'Kumthaaaa Happy Annachiiii. Enjoy every second of your special day! 🎂✨. Meet panna wish panna nalla irukum ❤️'
    },
    no: {
        emoji: '😢',
        title: 'Seriiii no problem baby fix paniruom 💙',
        message: 'Ill try my bestnext time baby. Enjoy your special day! 🎈💕. Meet panna killu vanguna panna nalla irukum 🥺'
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
