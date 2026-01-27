/* --- AEGIS_DATABASE_V3.0 --- */
window.DB = {
    // 1. CLASS SYSTEM (Section 2.A)
    // Job data includes base ASPD used for the Fill_Rate formula [cite: 17, 23, 27]
    jobs: {
        'Novice': { 
            hp: 100, sp: 30, aspd: 150, 
            stats: [2, 2, 2, 2, 2, 2], // STR, AGI, VIT, INT, DEX, LUK [cite: 16]
            next: ['Swordman', 'Mage', 'Thief'] 
        },
        'Swordman': { 
            hp: 400, sp: 60, aspd: 170, 
            stats: [12, 5, 10, 2, 8, 2], 
            next: ['Knight'] 
        },
        'Mage': { 
            hp: 180, sp: 350, aspd: 140, 
            stats: [2, 10, 4, 25, 12, 2], 
            next: ['Wizard'] 
        },
        'Thief': { 
            hp: 220, sp: 120, aspd: 190, 
            stats: [8, 22, 5, 5, 15, 10], 
            next: ['Assassin'] 
        }
    },

    // 2. SKILL DATABASE (Section 2.B)
    // Multipliers for Physical and Magic damage formulas [cite: 22]
    skills: {
        'Bash': { sp: 10, mult: 2.5, type: 'phys' },
        'Fire Bolt': { sp: 15, mult: 3.5, type: 'mag' },
        'Envenom': { sp: 12, mult: 2.2, type: 'phys' },
        'First Aid': { sp: 5, mult: 0.1, type: 'heal' }
    },

    // 3. MONSTER ROSTER & SCALING (Section 2)
    mobs: {
        names: [
            "Poring", "Fabre", "Lunatic", "Chonchon", "Roda Frog", 
            "Spore", "Tarou", "Poison Spore", "Wormtail", "Angeling [MVP]",
            "Zombie", "Skeleton", "Poporing", "Hydra", "Vadon", 
            "Marina", "Thief Bug", "Soldier Skeleton", "Archer Skeleton", "Golden Thief Bug [MVP]"
        ],
        
        // Scaling logic to generate enemy stats per floor [cite: 22]
        scaling: (floor) => {
            const isBoss = (floor % 10 === 0);
            const multi = isBoss ? 5 : 1; // Bosses have 5x multipliers [cite: 14]
            
            return {
                n: window.DB.mobs.names[Math.min(floor - 1, 19)] || `Void Spectre #${floor}`,
                hp: (50 + (floor * 40)) * multi,
                atk: (10 + (floor * 10)) * multi,
                def: Math.floor(floor * 1.5), // Physical Defense (DEF) [cite: 18, 22]
                zeny: floor * 20
            };
        }
    }
};

console.log("DB_PILLAR: ATTRIBUTE_MATRIX_LOADED");
