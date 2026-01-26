# nojob-ro
link: https://6wmzzcd7m5-commits.github.io/nojob-ro/
# Jobless RO: The Ultimate Text-Based Idle Roguelike

![Version](https://img.shields.io/badge/version-Ultimate_1.0-39ff14?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Neon_Cyber-39ff14?style=for-the-badge)

```text
      _  ____  ____  _      ______  _____ _____   _____   ____  
     | |/ __ \|  _ \| |     |  ____|/ ____/ ____| |  __ \ / __ \ 
     | | |  | | |_) | |     | |__  | (___| (___   | |__) | |  | |
 _   | | |  | |  _ <| |     |  __|  \___ \\___ \  |  _  /| |  | |
| |__| | |__| | |_) | |___  | |____ ____) |___) | | | \ \| |__| |
 \____/ \____/|____/|_____|______|_____/_____/  |_|  \_\\____/

>> SYSTEM STATUS: ONLINE
>> PROTOCOL: GRIND_UNTIL_DEATH
>> TARGET: FLOOR 50

# Jobless RO: Official Game Manual & Documentation

## 📖 Table of Contents
* [Introduction](#-introduction)
* [Key Features](#-key-features)
* [Getting Started](#-getting-started)
* [Gameplay Mechanics](#-gameplay-mechanics)
* [Stats & Attributes](#-stats--attributes)
* [Job Classes & Skills](#-job-classes--skills)
* [The Loot System](#-the-loot-system)
* [Difficulty Modes](#-difficulty-modes)
* [Strategy Guide](#-strategy-guide)
* [Technical Documentation](#-technical-documentation)
* [Secrets & Easter Eggs](#-secrets--easter-eggs)
* [Credits](#-credits)

---

## 📜 Introduction
**Jobless RO** is a lightweight, single-file, offline-capable HTML5 RPG that pays homage to the classic MMORPG *Ragnarok Online*. Stripped of heavy 3D assets and complex networking, this game distills the core "grind" experience into its purest form: **Numbers, Speed, and Progression.**

Set in a cyberpunk-terminal interface (Neon Green on Black), you play as a "Jobless" Novice attempting to ascend the Endless Tower. There are no servers, no lag, and no microtransactions—only you, the Random Number Generator (RNG), and 50 floors of monsters standing between you and the ultimate secret.

---

## ✨ Key Features
* **Zero Dependencies:** The entire game is contained in a single `.html` file. No internet or external libraries required.
* **Hyper-Speed Engine:** Run at **10x** (Base), **30x** (Turbo), or **100x** (Hyper) speed.
* **Deep Customization:** Manually allocate points into STR, AGI, VIT, INT, DEX, and LUK.
* **Classic Job System:** Evolve from Novice to 1st and 2nd Job classes.
* **Roguelike Elements:** Randomized skill upgrades and "Sage Blessings" between floors.
* **Persistent Save:** Autosaves your progress to the browser's `LocalStorage`.

---

## 🚀 Getting Started

### Installation
1.  Download the `Jobless_RO.html` file.
2.  Open it in any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **Mobile:** Add the file to your home screen to play it like a native app.

### The First Steps
1.  **Identity Registration:** Enter your character name.
2.  **Select Protocol (Difficulty):** * **EASY:** Monsters have 80% stats.
    * **HARD:** Monsters have 150% stats, but give 150% EXP.
3.  **Novice Specialization:** Choose your starting skill (*First Aid, Heavy Strike, or Mana Bolt*).
4.  **Allocate Stats:** You start with **9 Points**. Use them wisely!

---

## ⚙️ Gameplay Mechanics

### The Tower & Progression
You must defeat a specific number of monsters to find the stairs to the next floor:
* **Floors 1-9:** 1 Kill to advance.
* **Floors 11-49:** Required kills increase every 10 floors (up to 5 kills).
* **Boss Floors:** Every 10th Floor (10, 20, 30, 40, 50). You must defeat the **MVP** to proceed.

### Combat System (ATB)
* **The Bar:** Both you and the enemy have an ATB bar (0 to 1000).
* **Speed:** Fill rate is determined by **AGI** and **ASPD**.
* **The Turn:** When the bar reaches 1000, an attack is launched.
* **Damage:** Calculated via ATK vs DEF. **LUK** determines Critical Hits (ignoring DEF).

---

## 📊 Stats & Attributes

| Stat Name | Effect |
| :--- | :--- |
| **STR** (Strength) | Increases melee physical damage (ATK). |
| **AGI** (Agility) | Increases Attack Speed (ASPD) and Dodge rate (FLEE). |
| **VIT** (Vitality) | Increases Max HP, Defense (DEF), and potion effectiveness. |
| **INT** (Intelligence) | Increases Magic Attack (MATK), Max SP, and SP recovery. |
| **DEX** (Dexterity) | Increases Accuracy (HIT), damage stability, and ASPD. |
| **LUK** (Luck) | Increases Critical Hit rate (CRIT) and Drop Rate. |

---

## ⚔️ Job Classes & Skills

### Novice (Lv 1 - 9)
* **Skills:** First Aid, Heavy Strike, Mana Bolt.

### 1st Jobs (Lv 10+)
* **Swordman:** Tanky brawler. Skills: *Bash, Magnum Break, Auto Berserk.*
* **Mage:** Glass cannon. Skills: *Fire/Cold/Lightning Bolt.*
* **Thief:** Speedster. Skills: *Envenom, Double Attack, Hiding.*

### 2nd Jobs (Lv 30+)
* **Knight:** Physical force. Skills: *Bowling Bash, Pierce, Two-Hand Quicken.*
* **Wizard:** Screen-clearer. Skills: *Storm Gust, Meteor Storm, Lord of Vermilion.*
* **Assassin:** Crit master. Skills: *Sonic Blow, Grimtooth, Katar Mastery.*

---

## 🎒 The Loot System
Equipment is automatically equipped only if the drop is superior to your current gear.

**Drop Rate Formula:**
> `Base (1%) + (LUK * 0.1%) + (Level * 0.1%)` — *Max Cap: 10%*

### Equipment Progression
* **Weapons:** Knife (+5) $\rightarrow$ Katana (+35) $\rightarrow$ Muramasa (+80) $\rightarrow$ **Excalibur (+120)**.
* **Armor:** Cotton Shirt (+10) $\rightarrow$ Coat (+60) $\rightarrow$ Plate Armor (+250) $\rightarrow$ **Lord's Clothes (+400)**.

---

## 🧠 Strategy Guide

1.  **The "AGI Critical" Assassin:** Pump AGI to 99 first. High flee makes you untouchable against normal mobs, but watch out for undodgeable magic!
2.  **The "VIT Tank" Knight:** Focus on VIT/STR. You can survive Boss nukes that would one-shot other builds.
3.  **The Pro-Tip Reset:** When you change jobs (Lv 10/30), you get a **Stat Reset**. Use AGI early for fast leveling, then reset to INT if you want to become a Wizard.

---

## 💻 Technical Documentation
For developers looking to modify the `Jobless_RO.html` file:

* **Architecture:** Vanilla JS (ES6) using a decoupled game loop. 
* **State:** The `app` object holds player (`p`) and system (`sys`) states.
* **Modding:** * Find `checkLoot()` to edit drop rates.
    * Edit `DB.items` to add custom equipment.
    * Modify `setInterval` logic to change tick rates.

---

## 🥚 Secrets & Easter Eggs
* **The Mission:** "打爆機睇AB食雞子相" (Beat the game to see the "AB eating chicken testicles" photos).
* **Ending A (Easy):** The game taunts you to try Hard Mode.
* **Ending B (Hard):** Unlocks the "True Ending" message and the "Message the Guild Leader" prompt.

---

## 📝 Credits
* **Concept:** Inspired by Ragnarok Online (Gravity Co., Ltd).
* **Development:** Created by Gemini.
* **License:** MIT License.

**Happy Grinding!**
