// Array of 5 wishes with messages and senders
const wishes = [

    {
        message: `Happpyy happpyy birthday aishhh 
         My human diary, my bestestestttttt frnd 🌎 To my forever partner in crime 😶‍🌫️you're the one makes our friendship feels like  🏡 Years may grow, but our bond only deepens—unchanged, unshaken, and forever cherished🫶🏻  `,
        sender: " - With loveeeee Ruba 😚"
    },
        {
        message: `Love you sooooo much and I miss you ❤️ Stay healthy, stay hopeful, and keep chasing your dreams. You deserve a life full of wellness and joy💌 `,
        sender: " - With same loveeeee Ruba 😚"
    },
    {
        message: "Happy Birthday ishu live long and stay blessed stay happy with your loved one ♥️ you always stood with my when I am in low  thank you for being with me you are so lucky to have a karthi anna don't miss that person in your life don't worry about anything everything will be fine in one day ",
        sender: " - Pavi 🌹"
    },
    {
        message: "Happy Birthday ishu live long and stay blessed stay happy with your loved one ♥️ you always stood with me when I am in low.  thank you for being with me  don't worry about anything, everything will be fine in one day. you are my lucky charm love you ishu  ethavuthu nalu varutha Nala tha sollu ishu 😂 ",
        sender: " - Once More Pavi 🌹"
    },
    {
        message: "Happy birthday Aishu! ❤️ I wish that all your struggles and pains turn into success and make your dreams come true. With the support of your family, I wish that you will be getting married soon.",
        sender: " - Ragahvi ❤️"
    },
    {
        message: "Hope you are doing well... ✨ Happy Birthday my dear friend ( Aish )...✨ 😇Epaium happy iru.... Stay blessed with Lots of love and happiness and healthy iru🥰 🥳 HAPPY BIRTHDAY 🎈 AISHWARYA I miss you Aish ...🙃 So kandipa unku chance kadicha enta pesu....",
        sender: " - Karthika 👯"
    },
    {
        message: "Happy Happy Birthdayyyy to youuu girl!!💚 Missing the old days when 3 of us had so much fun🥹🫂.. May your life be as happy and beautiful as our memories 🪄💚",
        sender: " - With love, Hemaaaa 🤩"
    },
    {
        message: "Happy birthday Aisu 🎂....unkita pesi 2 yrs achu hope ur doing good 👍 💖 wish u all the best for your future happy ah iru nala sapdu miss you soo much 🙂",
        sender: " - Sanju 🎉"
    },
    {
        message: "Happy Birthday to u aishuuu🍨 My sweet Friend May your birthday be as beautiful as you are be happy with your loved one 🫂❤️ ",
        sender: " - Viswa (F&IS)"
    },
    {
        message: "Happy birthday Aishu!🧿 May this year be a sophisticated blend of success and the same effortless joy we shared back then. Wishing you a year of unparalleled growth and brilliance as you navigate your mid-twenties with the grace you’ve always possessed ",
        sender: " - With love Priya - your 11th and 12th grade bench mate ♥️"
    },
    {
        message: "Happy birthday to my favorite partner in crime 😈. I'm so lucky to have you 🫶🏻🥰. May your birthday be filled with love, laughter, and unforgettable memories ☺️☺️☺️. Once again Happy Birthday to you Aishu......🫂🫂and have a great and successful year ahead ✨🥳",
        sender: " - KP 😜"
    },
    {
        message: " Hi Pattu.....🩵 Happy Happy Birthday chlm🥂 I hope your fine and everything  goes great ✨ Missing you a lot.. ❤️‍🩹 If you remember or miss me msg panu waiting for your text... Where ever you are your my lucky charm 🧿 as always... ✨💯 Once again Happy Birthday Pattuuu✨🩵 lovee u so soo  muchhhh and Miss uuuuu🫂 ",
        sender: " - Janani 🤗"
    }
];

let currentWishIndex = 0;

// Display current wish
function displayWish() {
    const wish = wishes[currentWishIndex];
    document.getElementById('wishMessage').textContent = wish.message;
    document.getElementById('wishSender').textContent = wish.sender;
    document.getElementById('wishNumber').textContent = `${currentWishIndex + 1} / ${wishes.length}`;
    
    // Animate card
    const card = document.getElementById('wishCard');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'cardSlideIn 0.6s ease-out';
    }, 10);
}

// Next button handler
document.getElementById('nextButton').addEventListener('click', () => {
    currentWishIndex++;
    
    if (currentWishIndex >= wishes.length) {
        // All wishes shown, redirect to love wishes page
        window.location.href = 'wishes_love.html';
        return;
    }
    
    displayWish();
});

// Display first wish on load
displayWish();
