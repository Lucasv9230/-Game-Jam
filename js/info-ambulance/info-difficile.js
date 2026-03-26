// --- CONFIGURATION DES VIES ---
let maxLives = 3;          
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
// --- PERTE DE VIE ---
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



// --- LOGIQUE DU JEU (AMBULANCE) ---
const ambulance = document.getElementById('ambulance');

if (ambulance) {

    initHearts();

    const ambRect = ambulance.getBoundingClientRect();
    let ambWidth = ambRect.width || 80;
    let ambHeight = ambRect.height || 120;

    let posX = (window.innerWidth / 2) - (ambWidth / 2);
    let posY = window.innerHeight - ambHeight - 20;

    const speed = 7;
    const bgSpeed = 14;
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

    const obstaclesActifs = [];
    const typesObstacles = ['plot', 'grand-mère', 'dos-d-ane', 'flaque', 'passage'];

    const voies = [38, 46, 54, 62];

    function creerObstacle() {
        const typeAleatoire = typesObstacles[Math.floor(Math.random() * typesObstacles.length)];
        const imgSource = document.getElementById(typeAleatoire);
        
        if(!imgSource) return;

        const obsElement = document.createElement('img');
        obsElement.src = imgSource.src;
        obsElement.classList.add('obstacle-actif');
        
        const voieAleatoire = voies[Math.floor(Math.random() * voies.length)];
        
        const obstacle = {
            element: obsElement,
            relativeX: voieAleatoire,
            posY: -100, 
            estTouche: false 
        };

        document.body.appendChild(obsElement);
        obstaclesActifs.push(obstacle);
    }

    setInterval(creerObstacle, 2000);

    function gameLoop() {
        if (keys.ArrowUp) posY -= speed;
        if (keys.ArrowDown) posY += speed;
        if (keys.ArrowLeft) posX -= speed;
        if (keys.ArrowRight) posX += speed;

        let limitLeft = (window.innerWidth * 32) / 100;
        let limitRight = (window.innerWidth * 68) / 100 - ambWidth;

        if (posX < limitLeft) posX = limitLeft;
        if (posX > limitRight) posX = limitRight;
        if (posY < 0) posY = 0;
        if (posY > window.innerHeight - ambHeight) posY = window.innerHeight - ambHeight;

        ambulance.style.left = posX + 'px';
        ambulance.style.top = posY + 'px';

        bgPosY += bgSpeed;
        document.body.style.backgroundPosition = `center ${bgPosY}px`;

                for (let i = obstaclesActifs.length - 1; i >= 0; i--) {
            let obs = obstaclesActifs[i];
            
            obs.posY += bgSpeed; 

            const screenX = (window.innerWidth * obs.relativeX) / 100;
            
            obs.element.style.left = `${screenX}px`;
            obs.element.style.top = `${obs.posY}px`;

            const ambRect = ambulance.getBoundingClientRect();
            const obsRect = obs.element.getBoundingClientRect();

            const marge = 100; 

            if (!obs.estTouche && 
                ambRect.left + marge < obsRect.right &&
                ambRect.right - marge > obsRect.left &&
                ambRect.top + marge < obsRect.bottom &&
                ambRect.bottom - marge > obsRect.top) {
                
                obs.estTouche = true; 
                obs.element.style.opacity = "0.5"; 
                takeDamage();
            }

            if (obs.posY > window.innerHeight) {
                obs.element.remove();
                obstaclesActifs.splice(i, 1);
            }
        }
        
        requestAnimationFrame(gameLoop);

    }

    gameLoop();
}