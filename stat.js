/* --- AEGIS_STAT_CONSTRUCTION_V1.0 --- */
window.STATS = {
    // Generate 1-3 random points per level
    genPoints: () => Math.floor(Math.random() * 3) + 1,

    // Base Allocation Logic
    allocate: (p, stat) => {
        if (p.pts <= 0) return false;
        p[stat]++;
        p.pts--;
        return true;
    },

    // Refresh Sub-stats (Derived from Base Stats)
    // Note: Most logic is in UI.render, but we can centralize specific HP/SP bonuses here if needed.
    refreshVitals: (p) => {
        // RO Style: 10 HP per Point of VIT
        const baseHp = p.job === 'Novice' ? 100 : 200;
        p.mh = baseHp + (p.vit * 10) + (p.lvl * 5);
    }
};
