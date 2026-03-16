const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const startModal = document.getElementById("start-modal");
const closeButtons = document.querySelectorAll(".close");
const difficultyButtons = document.querySelectorAll(".btn-difficulty");
let selectedDifficulty = null;

if (startBtn) {
    startBtn.addEventListener("click", () => {
        startModal.style.display = "block";
    });

    rulesBtn.addEventListener("click", () => {
        rulesModal.style.display = "block";
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

    difficultyButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            selectedDifficulty = e.target.dataset.difficulty;
            startModal.style.display = "none";
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

const ambulance = document.getElementById('ambulance');

if (ambulance) {
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
            if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault(); 
            }
        }
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

    ambulance.style.left = posX + 'px';
    ambulance.style.top = posY + 'px';
    gameLoop();
}