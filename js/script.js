const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules-btn");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const rulesModal = document.getElementById("rules-modal");
const startModal = document.getElementById("start-modal");
const closeButtons = document.querySelectorAll(".close");
const difficultyButtons = document.querySelectorAll(".btn-difficulty");

let selectedDifficulty = null;

startBtn.addEventListener("click", () => {
    startModal.style.display = "block";
});

rulesBtn.addEventListener("click", showRules);

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

function showRules() {
    rulesModal.style.display = "block";
}

function startGame() {
    console.log("Jeu démarré avec difficulté : " + selectedDifficulty);
    
    const difficultyFiles = {
        "easy": "html/jeux-facile.html",
        "medium": "html/jeux-moyen.html",
        "hard": "html/jeux-difficile.html"
    };
    
    if (difficultyFiles[selectedDifficulty]) {
        window.location.href = difficultyFiles[selectedDifficulty];
    }
}