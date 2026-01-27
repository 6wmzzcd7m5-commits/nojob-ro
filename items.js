/* --- AEGIS_SECURITY_LOOT_V4.5 (Internationalized & Expanded) --- */
window.DB_ITEMS = {
    // 1. SECURITY CORE
    SALT: "RO_AEGIS_ULTIMATE_2026", 

    // 2. TRANSLATION DICTIONARY
    T: {
        en: {
            items: {
                'Red Potion': 'Red Potion', 'Orange Potion': 'Orange Potion', 
                'White Potion': 'White Potion', 'Blue Potion': 'Blue Potion', 
                'Yggdrasil Berry': 'Yggdrasil Berry', 'Awakening Potion': 'Awakening Potion',
                'Katana': 'Katana', 'Broadsword': 'Broadsword', 'Claymore': 'Claymore',
                'Rod': 'Rod', 'Wizardry Staff': 'Wizardry Staff', 'Hunter Bow': 'Hunter Bow',
                'Adventurer Suit': 'Adventurer Suit', 'Chain Mail': 'Chain Mail', 'Full Plate': 'Full Plate',
                'Poring Card': 'Poring Card', 'Raydric Card': 'Raydric Card', 'Khalitzburg Card': 'Khalitzburg Card',
                'Andre Card': 'Andre Card', 'Whisper Card': 'Whisper Card', 'Zerom Card': 'Zerom Card', 'GTB Card': 'GTB Card'
            },
            desc: {
                'Red Potion': 'Restores 100 HP', 'Orange Potion': 'Restores 300 HP',
                'White Potion': 'Restores 1000 HP', 'Blue Potion': 'Restores 150 SP',
                'Yggdrasil Berry': 'Full HP/SP Restoration', 'Awakening Potion': 'ASPD +15%',
                'Katana': 'ATK +25', 'Broadsword': 'ATK +50', 'Claymore': 'ATK +110',
                'Rod': 'MATK +25', 'Wizardry Staff': 'MATK +105', 'Hunter Bow': 'ATK +95',
                'Adventurer Suit': 'DEF +10', 'Chain Mail': 'DEF +25', 'Full Plate': 'DEF +55',
                'Poring Card': 'LUK +10', 'Raydric Card': 'VIT +15', 'Khalitzburg Card': 'DEX +12',
                'Andre Card': 'STR +20', 'Whisper Card': 'Flee Rate +20', 'Zerom Card': 'DEX +20', 'GTB Card': 'INT +50 (Magic Immunity)'
            }
        },
        tc: { // Traditional Chinese
            items: {
                'Red Potion': '紅色藥水', 'Orange Potion': '橙色藥水', 
                'White Potion': '白色藥水', 'Blue Potion': '藍色藥水', 
                'Yggdrasil Berry': '天地樹果實', 'Awakening Potion': '覺醒藥水',
                'Katana': '武士刀', 'Broadsword': '闊劍', 'Claymore': '雙手巨劍',
                'Rod': '手杖', 'Wizardry Staff': '巫師之杖', 'Hunter Bow': '獵弓',
                'Adventurer Suit': '冒險衣', 'Chain Mail': '鎖子甲', 'Full Plate': '全身鎧甲',
                'Poring Card': '波利卡片', 'Raydric Card': '幽靈劍士卡片', 'Khalitzburg Card': '卡利斯格卡片',
                'Andre Card': '蟻兵卡片', 'Whisper Card': '幽靈卡片', 'Zerom Card': '傑洛米卡片', 'GTB Card': '黃金盜蟲卡片'
            },
            desc: {
                'Red Potion': '恢復 100 HP', 'Orange Potion': '恢復 300 HP',
                'White Potion': '恢復 1000 HP', 'Blue Potion': '恢復 150 SP',
                'Yggdrasil Berry': '完全恢復 HP/SP', 'Awakening Potion': '攻擊速度 +15%',
                'Katana': '攻擊力 +25', 'Broadsword': '攻擊力 +50', 'Claymore': '攻擊力 +110',
                'Rod': '魔法攻擊力 +25', 'Wizardry Staff': '魔法攻擊力 +105', 'Hunter Bow': '攻擊力 +95',
                'Adventurer Suit': '防禦力 +10', 'Chain Mail': '防禦力 +25', 'Full Plate': '防禦力 +55',
                'Poring Card': '幸運 +10', 'Raydric Card': '體質 +15', 'Khalitzburg Card': '靈巧 +12',
                'Andre Card': '力量 +20', 'Whisper Card': '閃避率 +20', 'Zerom Card': '靈巧 +20', 'GTB Card': '智力 +50 (魔法免疫)'
            }
        }
    },

    // 3. EXPANDED LOOT POOL
    pool: [
        { n: 'Red Potion', type: 'heal', val: 100, rate: 0.03 },
        { n: 'Orange Potion', type: 'heal', val: 300, rate: 0.03 },
        { n: 'White Potion', type: 'heal', val: 1000, rate: 0.03 },
        { n: 'Blue Potion', type: 'sp_heal', val: 150, rate: 0.03 },
        { n: 'Yggdrasil Berry', type: 'full', val: 1.0, rate: 0.03 },
        { n: 'Awakening Potion', type: 'buff', stat: 'aspd', val: 15, rate: 0.03 },
        { n: 'Katana', type: 'weapon', stat: 'atk', val: 25, rate: 0.03 },
        { n: 'Broadsword', type: 'weapon', stat: 'atk', val: 50, rate: 0.03 },
        { n: 'Claymore', type: 'weapon', stat: 'atk', val: 110, rate: 0.03 },
        { n: 'Rod', type: 'weapon', stat: 'matk', val: 25, rate: 0.03 },
        { n: 'Wizardry Staff', type: 'weapon', stat: 'matk', val: 105, rate: 0.03 },
        { n: 'Hunter Bow', type: 'weapon', stat: 'atk', val: 95, rate: 0.03 },
        { n: 'Adventurer Suit', type: 'armor', stat: 'def', val: 10, rate: 0.03 },
        { n: 'Chain Mail', type: 'armor', stat: 'def', val: 25, rate: 0.03 },
        { n: 'Full Plate', type: 'armor', stat: 'def', val: 55, rate: 0.03 },
        { n: 'Poring Card', type: 'card', stat: 'luk', val: 10, rate: 0.015 },
        { n: 'Raydric Card', type: 'card', stat: 'vit', val: 15, rate: 0.015 },
        { n: 'Khalitzburg Card', type: 'card', stat: 'dex', val: 12, rate: 0.015 },
        { n: 'Andre Card', type: 'card', stat: 'str', val: 20, rate: 0.015 },
        { n: 'Whisper Card', type: 'card', stat: 'agi', val: 20, rate: 0.015 },
        { n: 'Zerom Card', type: 'card', stat: 'dex', val: 20, rate: 0.015 },
        { n: 'GTB Card', type: 'card', stat: 'int', val: 50, rate: 0.015 }
    ],

    // 4. LOCALIZATION HELPERS
    getLang() { return document.body.className.includes('lang-tc') ? 'tc' : 'en'; },
    getName(id) { return this.T[this.getLang()].items[id] || id; },
    getDesc(id) { return this.T[this.getLang()].desc[id] || ""; },

    // 5. REWARD DRAFT ENGINE
    generateDraft: () => {
        const draft = [];
        const pool = window.DB_ITEMS.pool;
        for(let i = 0; i < 3; i++) {
            const item = pool[Math.floor(Math.random() * pool.length)];
            draft.push({...item});
        }
        return draft;
    }
};

/**
 * SECURE STATE SIGNATURE
 */
window.getSecureHash = (player) => {
    const dataString = player.n + player.job + player.floor + window.DB_ITEMS.SALT; 
    let hash = 5381;
    for (let i = 0; i < dataString.length; i++) {
        hash = ((hash << 5) + hash) + dataString.charCodeAt(i);
    }
    return (hash >>> 0).toString(16); 
};

console.log("SECURITY_PILLAR: INTERNATIONAL_LOOT_LOADED_V4.5");
