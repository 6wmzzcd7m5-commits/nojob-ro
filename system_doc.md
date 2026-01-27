# 📘 Jobless RO: System Architecture & Logic Documentation

**Project:** Jobless RO (Serverless RPG)
**Version:** Ultimate v1.0
**Repository:** `6wmzzcd7m5-commits/nojob-ro`
**Architecture:** Client-Side SPA + GitHub IssueOps Backend

---

## 1. 🏗️ Technical Architecture

The project utilizes a **"Serverless IssueOps"** pattern to achieve persistence and global rankings without a traditional database or API server.

### A. Frontend (The Game Client)
* **Engine:** Pure Vanilla JavaScript (ES6+). No frameworks.
* **Rendering:** DOM-based manipulation.
    * **No Assets:** The game uses zero image files. All sprites are generated dynamically using CSS `linear-gradient` and `box-shadow` on HTML `div` elements.
    * **Fonts:** Uses `'Tahoma', 'Arial'` for UI (11px) and `'Impact'` for Critical Hits to mimic the original RO aesthetic. Text elements utilize `text-shadow` for black outlines.
    * **Responsiveness:** Uses `100dvh` (Dynamic Viewport Height) to ensure full-screen compatibility on mobile browsers.
* **State Management:** A single global object (`G`) handles the player state, game loop, and UI updates.
* **Persistence:**
    * **Auto-Save:** Writes to Browser LocalStorage on every menu interaction.
    * **Manual Export:** Converts state object to JSON $\rightarrow$ Base64 String $\rightarrow$ downloadable `.sav` file.
    * **Manual Import:** Parses `.sav` files to restore state.

### B. Backend (The Ranking System)
* **Database:** A static `leaderboard.json` file hosted in the repository root.
* **Read Operation (GET):** The client fetches the raw JSON content directly via `raw.githubusercontent.com` with a timestamp query to bypass caching.
* **Write Operation (POST):**
    1.  The Client constructs a **GitHub Issue** URL pre-filled with a JSON payload.
    2.  The User submits the Issue.
    3.  **GitHub Actions** (Server-side script) triggers on `issues: [opened]`.
    4.  The Action validates data, updates `leaderboard.json`, commits changes, and closes the Issue.

---

## 2. ⚔️ Core Game Mechanics

### A. Attributes (Stats)
The game uses a classic 6-stat system derived from pre-renewal Ragnarok Online mechanics.

| Stat | Name | Primary Effect | Secondary Effect |
| :--- | :--- | :--- | :--- |
| **STR** | Strength | Physical Attack (ATK) | Weight Limit (Implied) |
| **AGI** | Agility | Attack Speed (ASPD) | Flee Rate (Dodge) |
| **VIT** | Vitality | Max HP | Physical Defense (DEF) |
| **INT** | Intelligence | Magic Attack (MATK) | Max SP |
| **DEX** | Dexterity | Hit Rate (Accuracy) | Min. ATK / Cast Time |
| **LUK** | Luck | Critical Rate (CRIT) | Drop Chance |

### B. Combat Formulas
All math uses integer flooring (`Math.floor`) to maintain retro consistency.

1.  **Physical Damage:**
    * `ATK = STR + (DEX / 5) + (LUK / 3) + (Level * 2) + Weapon_Bonus`
    * `Damage = (ATK * Multiplier) - Target_DEF` (Minimum 1)
2.  **Magic Damage:**
    * `MATK = INT + (INT / 2) + (DEX / 5) + (Level * 2) + Weapon_Bonus`
    * `Damage = MATK * Multiplier` (Ignores DEF, Always Hits, Cannot Crit)
3.  **Defense:**
    * `DEF = (VIT / 2) + (Level / 2) + Armor_Bonus`
4.  **Speed (Tick System):**
    * The game loop runs every **30ms**.
    * An Attack Bar (ATB) fills from 0 to 1000.
    * `Fill_Rate = Base_Job_ASPD + (AGI * 0.8) + (DEX * 0.2)`
    * Attack triggers when `ATB >= 1000`.
5.  **Accuracy & Critical:**
    * `Hit_Chance = (80 + Player_HIT - Target_FLEE)%`
    * `Crit_Chance = (1 + LUK * 0.3)%`
    * **Critical hits** deal **1.5x Damage** and ignore Flee (Never miss).

### C. Random Events
Upon winning a battle, there is a **30% chance** to trigger a "Random Event" that grants permanent stats (inspired by RO NPCs):
1.  **Blacksmith Refine:** +1 Permanent ATK.
2.  **Sage Refine:** +1 Permanent MATK.
3.  **Priest Blessing:** +10 Permanent MaxHP.

---

## 3. 🗺️ World & Progression Logic

### A. Infinite Dungeon System
The game is an endless tower climber.

* **Floors 1-50:** Linear difficulty scaling. Map names cycle based on floor number.
* **Floors 51+ (Endless Mode):**
    * Map Name changes to "Endless Tower".
    * **Exponential Scaling:** Monster stats multiply by $1.05^{(Floor - 50)}$. This creates a "soft cap" where progress eventually becomes mathematically impossible.

### B. Monster Generation
* **Regular Mobs:** Procedurally generated based on the current floor number.
* **Bosses (MVPs):**
    * Spawn strictly every **10 Floors** (10, 20, 30...).
    * Fixed Identity: Angeling (10), Golden Thief Bug (20), Eddga (30), Osiris (40), Baphomet (50).
    * **Endless Bosses:** After Floor 50, bosses cycle continuously `(Floor/10 - 1) % 5` but apply the **Exponential Scaling** multiplier.

### C. Automation (True Auto-Battle)
* **Logic:** If enabled, the game waits 500ms after a victory and automatically triggers the `Battle()` function for the next floor.
* **Boss Handling:** Auto-battle **does** engage bosses automatically.
* **Stat Distribution:** Auto-battle randomly distributes unspent Stat Points to keep the player growing while idle.

---

## 4. 🛡️ Security & Integrity Strategy

Since the game runs in the browser, the code is visible. Security relies on **Server-Side Validation** via GitHub Actions.

### A. Client-Side Protection (Deterrent)
1.  **Hash Signature:** `Hash = DJB2(Name + Job + Floor + SALT)`. Sent with payload to prevent simple text editing.
2.  **Rate Limiting:** UI blocks requests if `< 60 seconds` have passed since last submission.

### B. Server-Side Protection (Enforcement)
The GitHub Action script performs these checks before updating the leaderboard:

1.  **Anti-Bot (Account Age):**
    * Fetches the GitHub profile of the submitter.
    * **REJECTS** if account creation date is **< 1 minute ago**. (Allows new real users, stops mass-bot creation scripts).
2.  **Anti-Tamper (Re-Hashing):**
    * The Server uses the same `SALT` (stored in the workflow file) to recalculate the hash from the submitted data.
    * **REJECTS** if `Calculated_Hash !== Submitted_Hash`.
3.  **One-Score-Per-User:**
    * Checks if the user already exists in `leaderboard.json`.
    * **UPDATES** only if the new Floor is higher than the recorded Floor.
    * **IGNORES** if the score is lower or equal.
4.  **Sanitization:**
    * Strips non-alphanumeric characters from the Player Name.

---

## 5. 🎨 UI & UX Logic

### Sprite Engine Logic
The avatar displayed is a composition of CSS classes:
* `.spr`: The container (handles animation).
* `.ro-m` / `.ro-f`: Sets the hair style and gender-specific positioning.
* `.j-{id}`: Sets the body costume colors using `linear-gradient`.
    * *Logic:* `Costume_ID = Math.min(6, Player_Job_ID)`. Supports 6 jobs + Novice (0).

### Localization
* **Bilingual Support:** The game features a full translation engine (`EN/CN`).
* **Implementation:** All strings are stored in a `T` object (e.g., `T.en.st`, `T.cn.st`) and accessed via a helper function `txt(key)`.

### Registration Screen Logic
* **Input Field:** Name only (Text).
* **Gender Selection:** Toggles a temporary state variable `tmp.g`. This immediately updates the Header Avatar DOM element to provide visual feedback *before* the game starts.
* **No Avatar in Input:** The input area remains clean text; the visual feedback is strictly in the persistent Header HUD.

---

## 6. 📜 Version History & Changelog

### **v1.0: Procedural Engine**
* **Goal:** Streamline code, remove static database, improve performance.
* **Changes:**
    * Removed static mob/item arrays.
    * Implemented **Math-based generation** for Mob HP/ATK.
    * Implemented procedural loot generation.
    * Compressed code using arrow functions.

### **v1.1: Boss Update**
* **Goal:** Distinct bosses at specific intervals.
* **Changes:**
    * Added `BOSSES` array (Angeling, GTB, Eddga, Osiris, Baphomet).
    * Logic to spawn specific bosses at Floors 10, 20, 30, 40, 50.
    * Procedural mobs remain for non-boss floors.

### **v1.2: Balance Update**
* **Goal:** Rebalance Physical vs. Magical gameplay.
* **Changes:**
    * **Physical:** Checks HIT vs FLEE, reduced by DEF, can CRIT (1.5x).
    * **Magical:** Always hits, ignores DEF, cannot CRIT.
    * Adjusted Skill Multipliers (Storm Gust 4.5x, Sonic Blow 3.0x).

### **v1.3: UI Clean-up**
* **Goal:** Fix UI clutter on the start screen.
* **Changes:**
    * Removed the Avatar Sprite preview from the Name Input box.
    * Kept the Avatar in the main Header HUD.
    * Added Gender Selectors (`_m` / `_f`).

### **v1.4: Endless & Server**
* **Goal:** Infinite scaling and centralized rankings.
* **Changes:**
    * **Endless Mode:** Removed Floor 50 cap.
    * **Exponential Scaling:** Added `1.05 ^ (Floor - 50)` logic for floors > 50.
    * **Node.js Backend:** Created a rudimentary Express server for rankings.
    * **Rate Limiting:** Added IP-based 60-second cooldown.

### **v1.5: Serverless IssueOps**
* **Goal:** Remove external hosting (Oracle/Render) costs.
* **Changes:**
    * **Architecture Shift:** Moved backend to **GitHub Actions**.
    * **Read:** Fetches `leaderboard.json` via Raw URL.
    * **Write:** Opens a pre-filled GitHub Issue for score submission.

### **v1.6: Security Hardening**
* **Goal:** Prevent bot spam and cheating.
* **Changes:**
    * **Hash Signature:** Added `DJB2(Data + SALT)` verification.
    * **Account Age:** Added logic to reject GitHub accounts created < 1 minute ago.
    * **Sanitization:** Added server-side name stripping.

### **v2.0: Master Version**
* **Goal:** Bug fixing and Mobile Responsiveness.
* **Changes:**
    * **UI Fix:** Implemented `100dvh` for mobile browsers.
    * **Layout:** Created `#app` container to center game on desktop.
    * **Boss Cycling:** Fixed logic to rotate bosses correctly after Floor 50.
    * **Auto-Battle:** Fixed UI lag during auto-stat distribution.

### **v3.0: Ultimate Version ("Director's Cut")**
* **Goal:** Merge robust architecture with fun gameplay features.
* **Changes:**
    * **Merged Features:** Combined Master architecture with "Events" logic.
    * **Random Events:** Added 30% chance for permanent stat bonuses (Refine/Bless) on win.
    * **Speed Control:** Added 1x/3x/MAX speed toggles.
    * **Localization:** Added full English/Chinese (`EN/CN`) toggle.
    * **Visuals:** Updated fonts to `Tahoma` (UI) and `Impact` (Crit) to match original RO style.
