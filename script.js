// script.js - Logic for the invitation

// Transition: Swipe/Click Welcome to Invite
document.body.addEventListener('click', () => {
    const welcome = document.getElementById('welcome');
    const invite = document.getElementById('invite');
    
    if (!welcome.classList.contains('hidden')) {
        welcome.classList.add('hidden');
        invite.classList.remove('hidden');
    }
});

// "No" button teleportation logic
const noBtn = document.getElementById('no-btn');
let clickCount = 0;

noBtn.addEventListener('mouseover', () => {
    if (clickCount < 27) {
        // Move button to random position
        const x = Math.random() * 80;
        const y = Math.random() * 80;
        noBtn.style.left = x + 'vw';
        noBtn.style.top = y + 'vh';
        clickCount++;
    } else {
        noBtn.innerText = "Please say Yes!";
    }
});

// "Yes" button
document.getElementById('yes-btn').addEventListener('click', () => {
    alert("I am so excited for ECE Nights with you!");
    // We will hook this to EmailJS next!
});
