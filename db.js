/* --- AEGIS_DATABASE_V1.02 (Full Edition with 75% Global Nerf) --- */
window.DB = {
    // 1. LOCALIZATION SYSTEM
    T: {
        en: {
            st: { // UI Strings
                save: "SAVE", reset: "RESET", rank: "RANK", warp: "WARP: MAP", init: "CREATE YOUR ACCOUNT",
                create: "CREATE_VESSEL", combat: "COMBAT_IN_PROGRESS", clear: "CLEAR!",
                lv: "Lv", flr: "FLR", novice: "Novice", start: "START ADVENTURE",
                easy: "EASY", normal: "NORMAL", hard: "HARD", stats: "Stats",
                job_office: "JOB_OFFICE", confirm_reset: "RESTART ADVENTURE?",
                speed: "SPEED_SET:", event_atk: "EVENT: Permanent ATK +1",
                event_matk: "EVENT: Permanent MATK +1", event_hp: "EVENT: Permanent MaxHP +10",
                equip: "EQUIP:", card_get: "CARD!! +", defeat: "DEFEATED! RETREAT TO TOWN.",
                loc: "LOC:", skill: "SKILL", crit: "CRITICAL HIT!", warp_to: "WARP TO: ",
                empty_inv: "EMPTY_INVENTORY", no_skills: "NO_SKILLS_LEARNED",
                fetching: "FETCHING_LEGENDS...", offline: "RANK_OFFLINE", synced: "LEGENDARY_DATA_SYNCED",
                retry: "RETRY", back: "BACK", legends: "🏆 TOP 10 LEGENDS",
                ended: "YOUR ADVENTURE ENDS HERE...", reached: "FLOOR REACHED:", mobile_ed: "ULTIMATE MOBILE EDITION",
                atk: "ATK", matk: "MATK", cri: "CRI", hit: "HIT", flee: "FLEE", def: "DEF",
                str: "STR", agi: "AGI", vit: "VIT", int: "INT", dex: "DEX", luk: "LUK",
                pts: "PTS:", pick_skill: "PICK A SKILL", level_up: "LEVEL UP!"
            },
            maps: {
                "Prontera Field": "Prontera Field", "Payon Cave": "Payon Cave", "Prontera Culvert": "Prontera Culvert",
                "Byalan Island": "Byalan Island", "Orc Dungeon": "Orc Dungeon", "Glast Heim": "Glast Heim",
                "Magma Dungeon": "Magma Dungeon", "Ice Dungeon": "Ice Dungeon", "Abyss Lake": "Abyss Lake", "Thanatos Tower": "Thanatos Tower"
            },
            mobs: {
                "Poring": "Poring", "Fabre": "Fabre", "Lunatic": "Lunatic", "Chonchon": "Chonchon", "Roda Frog": "Roda Frog",
                "Spore": "Spore", "Tarou": "Tarou", "Poison Spore": "Poison Spore", "Wormtail": "Wormtail", "Angeling [MVP]": "Angeling [MVP]",
                "Zombie": "Zombie", "Skeleton": "Skeleton", "Poporing": "Poporing", "Hydra": "Hydra", "Vadon": "Vadon",
                "Marina": "Marina", "Thief Bug": "Thief Bug", "Soldier Skeleton": "Soldier Skeleton", "Archer Skeleton": "Archer Skeleton", "Golden Thief Bug [MVP]": "Golden Thief Bug [MVP]"
            },
            jobs: {
                'Novice': 'Novice', 'Swordman': 'Swordman', 'Knight': 'Knight',
                'Merchant': 'Merchant', 'Blacksmith': 'Blacksmith', 'Mage': 'Mage',
                'Wizard': 'Wizard', 'Acolyte': 'Acolyte', 'Priest': 'Priest',
                'Thief': 'Thief', 'Assassin': 'Assassin', 'Archer': 'Archer', 'Hunter': 'Hunter'
            },
            skills: {
                'Bash': 'Bash', 'Magnum Break': 'Magnum Break', 'Pierce': 'Pierce', 'Spear Stab': 'Spear Stab',
                'Sword Mastery': 'Sword Mastery', 'Bowling Bash': 'Bowling Bash', 'Mammonite': 'Mammonite',
                'Spiral Pierce': 'Spiral Pierce', 'Two-Hand Quicken': 'Two-Hand Quicken', 'Weapon Perfection': 'Weapon Perfection',
                'Fire Bolt': 'Fire Bolt', 'Cold Bolt': 'Cold Bolt', 'Lightning Bolt': 'Lightning Bolt',
                'Increase SP Recovery': 'Increase SP Recovery', 'Heal': 'Heal', 'Storm Gust': 'Storm Gust',
                'Lord of Vermilion': 'Lord of Vermilion', 'Meteor Storm': 'Meteor Storm', 'Meditation': 'Meditation',
                'Turn Undead': 'Turn Undead', 'Envenom': 'Envenom', 'Double Strafe': 'Double Strafe',
                'Owl\'s Eye': 'Owl\'s Eye', 'Vulture\'s Eye': 'Vulture\'s Eye', 'Improve Concentration': 'Improve Concentration',
                'Sonic Blow': 'Sonic Blow', 'Falcon Assault': 'Falcon Assault', 'Venom Splasher': 'Venom Splasher',
                'Back Stab': 'Back Stab', 'Slasher': 'Slasher',
                'Increase HP Recovery': 'Increase HP Recovery', 'Two-Hand Mastery': 'Two-Hand Mastery',
                'First Aid': 'First Aid', 'Basic Skill': 'Basic Skill'
            }
        },
        tc: { // Traditional Chinese
            st: { // UI Strings
                save: "存檔", reset: "重置", rank: "排名", warp: "傳送: 地圖", init: "建立角色帳號",
                create: "創建冒險者", combat: "戰鬥中...", clear: "清除!",
                lv: "Lv", flr: "FLR", novice: "初心者", start: "開始冒險",
                easy: "簡單", normal: "普通", hard: "困難", stats: "數值",
                job_office: "轉職中心", confirm_reset: "重新開始冒險？",
                speed: "倍速設定:", event_atk: "事件: 永久 ATK +1",
                event_matk: "事件: 永久 MATK +1", event_hp: "事件: 永久 MaxHP +10",
                equip: "裝備:", card_get: "獲得卡片!! +", defeat: "被擊敗了！撤回城鎮。",
                loc: "區域:", skill: "技能", crit: "爆擊!!", warp_to: "傳送至: ",
                empty_inv: "物品欄空空如也", no_skills: "尚未學會技能",
                fetching: "正在獲取傳奇榜...", offline: "排行榜離線", synced: "傳奇數據已同步",
                retry: "重試", back: "返回", legends: "🏆 前10名傳奇",
                ended: "你的冒險結束了...", reached: "到達樓層:", mobile_ed: "究極行動版",
                atk: "攻擊", matk: "魔攻", cri: "爆擊", hit: "命中", flee: "迴避", def: "防禦",
                str: "力量", agi: "敏捷", vit: "體質", int: "智力", dex: "靈巧", luk: "幸運",
                pts: "剩餘點數:", pick_skill: "請選擇一項技能", level_up: "等級提升!"
            },
            maps: {
                "Prontera Field": "普隆德拉 原野", "Payon Cave": "斐揚 洞窟", "Prontera Culvert": "普隆德拉 地下水道",
                "Byalan Island": "柏伊亞嵐島 (海洞)", "Orc Dungeon": "獸人地下洞窟", "Glast Heim": "克雷斯特漢姆古城",
                "Magma Dungeon": "諾可羅德 (火洞)", "Ice Dungeon": "冰洞穴", "Abyss Lake": "深淵湖水", "Thanatos Tower": "達納托斯之塔"
            },
            mobs: {
                "Poring": "波利", "Fabre": "法貝", "Lunatic": "瘋兔", "Chonchon": "蒼蠅", "Roda Frog": "羅達蛙",
                "Spore": "孢子", "Tarou": "塔若", "Poison Spore": "毒孢子", "Wormtail": "蚯蚓", "Angeling [MVP]": "天使波利 [MVP]",
                "Zombie": "殭屍", "Skeleton": "邪骸戰士", "Poporing": "波波利", "Hydra": "海葵", "Vadon": "瓦頓",
                "Marina": "瑪麗娜", "Thief Bug": "盜蟲", "Soldier Skeleton": "邪骸士兵", "Archer Skeleton": "邪骸弓箭手", "Golden Thief Bug [MVP]": "黃金盜蟲 [MVP]"
            },
            jobs: {
                'Novice': '初心者', 'Swordman': '劍士', 'Knight': '騎士',
                'Merchant': '商人', 'Blacksmith': '鐵匠', 'Mage': '魔法師',
                'Wizard': '巫師', 'Acolyte': '服事', 'Priest': '祭司',
                'Thief': '盜賊', 'Assassin': '刺客', 'Archer': '弓箭手', 'Hunter': '獵人'
            },
            skills: {
                'Bash': '狂擊', 'Magnum Break': '怒爆', 'Pierce': '連刺攻擊', 'Spear Stab': '投擲長矛',
                'Sword Mastery': '單手劍修練', 'Bowling Bash': '怪物互擊', 'Mammonite': '金錢攻擊',
                'Spiral Pierce': '螺旋擊刺', 'Two-Hand Quicken': '雙手劍加速', 'Weapon Perfection': '武器值最大化',
                'Fire Bolt': '火箭術', 'Cold Bolt': '冰箭術', 'Lightning Bolt': '雷擊術',
                'Increase SP Recovery': '禪心', 'Heal': '治癒術', 'Storm Gust': '暴風雪',
                'Lord of Vermilion': '怒雷強擊', 'Meteor Storm': '隕石術', 'Meditation': '冥想',
                'Turn Undead': '轉生術', 'Envenom': '施毒', 'Double Strafe': '二連矢',
                'Owl\'s Eye': '梟之眼', 'Vulture\'s Eye': '鵂鶹之眼', 'Improve Concentration': '集中力向上',
                'Sonic Blow': '音速投擲', 'Falcon Assault': '獵鷹突擊', 'Venom Splasher': '毒性感染',
                'Back Stab': '背刺', 'Slasher': '斬擊', 'Increase HP Recovery': '生命力回復', 'Two-Hand Mastery': '雙手劍修練',
                'First Aid': '急救', 'Basic Skill': '基本技能'
            }
        }
    },

    // 2. HELPER FUNCTIONS
    getLang() {
        return document.body.classList.contains('lang-tc') ? 'tc' : 'en';
    },

    txt(key, type = 'st') {
        const lang = this.getLang();
        return this.T[lang][type][key] || key;
    },

    getName(type, id) {
        const lang = this.getLang();
        return this.T[lang][type][id] || id;
    },

    getLocation(floor) {
        const maps = [
            "Prontera Field", "Payon Cave", "Prontera Culvert", "Byalan Island",
            "Orc Dungeon", "Glast Heim", "Magma Dungeon", "Ice Dungeon",
            "Abyss Lake", "Thanatos Tower"
        ];
        const index = Math.min(Math.floor((floor - 1) / 10), maps.length - 1);
        return this.getName('maps', maps[index]);
    },

    // 3. TIERED JOB SYSTEM
    getJob(id) {
        for (let c in this.jobs) {
            if (this.jobs[c][id]) return { ...this.jobs[c][id], type: this.jobs[c].type };
        }
        return this.jobs.base['Novice'];
    },

    jobs: {
        melee: {
            type: 'melee',
            'Swordman': { hp: 400, aspd: 170, stats: [12, 5, 10, 2, 8, 2], next: ['Knight'] },
            'Merchant': { hp: 350, aspd: 155, stats: [15, 8, 12, 2, 10, 15], next: ['Blacksmith'] },
            'Knight': { hp: 1200, aspd: 175, stats: [30, 15, 25, 5, 15, 10], next: [] },
            'Blacksmith': { hp: 1000, aspd: 180, stats: [35, 10, 20, 5, 20, 20], next: [] }
        },
        magical: {
            type: 'magical',
            'Mage': { hp: 180, aspd: 140, stats: [2, 10, 4, 25, 12, 2], next: ['Wizard'] },
            'Acolyte': { hp: 300, aspd: 145, stats: [5, 5, 12, 20, 10, 8], next: ['Priest'] },
            'Wizard': { hp: 500, aspd: 145, stats: [5, 15, 10, 50, 25, 5], next: [] },
            'Priest': { hp: 800, aspd: 150, stats: [10, 10, 25, 40, 20, 15], next: [] }
        },
        rogue: {
            type: 'rogue',
            'Thief': { hp: 220, aspd: 190, stats: [8, 22, 5, 5, 15, 10], next: ['Assassin'] },
            'Archer': { hp: 250, aspd: 165, stats: [4, 15, 6, 5, 25, 5], next: ['Hunter'] },
            'Assassin': { hp: 750, aspd: 195, stats: [25, 45, 15, 10, 20, 20], next: [] },
            'Hunter': { hp: 650, aspd: 185, stats: [15, 35, 12, 15, 50, 15], next: [] }
        },
        base: {
            'Novice': { hp: 100, aspd: 150, stats: [2, 2, 2, 2, 2, 2], next: ['Swordman', 'Mage', 'Thief', 'Archer', 'Merchant', 'Acolyte'] }
        }
    },

    // 4. SKILL DATABASE
    skills: {
        melee: {
            'Bash': { mode: 'act', mult: 2.8, hits: 1, tier: 1 },
            'Magnum Break': { mode: 'act', mult: 3.5, hits: 1, tier: 1, element: 'fire' },
            'Pierce': { mode: 'act', mult: 1.2, hits: 1, tier: 1, bonus: { target: 'MVP', hits: 3 } },
            'Spear Stab': { mode: 'act', mult: 2.5, hits: 1, tier: 1 },
            'Sword Mastery': { mode: 'pas', stats: { str: 5 }, tier: 1 },
            'Bowling Bash': { mode: 'act', mult: 3.2, hits: 2, tier: 2 },
            'Mammonite': { mode: 'act', mult: 6.5, hits: 1, tier: 2 },
            'Spiral Pierce': { mode: 'act', mult: 1.5, hits: 5, tier: 2 },
            'Two-Hand Quicken': { mode: 'pas', stats: { agi: 10 }, tier: 2 },
            'Weapon Perfection': { mode: 'pas', stats: { str: 10, dex: 5 }, tier: 2 }
        },
        magical: {
            'Fire Bolt': { mode: 'act', mult: 1.2, hits: 5, tier: 1, element: 'fire' },
            'Cold Bolt': { mode: 'act', mult: 1.2, hits: 5, tier: 1, element: 'cold' },
            'Lightning Bolt': { mode: 'act', mult: 1.2, hits: 5, tier: 1, element: 'wind' },
            'Increase SP Recovery': { mode: 'pas', stats: { int: 5 }, tier: 1 },
            'Heal': { mode: 'act', mult: 5.0, hits: 1, tier: 1, effect: 'heal' },
            'Storm Gust': { mode: 'act', mult: 1.5, hits: 4, tier: 2, element: 'cold' },
            'Lord of Vermilion': { mode: 'act', mult: 1.5, hits: 4, tier: 2, element: 'wind' },
            'Meteor Storm': { mode: 'act', mult: 1.8, hits: 4, tier: 2, element: 'fire' },
            'Meditation': { mode: 'pas', stats: { int: 10, vit: 5 }, tier: 2 },
            'Turn Undead': { mode: 'act', mult: 15.0, hits: 1, tier: 2 }
        },
        rogue: {
            'Envenom': { mode: 'act', mult: 2.2, hits: 1, tier: 1, element: 'poison' },
            'Double Strafe': { mode: 'act', mult: 1.8, hits: 2, tier: 1 },
            'Owl\'s Eye': { mode: 'pas', stats: { dex: 5 }, tier: 1 },
            'Vulture\'s Eye': { mode: 'pas', stats: { dex: 5 }, tier: 1 },
            'Improve Concentration': { mode: 'pas', stats: { agi: 5, dex: 5 }, tier: 1 },
            'Sonic Blow': { mode: 'act', mult: 0.8, hits: 8, tier: 2 },
            'Falcon Assault': { mode: 'act', mult: 5.8, hits: 1, tier: 2 },
            'Venom Splasher': { mode: 'act', mult: 6.0, hits: 1, tier: 2, element: 'poison' },
            'Back Stab': { mode: 'act', mult: 5.5, hits: 1, tier: 2 },
            'Slasher': { mode: 'pas', stats: { agi: 15 }, tier: 2 }
        },
        novice: {
            'First Aid': { mode: 'act', mult: 1.0, hits: 1, tier: 0, effect: 'heal' },
            'Basic Skill': { mode: 'pas', stats: { str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 }, tier: 0 }
        }
    },

    // 5. MONSTER ROSTER (Nerfed Logic Applied)
    mobs: {
        names: [
            "Poring", "Fabre", "Lunatic", "Chonchon", "Roda Frog",
            "Spore", "Tarou", "Poison Spore", "Wormtail", "Angeling [MVP]",
            "Zombie", "Skeleton", "Poporing", "Hydra", "Vadon",
            "Marina", "Thief Bug", "Soldier Skeleton", "Archer Skeleton", "Golden Thief Bug [MVP]"
        ],
        cards: {
            "Poring": "Poring Card", "Fabre": "Fabre Card", "Lunatic": "Lunatic Card", "Chonchon": "Chonchon Card", "Roda Frog": "Roda Frog Card",
            "Spore": "Spore Card", "Tarou": "Tarou Card", "Poison Spore": "Poison Spore Card", "Wormtail": "Wormtail Card", "Angeling [MVP]": "Angeling Card",
            "Zombie": "Zombie Card", "Skeleton": "Skeleton Card", "Poporing": "Poporing Card", "Hydra": "Hydra Card", "Vadon": "Vadon Card",
            "Marina": "Marina Card", "Thief Bug": "Thief Bug Card", "Soldier Skeleton": "Soldier Skeleton Card", "Archer Skeleton": "Archer Skeleton Card", "Golden Thief Bug [MVP]": "GTB Card"
        },
        scaling: (floor) => {
            const isBoss = (floor % 10 === 0);
            const multi = isBoss ? 5 : 1;
            const NERF = 0.75;
            const mName = window.DB.mobs.names[Math.min(floor - 1, 19)] || `Void Spectre #${floor}`;

            return {
                n: mName,
                hp: Math.floor(((50 + (floor * 40)) * multi) * NERF),
                atk: Math.floor(((10 + (floor * 10)) * multi) * NERF),
                def: Math.floor((floor * 1.5) * NERF),
                zeny: floor * 20,
                card: window.DB.mobs.cards[mName] || null
            };
        }
    },

    getJob(jobName) {
        for (const cat in this.jobs) {
            if (this.jobs[cat][jobName]) return this.jobs[cat][jobName];
        }
        return this.jobs.base['Novice'];
    }
};

console.log("DB_PILLAR: FULL_DB_LOADED_V1.01");
