const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules-btn");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const rulesModal = document.getElementById("rules-modal");
const closeBtn = document.querySelector(".close");

startBtn.addEventListener("click", startGame);
rulesBtn.addEventListener("click", showRules);

closeBtn.addEventListener("click", closeRules);

window.addEventListener("click", (event) => {
    if (event.target === rulesModal) {
        closeRules();
    }
});

function showRules() {
    rulesModal.style.display = "block";
}

function closeRules() {
    rulesModal.style.display = "none";
}

function startGame() {
    console.log("Jeu démarré!");
}