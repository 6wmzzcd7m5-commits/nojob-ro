/* --- AEGIS_DATABASE_V4.0 (Internationalized & Expanded) --- */
window.DB = {
    // 1. LOCALIZATION DICTIONARY
    T: {
        en: {
            jobs: { 
                'Novice': 'Novice', 'Swordman': 'Swordman', 'Knight': 'Knight', 
                'Merchant': 'Merchant', 'Blacksmith': 'Blacksmith', 'Mage': 'Mage', 
                'Wizard': 'Wizard', 'Acolyte': 'Acolyte', 'Priest': 'Priest', 
                'Thief': 'Thief', 'Assassin': 'Assassin', 'Archer': 'Archer', 'Hunter': 'Hunter' 
            },
            skills: {
                'Bash': 'Bash', 'Magnum Break': 'Magnum Break', 'Bowling Bash': 'Bowling Bash',
                'Fire Bolt': 'Fire Bolt', 'Storm Gust': 'Storm Gust', 'Heal': 'Heal',
                'Double Strafe': 'Double Strafe', 'Sonic Blow': 'Sonic Blow', 'Falcon Assault': 'Falcon Assault'
                // ... (additional mapping omitted for brevity, full mapping included in logic)
            }
        },
        tc: { // Traditional Chinese
            jobs: { 
                'Novice': '初學者', 'Swordman': '劍士', 'Knight': '騎士', 
                'Merchant': '商人', 'Blacksmith': '鐵匠', 'Mage': '法師', 
                'Wizard': '巫師', 'Acolyte': '服事', 'Priest': '祭司', 
                'Thief': '盜賊', 'Assassin': '刺客', 'Archer': '弓箭手', 'Hunter': '獵人' 
            },
            skills: {
                'Bash': '重擊', 'Magnum Break': '怒爆', 'Bowling Bash': '怪物互擊',
                'Fire Bolt': '火箭術', 'Storm Gust': '暴風雪', 'Heal': '治癒術',
                'Double Strafe': '二連矢', 'Sonic Blow': '音速投擲', 'Falcon Assault': '獵鷹突擊',
                'Mammonite': '金錢攻擊', 'Hammer Fall': '大地之擊', 'Adrenaline Rush': '速度激發',
                'Meteor Storm': '隕石術', 'Lord of Vermilion': '怒雷強擊', 'Magnus Exorcismus': '十字驅魔攻擊',
                'Envenom': '施毒', 'Grimtooth': '無影之牙', 'Arrow Shower': '箭雨', 'Claymore Trap': '地雷陷阱'
            }
        }
    },

    // 2. TIERED JOB SYSTEM
    jobs: {
        melee: {
            'Swordman': { hp: 400, sp: 60, aspd: 170, stats: [12, 5, 10, 2, 8, 2], next: ['Knight'] },
            'Merchant': { hp: 350, sp: 100, aspd: 155, stats: [15, 8, 12, 2, 10, 15], next: ['Blacksmith'] },
            'Knight': { hp: 1200, sp: 200, aspd: 175, stats: [30, 15, 25, 5, 15, 10], next: [] },
            'Blacksmith': { hp: 1000, sp: 180, aspd: 180, stats: [35, 10, 20, 5, 20, 20], next: [] }
        },
        magical: {
            'Mage': { hp: 180, sp: 350, aspd: 140, stats: [2, 10, 4, 25, 12, 2], next: ['Wizard'] },
            'Acolyte': { hp: 300, sp: 300, aspd: 145, stats: [5, 5, 12, 20, 10, 8], next: ['Priest'] },
            'Wizard': { hp: 500, sp: 1200, aspd: 145, stats: [5, 15, 10, 50, 25, 5], next: [] },
            'Priest': { hp: 800, sp: 1000, aspd: 150, stats: [10, 10, 25, 40, 20, 15], next: [] }
        },
        rogue: {
            'Thief': { hp: 220, sp: 120, aspd: 190, stats: [8, 22, 5, 5, 15, 10], next: ['Assassin'] },
            'Archer': { hp: 250, sp: 150, aspd: 165, stats: [4, 15, 6, 5, 25, 5], next: ['Hunter'] },
            'Assassin': { hp: 750, sp: 400, aspd: 195, stats: [25, 45, 15, 10, 20, 20], next: [] },
            'Hunter': { hp: 650, sp: 500, aspd: 185, stats: [15, 35, 12, 15, 50, 15], next: [] }
        },
        base: {
            'Novice': { hp: 100, sp: 30, aspd: 150, stats: [2, 2, 2, 2, 2, 2], next: ['Swordman', 'Mage', 'Thief', 'Archer', 'Merchant', 'Acolyte'] }
        }
    },

    // 3. FULL SKILL POOL (15-20 per group)
    skills: {
        melee: {
            'Bash': { sp: 10, mult: 2.5, tier: 1 }, 'Magnum Break': { sp: 30, mult: 3.2, tier: 1 },
            'Pierce': { sp: 12, mult: 2.8, tier: 1 }, 'Spear Stab': { sp: 18, mult: 2.5, tier: 1 },
            'Cart Revolution': { sp: 25, mult: 3.5, tier: 1 }, 'Provoke': { sp: 15, mult: 1.2, tier: 1 },
            'Bowling Bash': { sp: 45, mult: 6.0, tier: 2 }, 'Spear Boomerang': { sp: 25, mult: 4.5, tier: 2 },
            'Brandish Spear': { sp: 40, mult: 5.0, tier: 2 }, 'Mammonite': { sp: 5, mult: 5.5, tier: 2 },
            'Hammer Fall': { sp: 20, mult: 3.2, tier: 2 }, 'Power Thrust': { sp: 50, mult: 1.5, tier: 2 },
            'Weapon Perfection': { sp: 40, mult: 1.0, tier: 2 }, 'Adrenaline Rush': { sp: 60, mult: 1.0, tier: 2 },
            'Spiral Pierce': { sp: 50, mult: 7.0, tier: 2 }
        },
        magical: {
            'Fire Bolt': { sp: 15, mult: 3.5, tier: 1 }, 'Cold Bolt': { sp: 15, mult: 3.5, tier: 1 },
            'Lightning Bolt': { sp: 15, mult: 3.5, tier: 1 }, 'Soul Strike': { sp: 18, mult: 3.0, tier: 1 },
            'Heal': { sp: 20, mult: 0.5, tier: 1 }, 'Blessing': { sp: 60, mult: 1.2, tier: 1 },
            'Storm Gust': { sp: 65, mult: 6.5, tier: 2 }, 'Lord of Vermilion': { sp: 65, mult: 6.0, tier: 2 },
            'Meteor Storm': { sp: 70, mult: 7.0, tier: 2 }, 'Jupitel Thunder': { sp: 30, mult: 4.5, tier: 2 },
            'Magnus Exorcismus': { sp: 60, mult: 5.5, tier: 2 }, 'Sanctuary': { sp: 45, mult: 1.5, tier: 2 },
            'Turn Undead': { sp: 50, mult: 10.0, tier: 2 }, 'Safety Wall': { sp: 50, mult: 1.0, tier: 2 },
            'Frost Diver': { sp: 25, mult: 3.8, tier: 2 }
        },
        rogue: {
            'Envenom': { sp: 12, mult: 2.2, tier: 1 }, 'Double Strafe': { sp: 15, mult: 3.0, tier: 1 },
            'Arrow Shower': { sp: 20, mult: 2.5, tier: 1 }, 'Steal': { sp: 20, mult: 1.0, tier: 1 },
            'Improve Concentration': { sp: 45, mult: 1.2, tier: 1 }, 'Hide': { sp: 30, mult: 1.0, tier: 1 },
            'Sonic Blow': { sp: 45, mult: 5.5, tier: 2 }, 'Grimtooth': { sp: 35, mult: 4.5, tier: 2 },
            'Venom Splasher': { sp: 50, mult: 6.0, tier: 2 }, 'Falcon Assault': { sp: 55, mult: 5.8, tier: 2 },
            'Blast Mine': { sp: 30, mult: 4.2, tier: 2 }, 'Claymore Trap': { sp: 45, mult: 5.0, tier: 2 },
            'Venom Dust': { sp: 40, mult: 3.5, tier: 2 }, 'Beast Charge': { sp: 40, mult: 4.8, tier: 2 },
            'Back Stab': { sp: 30, mult: 5.0, tier: 2 }
        }
    },

    // 4. UTILITY HELPERS
    getLang() {
        return document.body.className.includes('lang-tc') ? 'tc' : 'en';
    },

    getName(type, id) {
        const lang = this.getLang();
        return this.T[lang][type][id] || id;
    },

    getJob(jobName) {
        for (const cat in this.jobs) {
            if (this.jobs[cat][jobName]) return this.jobs[cat][jobName];
        }
        return this.jobs.base['Novice'];
    }
};

console.log("DB_PILLAR: MULTI_LANG_EXPANDED_READY");
