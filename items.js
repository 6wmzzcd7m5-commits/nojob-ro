/* --- AEGIS_SECURITY_LOOT_V3.0 --- */
window.DB_ITEMS = {
    // 1. SECURITY CORE (Section 4.A)
    // Server-side SALT used for recalculating DJB2 Hash in GitHub Actions
    SALT: "RO_AEGIS_ULTIMATE_2026", [cite: 31]

    // 2. CONSUMABLES & CARDS (Section 2.A)
    // Permanent stat boosts and utility items
    pool: [
        { n: 'Red Potion', type: 'heal', val: 100, desc: 'Restores 100 HP' },
        { n: 'Orange Potion', type: 'heal', val: 300, desc: 'Restores 300 HP' },
        { n: 'Yggdrasil Berry', type: 'full', val: 1.0, desc: 'Full HP/SP Restoration' },
        { n: 'Poring Card', type: 'card', stat: 'luk', val: 10, desc: 'LUK +10' },
        { n: 'Raydric Card', type: 'card', stat: 'vit', val: 15, desc: 'VIT +15' },
        { n: 'Khalitzburg Card', type: 'card', stat: 'dex', val: 12, desc: 'DEX +12' }
    ],

    // 3. REWARD DRAFT ENGINE
    // Generates 3 random upgrades for the floor clear scene
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
 * SECURE STATE SIGNATURE (Section 4.A)
 * Generates the hash required for GitHub IssueOps ranking submissions.
 */
window.getSecureHash = (player) => {
    const dataString = player.n + player.job + player.floor + window.DB_ITEMS.SALT; [cite: 31]
    let hash = 5381;
    for (let i = 0; i < dataString.length; i++) {
        hash = ((hash << 5) + hash) + dataString.charCodeAt(i);
    }
    return (hash >>> 0).toString(16); // Returns hex string
};

console.log("SECURITY_PILLAR: LOOT_CORE_LOADED");
