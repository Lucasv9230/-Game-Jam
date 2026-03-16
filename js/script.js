// --- VARIABLES DE L'INTERFACE ---
const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const startModal = document.getElementById("start-modal");
const closeButtons = document.querySelectorAll(".close");
const difficultyButtons = document.querySelectorAll(".btn-difficulty");
let selectedDifficulty = null;

// --- LOGIQUE DES VIES ---
let lives = 5;
let isInvincible = false; // Pour éviter de perdre toutes les vies d'un coup

function initHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    if (!heartsContainer) return;
    
    heartsContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.id = `heart-${i}`;
        heartsContainer.appendChild(heart);
    }
}

function takeDamage() {
    if (isInvincible || lives <= 0) return;

    lives--;
    isInvincible = true;
    
    const heartToLose = document.getElementById(`heart-${lives}`);
    if (heartToLose) {
        heartToLose.classList.add('lost');
    }

    if (lives <= 0) {
        alert("GAME OVER : Le patient n'a plus qu'un seul testicule... l'opération a échoué.");
        window.location.href = "../index.html"; // Retour au menu
    }

    // Petit flash sur l'ambulance pour montrer le dégât
    const amb = document.getElementById('ambulance');
    if(amb) amb.style.opacity = "0.5";

    // On redevient vulnérable après 1 seconde
    setTimeout(() => {
        isInvincible = false;
        if(amb) amb.style.opacity = "1";
    }, 1000);
}

// --- LOGIQUE DES MODALES ---
if (startBtn) {
    startBtn.addEventListener("click", () => { startModal.style.display = "block"; });
    rulesBtn.addEventListener("click", () => { rulesModal.style.display = "block"; });
    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => { e.target.closest(".modal").style.display = "none"; });
    });

    difficultyButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            selectedDifficulty = e.target.dataset.difficulty;
            startGame();
        });
    });

    function startGame() {
        const difficultyFiles = {
            "easy": "html/jeux-facile.html",
            "medium": "html/jeux-moyen.html",
            "hard": "html/jeux-difficile.html"
        };
        if (difficultyFiles[selectedDifficulty]) {
            window.location.href = difficultyFiles[selectedDifficulty];
        }
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
    const bgSpeed = 3;
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
        if (keys.ArrowUp) posY -= speed;
        if (keys.ArrowDown) posY += speed;
        if (keys.ArrowLeft) posX -= speed;
        if (keys.ArrowRight) posX += speed;

        let limitLeft = marginFromImage;
        let limitRight = window.innerWidth - marginFromImage - ambWidth;

        if (posX < limitLeft) posX = limitLeft;
        if (posX > limitRight) posX = limitRight;
        if (posY < 0) posY = 0;
        if (posY > window.innerHeight - ambHeight) posY = window.innerHeight - ambHeight;

        ambulance.style.left = posX + 'px';
        ambulance.style.top = posY + 'px';

        bgPosY += bgSpeed;
        document.body.style.backgroundPosition = `center ${bgPosY}px`;

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

document.addEventListener("DOMContentLoaded", () => {
    const rulesModal = document.getElementById("rules-modal");
    const rulesBackBtn = document.getElementById("rules-back-btn");
    const rulesBtn = document.getElementById("rules-btn");

    // Ouvrir le modal des règles
    if (rulesBtn && rulesModal) {
        rulesBtn.addEventListener("click", () => {
            rulesModal.style.display = "block";
        });
    }

    // Bouton "Retour" dans le règlement
    if (rulesBackBtn && rulesModal) {
        rulesBackBtn.addEventListener("click", () => {
            rulesModal.style.display = "none";
        });
    }

    // Fermer en cliquant en dehors du contenu
    window.addEventListener("click", (e) => {
        if (e.target === rulesModal) {
            rulesModal.style.display = "none";
        }
    });
});