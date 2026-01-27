# Jobless RO: Pocket Edition (Serverless RPG)

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-live-blue)
![Platform](https://img.shields.io/badge/platform-web-orange)
![Tech](https://img.shields.io/badge/tech-VanillaJS%20%7C%20GitHub%20Actions-yellow)

```text
      _  ____  ____  _      ______  _____ _____   _____   ____  
     | |/ __ \|  _ \| |     |  ____|/ ____/ ____| |  __ \ / __ \ 
     | | |  | | |_) | |     | |__  | (___| (___   | |__) | |  | |
 _   | | |  | |  _ <| |     |  __|  \___ \\___ \  |  _  /| |  | |
| |__| | |__| | |_) | |___  | |____ ____) |___) | | | \ \| |__| |
 \____/ \____/|____/|_____|______|_____/_____/  |_|  \_\\____/

**Jobless RO** is a lightweight, procedural, endless RPG engine that runs entirely in the browser. It pays homage to the classic MMORPG *Ragnarok Online*, re-imagined as a single-file, zero-dependency application.

What makes this project unique is its **"Serverless IssueOps" Architecture**. It requires no external backend, no database hosting, and no cloud fees. It uses GitHub Issues and GitHub Actions as a secure, automated backend for global leaderboards.

---

## 📖 Table of Contents

1.  [Features](#-features)
2.  [How to Play](#-how-to-play)
3.  [Technical Architecture](#-technical-architecture)
4.  [Game Mechanics & Formulas](#-game-mechanics--formulas)
5.  [The CSS Sprite Engine](#-the-css-sprite-engine)
6.  [Security & Anti-Cheat](#-security--anti-cheat)
7.  [Deployment Guide](#-deployment-guide)
8.  [Contribution](#-contribution)
9.  [License](#-license)

---

## ✨ Features

### ⚔️ Core Gameplay
* **Procedural Dungeon Crawler:** Infinite floor scaling. Every floor is mathematically generated, ensuring no two runs are exactly the same while maintaining a balanced difficulty curve.
* **Classic Job System:** Start as a **Novice** and branch into 6 distinct classes: **Swordman, Mage, Archer, Merchant, Thief, and Acolyte**, each with unique stat multipliers and skill sets.
* **Endless Tower Mode:** The game technically never ends. After Floor 50, monsters scale exponentially (`1.05^x`), challenging players to optimize their builds to the mathematical limit.
* **Boss Encounters:** Fixed Boss encounters (MVPs) spawn every 10 floors (Angeling, Golden Thief Bug, Eddga, Osiris, Baphomet), requiring strategic resource management.

### 🎨 Visuals & UI
* **CSS-Only Pixel Art:** There are **zero** image files in this repository. All characters, costumes, and animations are rendered dynamically using CSS `box-shadow`, `linear-gradient`, and keyframe animations. This keeps the file size incredibly small (<30KB).
* **Responsive Design:** Features a `100dvh` (Dynamic Viewport Height) layout, optimized perfectly for both Desktop and Mobile browsers without address bar interference.
* **Dark Mode UI:** A clean, terminal-inspired aesthetic with neon accents (Cyan/Pink/Green) that reduces eye strain.

### ☁️ Infrastructure
* **Zero-Dependency:** The entire game logic resides in a single `index.html` file.
* **Global Ranking System:** A cross-player leaderboard powered entirely by GitHub.
* **Offline Capable:** The core game loop works offline; internet is only required to fetch or submit rankings.

---

## 🎮 How to Play

### Controls
The game is played entirely with the mouse (or touch on mobile).
* **FIGHT:** Engage the current floor's monster.
* **REST:** Regenerate HP (30% chance to succeed).
* **AUTO:** Toggles automatic combat and stat distribution (useful for farming lower floors).
* **SUBMIT SCORE:** Uploads your current progress to the global leaderboard.

### Character Creation
1.  **Name:** Enter a name (Max 10 characters).
2.  **Gender:** Select `_m` (Male) or `_f` (Female). This changes the visual sprite generation and color palette.
3.  **Difficulty:**
    * **EASY:** 0.8x Monster Stats.
    * **HARD:** 1.5x Monster Stats (For the true challenge).

---

## 🏗 Technical Architecture

Jobless RO utilizes a **"Serverless IssueOps"** pattern. Instead of paying for a Node.js server or a MongoDB instance, we abuse the power of GitHub's infrastructure to act as our database and API.

### 1. The Frontend (Client)
The `index.html` file contains the Game Engine (`G` object), the Database (`DB` object), and the UI Renderer. It handles the game loop at 30 ticks per second using `setInterval`.

### 2. The Database (JSON)
A file named `leaderboard.json` sits in the root of the repository. This static file acts as the "Read-Only" database. The game client fetches this file via `raw.githubusercontent.com` to display the Top 10 rankings.

### 3. The API (GitHub Issues)
When a player clicks "Submit Score", the client does not send a POST request to a server. Instead, it constructs a pre-filled URL to open a **New GitHub Issue**.
* **Title:** `SCORE: PlayerName`
* **Body:** A JSON block containing the save data and a cryptographic hash.

### 4. The Backend (GitHub Actions)
A workflow file `.github/workflows/secure_rank.yml` listens for `issues: [opened]`. When a score is submitted:
1.  **Validation:** It checks if the GitHub account is at least 7 days old (Anti-Bot).
2.  **Verification:** It recalculates the hash signature of the payload using a secret SALT to ensure the JSON wasn't tampered with manually.
3.  **Processing:** It reads `leaderboard.json`, updates the score if it qualifies for the Top 20, re-sorts the array, and writes the file back to the repo.
4.  **Cleanup:** It automatically closes the Issue.

---

## 📊 Game Mechanics & Formulas

Understanding the math is key to reaching Floor 100+.

### Attributes
* **STR (Strength):** Increases Physical Attack Power (ATK).
* **AGI (Agility):** Increases Attack Speed (ASPD) and Dodge Rate (FLEE).
* **VIT (Vitality):** Increases Max HP and Physical Defense (DEF).
* **INT (Intelligence):** Increases Magic Attack (MATK) and Max SP.
* **DEX (Dexterity):** Increases Hit Rate (HIT), Cast Speed, and stabilizes damage.
* **LUK (Luck):** Increases Critical Hit Rate (CRIT) and Drop Rates.

### Combat Formulas
The game uses simplified integer-math formulas derived from the original RO pre-renewal mechanics.

**Physical Attack (P):**
```javascript
ATK = STR + (DEX/5) + (LUK/3) + (Level * 2) + Weapon_Bonus
