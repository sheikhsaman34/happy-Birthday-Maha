// ==========================
// Happy Birthday Maha ❤️
// script.js
// ==========================

// Loading Screen
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 800);

    }, 1800);
});

// Elements
const giftBtn = document.getElementById("openGift");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const music = document.getElementById("music");

// Open Surprise
giftBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");
    gallery.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    // Play Music
    music.play().catch(() => {});

    // Start Confetti
    startConfetti();

    // Floating Hearts
    createHearts();

    // Auto-scroll to gallery after a few seconds
    setTimeout(() => {
        gallery.scrollIntoView({
            behavior: "smooth"
        });
    }, 6000);

});

// ==========================
// Floating Hearts
// ==========================

function createHearts() {

    const emojis = ["❤️", "🤍", "💖", "💕", "💗", "🌸"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        const duration = 5000 + Math.random() * 3000;

        heart.animate([
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-110vh)",
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "linear"
        });

        setTimeout(() => {
            heart.remove();
        }, duration);

    }, 300);

}

// ==========================
// Simple Confetti
// ==========================

function startConfetti() {

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        "#ff4f88",
        "#ff8fab",
        "#ffd166",
        "#ffffff",
        "#ffb3c6",
        "#d63384"
    ];

    const confetti = [];

    for (let i = 0; i < 180; i++) {

        confetti.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 6 + 3,

            color:
                colors[Math.floor(Math.random() * colors.length)],

            speed: Math.random() * 3 + 2,

            tilt: Math.random() * 10

        });

    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(c => {

            ctx.beginPath();

            ctx.fillStyle = c.color;

            ctx.fillRect(c.x, c.y, c.r, c.r * 2);

            c.y += c.speed;

            c.x += Math.sin(c.y * 0.02);

            if (c.y > canvas.height) {

                c.y = -20;

                c.x = Math.random() * canvas.width;

            }

        });

        requestAnimationFrame(draw);

    }

    draw();

}

window.addEventListener("resize", () => {

    const canvas = document.getElementById("confetti");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

// ==========================
// Auto Image Slider
// ==========================

const slider = document.querySelector(".slider");

let scrollAmount = 0;

setInterval(() => {

    if (!slider) return;

    scrollAmount += 300;

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });

}, 2500);

// ==========================
// Birthday Console Message ❤️
// ==========================

console.log(`
🌷 Happy Birthday Maha 🌷

Made with love by Shaboo ❤️
May Allah bless you always.

`);
