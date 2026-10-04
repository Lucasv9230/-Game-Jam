let time = 60;
const timerElement = document.getElementById("timer");

const interval = setInterval(() => {
    time--;
    timerElement.textContent = "Temps restant : " + time;
    if (time <= 0) {
        clearInterval(interval);

        const img = document.getElementById("winImage");
        img.style.display = "block";
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.zIndex = "9999";
        setTimeout(() => {
            img.style.display = "none";
            window.location.href = "../index.html"; 
        }, 5000);
    }
}, 1000);
