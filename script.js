
const mainBtn = document.getElementById("mainBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const surprise = document.getElementById("surprise");
const message = document.getElementById("message");
const loveSection = document.getElementById("loveSection");

let step = 0;

mainBtn.addEventListener("click", () => {
    step++;

    if (step === 1) {
        // First click: The prank 😂
       
        subtitle.textContent = "You really trusted me?!";

        surprise.classList.remove("hidden");
       

    } else if (step === 2) {
        // Second click: The real surprise ❤️
        surprise.classList.add("hidden");
        mainBtn.classList.add("hidden");
        loveSection.classList.remove("hidden");

        createHearts();
    }
});

function createHearts() {
    const heartsContainer = document.getElementById("hearts");
    const emojis = ["❤️", "💖", "💕", "💗", "💘"];

    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("span");

        heart.classList.add("heart");
        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 4) + "s";
        heart.style.animationDelay = Math.random() * 3 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}
