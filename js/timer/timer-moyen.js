let time = 120;
const timerElement = document.getElementById("timer");

const interval = setInterval(() => {
    time--;

    // Affiche le timer
    timerElement.textContent = "Temps restant : " + time;

    // Quand le timer arrive à 0 → VICTOIRE
    if (time <= 0) {
        clearInterval(interval);

        const img = document.getElementById("winImage");

        // Affiche l'image de victoire au centre
        img.style.display = "block";
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.zIndex = "9999";

        // Après 5 secondes → cacher l'image et retourner au menu
        setTimeout(() => {
            img.style.display = "none";
            window.location.href = "../index.html"; 
        }, 5000);
    }
}, 1000);