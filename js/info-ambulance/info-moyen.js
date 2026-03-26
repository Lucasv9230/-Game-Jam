// --- CONFIGURATION DES VIES ---
let maxLives = 5;          
let currentLives = maxLives;

// --- CRÉATION DES CŒURS AU DÉBUT ---
function initHearts() {
    const container = document.getElementById("hearts-container");
    container.innerHTML = ""; // reset

    for (let i = 0; i < maxLives; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Si la vie est perdue → cœur grisé
        if (i >= currentLives) {
            heart.classList.add("lost");
        }

        container.appendChild(heart);
    }
}

// --- PERTE DE VIE ---
function takeDamage() {
    if (currentLives > 0) {
        currentLives--;
        initHearts();
    }

    if (currentLives <= 0) {
        alert("Game Over !");
        location.reload();
    }
}



// --- LOGIQUE DU JEU (AMBULANCE) ---
const ambulance = document.getElementById('ambulance');

if (ambulance) {

    // Initialisation des cœurs au chargement du niveau
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