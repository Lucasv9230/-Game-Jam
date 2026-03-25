 let time = 120;
    const timerElement = document.getElementById("timer");

    const interval = setInterval(() => {
        time--;

        // Affiche le timer à l'écran
        timerElement.textContent = "Temps restant : " + time;

        // Quand le timer arrive à 0 → victoire
        if (time <= 0) {
            clearInterval(interval);

            alert("VICTOIRE : L'operation est un succes !");
            window.location.href = "../index.html"; // Retour au menu
        }
    }, 1000);