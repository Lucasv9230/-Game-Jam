Opération : Sauver la Bourse d’Or
Survival Game – Dangerous Jam JS – Theme: “Nothing is Safe”
1. Présentation générale
Opération : Sauver la Bourse d’Or est un jeu de survie arcade développé en HTML, CSS et JavaScript dans le cadre de la Dangerous Jam JS.
Le joueur incarne le conducteur d’une ambulance transportant un patient atteint d’une torsion testiculaire aiguë. Le temps est compté : il reste seulement quelques minutes avant d’atteindre la limite critique des six heures, au-delà de laquelle le testicule du patient risque de ne plus être sauvable.
L’objectif est d’atteindre l’hôpital avant la fin du timer tout en évitant les dangers de la route. Dans cet univers, rien n’est sûr et tout peut devenir une menace, conformément au thème de la jam : Nothing is Safe.

2. Concept et intégration du thème
Le thème Nothing is Safe est intégré directement dans le gameplay.
Dans ce monde, tout peut devenir dangereux :
• 	Les obstacles sur la route
• 	Les embouteillages
• 	La vitesse de l’ambulance
• 	Les collisions
• 	Les passages secrets
• 	Les questions censées aider le joueur, qui peuvent aussi le pénaliser
Le joueur doit constamment s’adapter à un environnement imprévisible où chaque erreur peut coûter des points de vie au patient.

3. Gameplay
3.1 Objectif
Survivre jusqu’à l’arrivée à l’hôpital en maintenant :
• 	Le timer au-dessus de zéro
• 	Les points de vie du patient au-dessus de zéro
3.2 Contrôles
• 	Flèche gauche : déplacement à gauche
• 	Flèche droite : déplacement à droite
• 	Flèche haut : accélérer
• 	Flèche bas : ralentir ou reculer
3.3 Obstacles
Le joueur doit éviter différents obstacles générés sur la route.
Chaque collision entraîne une perte de points de vie.
La gravité des dégâts dépend :
• 	de la vitesse du véhicule
• 	du type d’obstacle
• 	de la douleur infligée au patient
3.4 Environnement
Une ville est visible sur les côtés de la route afin de renforcer l’immersion et donner une impression de déplacement constant.

4. Système de vie
Le patient possède cinq cœurs.
Chaque collision retire un ou plusieurs cœurs selon la gravité de l’impact.
Si les cœurs atteignent zéro, la partie est perdue.

5. Modes de difficulté
Chaque mode modifie le temps disponible pour atteindre l’hôpital.
easy : 1 minute
medium : 2 minutes
hard : 3 minutes

6. Passages secrets et quiz médical
Chaque mode contient un passage secret.
En l’empruntant, le joueur doit répondre à une question aléatoire portant sur la torsion testiculaire. Ces questions proviennent d’une base de données interne.
Selon la réponse :
• 	Bonus possibles : ajout de temps, gain de vie, amélioration temporaire
• 	Malus possibles : perte de vie, ralentissement, obstacles supplémentaires
Ces passages renforcent l’idée que rien n’est sûr, même les opportunités.

7. Conditions de défaite
Le joueur perd la partie si :
• 	Le timer atteint zéro
• 	Les points de vie tombent à zéro
• 	Le patient dépasse la limite critique de survie

8. Système de score
Le score final dépend de plusieurs facteurs :
• 	Temps de survie
• 	Nombre d’obstacles évités
• 	Vitesse moyenne
• 	Bonus et malus obtenus
• 	Mode de difficulté choisi

9. Technologies utilisées
• 	HTML
• 	CSS
• 	JavaScript

10. Difficultés rencontrées
• 	Gestion des collisions sans bugs
• 	Synchronisation entre vitesse, obstacles et perte de vie
• 	Création d’un timer dynamique selon la difficulté
• 	Intégration d’un décor animé sans perte de performance
• 	Mise en place d’un système de quiz aléatoire
• 	Maintien d’un gameplay fluide uniquement en HTML, CSS et JavaScript
