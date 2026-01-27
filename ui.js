/* --- AEGIS_UI_ENGINE_V5.0 (Full Feature Edition) --- */
window.UI = {
    // 1. SCENE TEMPLATES
    // These functions generate the HTML for the control panel (#ctl)
    scenes: {
        // Registration Scene with Name, Gender, Difficulty, and Start Button
        reg: (p, s) => `
            <div class="panel grid g-1" style="border-color:var(--neon);">
                <input id="pname" placeholder="${DB.txt('init')}" class="panel" style="background:#000; color:var(--neon); border-color:var(--neon); width:100%;">
                
                <button onclick="G.initChar()" style="width:100%; margin: 5px 0; border-color:var(--neon); background:#000; color:var(--neon); font-weight:bold;">
                    START ADVENTURE
                </button>

                <div class="flex" style="padding: 2px 0;">
                    <button id="g-m" class="btn-sm active" onclick="G.setG('m')" style="flex:1;">_m</button>
                    <button id="g-f" class="btn-sm" onclick="G.setG('f')" style="flex:1; margin-left:5px;">_f</button>
                </div>

                <select id="pdiff" class="panel" style="width:100%; background:#000; color:var(--neon); border-color:var(--neon); font-size:9px; height:25px;">
                    <option value="0.8">EASY (0.8x Stats)</option>
                    <option value="1.0" selected>NORMAL (1.0x Stats)</option>
                    <option value="1.5">HARD (1.5x Stats)</option>
                </select>
            </div>`,
        
        // Main Menu / Dungeon Warp
        mnu: (p, s) => `<button onclick="G.startBattle()" class="panel" style="width:100%; padding:20px; border-color:var(--neon);">${DB.txt('warp')} ${s.f}</button>`,
        
        // Active Combat Status
        btl: () => `<div class="panel" style="text-align:center; color:var(--hp); border:1px dotted var(--neon); background:#000;">${DB.txt('combat')}</div>`,
        
        // Job Selection Office
        job: (p) => {
            const jobs = DB.getJob(p.job).next;
            const btns = jobs.map(j => `<button onclick="G.changeJob('${j}')" class="panel" style="border-color:var(--neon);">${DB.getName('jobs', j)}</button>`).join('');
            return `<div class="panel grid g-1" style="border-color:var(--neon);"><div style="text-align:center; margin-bottom:5px;">JOB_OFFICE</div>${btns}</div>`;
        }
    },

    // 2. RENDER CORE
    // Updates the persistent HUD and character stats
    render(p, s) {
        if(!p) return;

        // Persistent HUD Elements
        el('ui-name').innerText = p.n; // Permanent Player Name Field
        el('btn-save').innerText = DB.txt('save');
        el('btn-rank').innerText = DB.txt('rank');
        el('ui-job').innerText = DB.getName('jobs', p.job);
        el('btn-speed').innerText = s.spd + "x";
        el('ui-lvl').innerText = p.lvl;
        el('ui-floor').innerText = s.f;

        // Primary Attributes
        ['str','agi','vit','int','dex','luk'].forEach(k => el('ui-'+k).innerText = p[k]);

        // Derived Combat Stats (RO Story Formulas)
        const atk = p.str + Math.floor(p.dex/5) + Math.floor(p.luk/3) + (p.lvl * 2);
        const matk = p.int + Math.floor(p.int/2) + Math.floor(p.dex/5) + (p.lvl * 2);
        
        el('ui-atk').innerText = atk;
        el('ui-matk').innerText = matk;
        el('ui-cri').innerText = (1 + p.luk * 0.3).toFixed(1);
        el('ui-hit').innerText = p.dex + p.lvl;
        el('ui-flee').innerText = p.agi + p.lvl;
        el('ui-def').innerText = Math.floor((p.vit / 2) + (p.lvl / 2));

        // Vitals & Gender-Aware Sprite Binding
        el('hp-fill').style.width = (p.hp / p.mh * 100) + "%";
        // Dynamically apply job-specific and gender-specific classes
        el('p-spr').className = `spr j-${p.job} ${p.gender === 'f' ? 'ro-f' : 'ro-m'}`;

        // Inventory HUD (Items & Cards)
        el('inv-hud').innerHTML = p.inv.map(n => `
            <div class="stat-cell" style="border-color:var(--neon);" title="${DB_ITEMS.getDesc(n)}">
                ${DB_ITEMS.getName(n)}
            </div>`).join('');
    },

    // 3. UI UTILITIES
    loadScene(name, p, s) { el('ctl').innerHTML = this.scenes[name](p, s); },
    
    // Damage Popup Engine
    pop(amt, id, col = '') {
        const d = document.createElement('div'); d.className = 'dmg-pop ' + col; d.innerText = amt;
        el(id).appendChild(d); setTimeout(() => d.remove(), 800);
    },
    
    // Terminal Logger
    log(m, c) {
        el('log').insertAdjacentHTML('afterbegin', `
            <div class="entry ${c}" style="color:var(--neon); border-bottom:1px solid #1a1a1a;">
                > ${m}
            </div>`);
    }
};

console.log("AEGIS_UI: FULL_SYSTEM_READY_V5.0");
