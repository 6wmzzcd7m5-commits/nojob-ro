/* --- AEGIS_UI_ENGINE_V1.02 (Refactored) --- */
window.UI = {
    // 1. SCENE RENDERER
    // Updates the control panel (#ctl) using external window.SCENES
    loadScene(name, p, s) {
        if (!window.SCENES[name]) return console.error("Scene not found:", name);
        el('ctl').innerHTML = window.SCENES[name](p, s);
        this.currentScene = name;
    },

    // 2. RENDER CORE
    // Updates the persistent HUD and character stats
    render(p, s) {
        if (!p) return;

        // Persistent HUD Elements
        el('ui-name').innerText = p.n; // Permanent Player Name Field
        el('btn-save').innerText = DB.txt('save');
        el('ui-job').innerText = DB.getName('jobs', p.job);
        el('btn-speed').innerText = s.spd + "x";
        el('ui-lvl').innerText = p.lvl;
        el('ui-floor').innerText = s.f;
        el('ui-loc').innerText = DB.getLocation(s.f);

        // Calculate Passive Bonuses
        const pas = { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 };
        if (p.skills) {
            p.skills.forEach(sn => {
                let sd = null;
                for (let c in DB.skills) if (DB.skills[c][sn]) sd = DB.skills[c][sn];
                if (sd && sd.mode === 'pas' && sd.stats) {
                    for (let k in sd.stats) if (pas[k] !== undefined) pas[k] += sd.stats[k];
                }
            });
        }

        // Primary Attributes (Visual only, baseline stats)
        ['str', 'agi', 'vit', 'int', 'dex', 'luk'].forEach(k => el('ui-' + k).innerText = p[k] + (pas[k] ? `+${pas[k]}` : ''));

        // Derived Combat Stats (RO Story Formulas)
        let wBonus = (p.wpn && p.wpn.stat === 'atk') ? p.wpn.val : 0;
        let mBonus = (p.wpn && p.wpn.stat === 'matk') ? p.wpn.val : 0;
        let aBonus = (p.arm && p.arm.stat === 'def') ? p.arm.val : 0;

        const str = p.str + pas.str;
        const agi = p.agi + pas.agi;
        const vit = p.vit + pas.vit;
        const int = p.int + pas.int;
        const dex = p.dex + pas.dex;
        const luk = p.luk + pas.luk;

        const atk = str + Math.floor(dex / 5) + Math.floor(luk / 3) + (p.lvl * 2) + wBonus;
        const matk = int + Math.floor(int / 2) + Math.floor(dex / 5) + (p.lvl * 2) + mBonus;

        el('ui-atk').innerText = atk;
        el('ui-matk').innerText = matk;
        el('ui-cri').innerText = (1 + luk * 0.3).toFixed(1);
        el('ui-hit').innerText = dex + p.lvl;
        el('ui-flee').innerText = agi + p.lvl;
        el('ui-def').innerText = Math.floor((vit / 2) + (p.lvl / 2)) + aBonus;

        // Vitals & Gender-Aware Sprite Binding
        el('hp-fill').style.width = (p.hp / p.mh * 100) + "%";
        el('hp-text').innerText = `${Math.floor(p.hp)}/${p.mh}`;

        // Dynamically apply job-specific and gender-specific classes
        el('p-spr').className = `spr j-${p.job} ${p.gender === 'f' ? 'ro-f' : 'ro-m'}`;

        // Inventory HUD (Equips + Stacked Items)
        let invHtml = '';
        if (p.wpn) invHtml += `<div class="stat-cell" style="border-color:var(--zeny); color:var(--zeny);">[E] ${DB_ITEMS.getName(p.wpn.n)}</div>`;
        if (p.arm) invHtml += `<div class="stat-cell" style="border-color:var(--zeny); color:var(--zeny);">[E] ${DB_ITEMS.getName(p.arm.n)}</div>`;

        invHtml += Object.entries(p.items || {}).map(([n, count]) => `
            <div class="stat-cell" style="border-color:var(--neon);">
                ${DB_ITEMS.getName(n)} x${count}
            </div>`).join('');

        el('inv-hud').innerHTML = invHtml || `<div style="color:#444; width:100%; text-align:center;">${DB.txt('empty_inv')}</div>`;

        // Skill HUD
        let sklHtml = (p.skills || []).map(sn => {
            let sd = null;
            for (let c in DB.skills) if (DB.skills[c][sn]) sd = DB.skills[c][sn];
            const isPas = sd && sd.mode === 'pas';
            return `<div class="stat-cell" style="border-color:var(--sp); color:var(--sp); font-size:8px;">${isPas ? '[P]' : '[A]'} ${DB.getName('skills', sn)}</div>`;
        }).join('');
        el('skill-hud').innerHTML = sklHtml || `<div style="color:#444; width:100%; text-align:center;">${DB.txt('no_skills')}</div>`;
    },

    // Damage Popup Engine
    pop(amt, id, col = '') {
        const d = document.createElement('div'); d.className = 'dmg-pop ' + col; d.innerText = amt;
        el(id).appendChild(d); setTimeout(() => d.remove(), 800);
    },

    // Terminal Logger
    log(m, c) {
        el('log').insertAdjacentHTML('afterbegin', `
            <div class="entry ${c}">
                > ${m}
            </div>`);
        // Keep only top 3 entries
        while (el('log').children.length > 3) {
            el('log').lastElementChild.remove();
        }
    }
};

console.log("AEGIS_UI: FULL_SYSTEM_READY_V1.02");
