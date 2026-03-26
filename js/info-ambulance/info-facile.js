let maxLives = 6;          
let currentLives = maxLives;

function initHearts() {
    const container = document.getElementById("hearts-container");
    container.innerHTML = ""; // reset

    for (let i = 0; i < maxLives; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        if (i >= currentLives) {
            heart.classList.add("lost");
        }

        container.appendChild(heart);
    }
}

function takeDamage() {
    if (currentLives > 0) {
        currentLives--;
        initHearts();
    }

    if (currentLives <= 0) {
        const img = document.getElementById("gameOverImage");

        img.style.display = "block";
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";

        setTimeout(() => {
            img.style.display = "none";

            window.location.href = "../index.html"; 
        }, 5000);
    }
}



const ambulance = document.getElementById('ambulance');

if (ambulance) {

    initHearts();

    const ambRect = ambulance.getBoundingClientRect();
    let ambWidth = ambRect.width || 80;
    let ambHeight = ambRect.height || 120;

    let posX = (window.innerWidth / 2) - (ambWidth / 2);
    let posY = window.innerHeight - ambHeight - 20;

    const speed = 7;
    const bgSpeed = 5;
    const marginFromImage = 420;

    let bgPosY = 0;

    const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

    window.addEventListener('keydown', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
            e.preventDefault();
        }

        // TEST : Appuie sur "D" pour tester la perte de vie manuellement
        if (e.key === "d") takeDamage();
    });

    window.addEventListener('keyup', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
        }
    });

    function gameLoop() {

        // Déplacements
        if (keys.ArrowUp) posY -= speed;
        if (keys.ArrowDown) posY += speed;
        if (keys.ArrowLeft) posX -= speed;
        if (keys.ArrowRight) posX += speed;

        // Limites de la route
        let limitLeft = marginFromImage;
        let limitRight = window.innerWidth - marginFromImage - ambWidth;

        if (posX < limitLeft) posX = limitLeft;
        if (posX > limitRight) posX = limitRight;
        if (posY < 0) posY = 0;
        if (posY > window.innerHeight - ambHeight) posY = window.innerHeight - ambHeight;

        // Appliquer la position
        ambulance.style.left = posX + 'px';
        ambulance.style.top = posY + 'px';

        // Défilement du fond
        bgPosY += bgSpeed;
        document.body.style.backgroundPosition = `center ${bgPosY}px`;

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}