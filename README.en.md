# Operation: Save the Golden Purse

**Collaborative School Project**
This project was carried out as a group during our computer science studies at Ynov Campus.

## 1. General Overview
We developed *Operation: Save the Golden Purse*, an arcade survival game in HTML, CSS, and JavaScript, for the "Dangerous Jam JS".

The player takes on the role of an ambulance driver transporting a patient in critical condition. Time is running out: there are only a few minutes left to reach the deadline, beyond which the patient's life is at stake.

The goal is to reach the hospital before the timer ends while avoiding road hazards. In this universe, nothing is safe and everything can become a threat, keeping with the jam's theme: **"Nothing is Safe"**.

## 2. Concept and Theme Integration
We integrated the *Nothing is Safe* theme directly into the gameplay. In this world, anything can become dangerous:
- Obstacles on the road
- Traffic jams
- The ambulance's speed
- Collisions
- Secret passages
- Questions meant to help the player, which can also penalize them

The player must constantly adapt to an unpredictable environment where every mistake can cost the patient's health points.

## 3. Gameplay
### 3.1 Objective
Survive until reaching the hospital by keeping:
- The timer above zero
- The patient's health points above zero

### 3.2 Controls
- **Left Arrow**: move left
- **Right Arrow**: move right
- **Up Arrow**: accelerate
- **Down Arrow**: slow down or reverse

### 3.3 Obstacles
The player must avoid various obstacles generated on the road. Each collision results in a loss of health points. The severity of the damage depends on the vehicle's speed, the type of obstacle, and the pain inflicted on the patient.

### 3.4 Environment
A city is visible on the sides of the road to enhance immersion and give the impression of constant movement.

## 4. Health System
The patient has five hearts. Each collision removes one or more hearts depending on the impact's severity. If the hearts reach zero, the game is lost.

## 5. Difficulty Modes
Each mode changes the time available to reach the hospital:
- **Easy**: 1 minute
- **Medium**: 2 minutes
- **Hard**: 3 minutes

## 6. Secret Passages and Medical Quiz
We included a secret passage for each mode. By taking it, the player must answer a random question about medical emergencies. These questions come from an internal database.

Depending on the answer:
- **Possible bonuses**: time added, health gained, temporary upgrade
- **Possible penalties**: health lost, slowdown, additional obstacles

These passages reinforce the idea that nothing is safe, even opportunities.

## 7. Defeat Conditions
The player loses the game if:
- The timer reaches zero
- Health points drop to zero
- The patient exceeds the critical survival limit

## 8. Scoring System
The final score depends on several factors:
- Survival time
- Number of obstacles avoided
- Average speed
- Bonuses and penalties obtained
- Chosen difficulty mode

## 9. Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)

## 10. Development Challenges
- Managing collisions without bugs.
- Synchronizing speed, obstacles, and health loss.
- Creating a dynamic timer based on difficulty.
- Integrating an animated background without performance loss.
- Implementing a random quiz system.
- Maintaining smooth gameplay using only HTML, CSS, and JavaScript.

### 👥 Contributors
- Ynov Campus Students Group.
