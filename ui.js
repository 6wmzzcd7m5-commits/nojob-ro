/* --- AEGIS_UI_ENGINE_V1.02 (Refactored) --- */
window.UI = {
    // 0. LOCTION HUD
    updLoc(f) {
        el('ui-floor').innerText = f;
        el('ui-loc').innerText = DB.getLocation(f);
    },

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
        el('btn-reset').innerText = DB.txt('reset');
        el('btn-rank').innerText = DB.txt('rank');
        el('lbl-lv').innerText = DB.txt('lv');
        el('lbl-flr').innerText = DB.txt('flr');
        el('ui-job').innerText = DB.getName('jobs', p.job);
        el('btn-speed').innerText = s.spd + "x";
        el('ui-lvl').innerText = p.lvl;
        this.updLoc(s.f);

        // Localize Stat Labels
        ['atk', 'matk', 'cri', 'hit', 'flee', 'def', 'str', 'agi', 'vit', 'int', 'dex', 'luk'].forEach(k => {
            const labelEl = el('lbl-' + k);
            if (labelEl) labelEl.innerText = DB.txt(k);
        });

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
        ['str', 'agi', 'vit', 'int', 'dex', 'luk'].forEach(k => {
            const elId = 'ui-' + k;
            if (el(elId)) el(elId).innerText = p[k] + (pas[k] ? `+${pas[k]}` : '');
        });

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

        if (el('ui-atk')) el('ui-atk').innerText = atk;
        if (el('ui-matk')) el('ui-matk').innerText = matk;
        if (el('ui-cri')) el('ui-cri').innerText = (1 + luk * 0.3).toFixed(1);
        if (el('ui-hit')) el('ui-hit').innerText = dex + p.lvl;
        if (el('ui-flee')) el('ui-flee').innerText = agi + p.lvl;
        if (el('ui-def')) el('ui-def').innerText = Math.floor((vit / 2) + (p.lvl / 2)) + aBonus;

        // Vitals & Gender-Aware Sprite Binding
        if (el('hp-fill')) el('hp-fill').style.width = (p.hp / p.mh * 100) + "%";
        if (el('hp-text')) el('hp-text').innerText = `${Math.floor(p.hp)}/${p.mh}`;

        // Dynamically apply job-specific and gender-specific classes
        const pSpr = el('p-spr');
        if (pSpr) pSpr.className = `spr j-${p.job} ${p.gender === 'f' ? 'ro-f' : 'ro-m'}`;

        // Inventory HUD (Equips + Stacked Items)
        let invHtml = '';
        if (p.wpn) invHtml += `<div class="stat-cell equip-cell" style="border-color:var(--zeny); color:var(--zeny);"><span>[E]</span><b>${DB_ITEMS.getName(p.wpn.n)}</b></div>`;
        if (p.arm) invHtml += `<div class="stat-cell equip-cell" style="border-color:var(--zeny); color:var(--zeny);"><span>[E]</span><b>${DB_ITEMS.getName(p.arm.n)}</b></div>`;

        invHtml += Object.entries(p.items || {}).map(([n, count]) => `
            <div class="stat-cell item-cell">
                <span>${DB_ITEMS.getName(n)}</span>
                <b>x${count}</b>
            </div>`).join('');

        const invHud = el('inv-hud');
        if (invHud) invHud.innerHTML = invHtml || `<div style="color:#444; width:100%; text-align:center;">${DB.txt('empty_inv')}</div>`;

        // Skill HUD
        let sklHtml = (p.skills || []).map(sn => {
            let sd = null;
            for (let c in DB.skills) if (DB.skills[c][sn]) sd = DB.skills[c][sn];
            const isPas = sd && sd.mode === 'pas';
            return `<div class="stat-cell skill-cell" style="border-color:var(--sp); color:var(--sp);">
                <span>${isPas ? '[PASSIVE]' : '[ACTIVE]'}</span>
                <b>${DB.getName('skills', sn)}</b>
            </div>`;
        }).join('');
        const skillHud = el('skill-hud');
        if (skillHud) skillHud.innerHTML = sklHtml || `<div style="color:#444; width:100%; text-align:center;">${DB.txt('no_skills')}</div>`;
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
