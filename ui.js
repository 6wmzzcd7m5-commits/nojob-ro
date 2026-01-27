/* --- AEGIS_UI_ENGINE_V4.7 (Streamlined) --- */
window.UI = {
    // 1. SCENE TEMPLATES
    // These functions generate the HTML for the control panel (#ctl)
    scenes: {
        // Registration / Character Creation
        reg: () => `
            <div class="panel grid g-1" style="border-color:var(--neon);">
                <input id="pname" placeholder="${DB.txt('init')}" class="panel" style="background:#000; color:var(--neon); border-color:var(--neon);">
                <button onclick="G.initChar()">${DB.txt('create')}</button>
            </div>`,
        
        // Main Menu / Dungeon Warp
        mnu: (p, s) => `
            <button onclick="G.startBattle()" class="panel" style="width:100%; padding:20px; border-color:var(--neon);">
                ${DB.txt('warp')} ${s.f}
            </button>`,
        
        // Active Combat Status
        btl: () => `
            <div class="panel" style="text-align:center; color:var(--hp); border:1px dotted var(--neon); background:#000;">
                ${DB.txt('combat')}
            </div>`,
            
        // Job Selection Office
        job: (p) => {
            const jobs = DB.getJob(p.job).next;
            const btns = jobs.map(j => `
                <button onclick="G.changeJob('${j}')" class="panel" style="border-color:var(--neon);">
                    ${DB.getName('jobs', j)}
                </button>`).join('');
            return `<div class="panel grid g-1" style="border-color:var(--neon);">
                        <div style="text-align:center; margin-bottom:5px;">JOB_OFFICE</div>
                        ${btns}
                    </div>`;
        }
    },

    // 2. RENDER CORE
    // Updates the persistent HUD and character stats
    render(p, s) {
        if(!p) return;

        // Update Labels & Static UI based on localization
        el('btn-save').innerText = DB.txt('save');
        el('btn-rank').innerText = DB.txt('rank');
        el('ui-job').innerText = DB.getName('jobs', p.job);
        el('btn-speed').innerText = s.spd + "x";
        el('ui-lvl').innerText = p.lvl;
        el('ui-floor').innerText = s.f;

        // Primary Attribute Row
        ['str','agi','vit','int','dex','luk'].forEach(k => el('ui-'+k).innerText = p[k]);

        // Secondary Combat Stats (RO Story Formulas)
        // ATK = STR + (DEX/5) + (LUK/3) + (Level * 2)
        const atk = p.str + Math.floor(p.dex/5) + Math.floor(p.luk/3) + (p.lvl * 2);
        // MATK = INT + (INT/2) + (DEX/5) + (Level * 2)
        const matk = p.int + Math.floor(p.int/2) + Math.floor(p.dex/5) + (p.lvl * 2);
        
        el('ui-atk').innerText = atk;
        el('ui-matk').innerText = matk;
        el('ui-cri').innerText = (1 + p.luk * 0.3).toFixed(1);
        el('ui-hit').innerText = p.dex + p.lvl;
        el('ui-flee').innerText = p.agi + p.lvl;
        el('ui-def').innerText = Math.floor((p.vit / 2) + (p.lvl / 2));

        // Vitals & Sprites
        el('hp-fill').style.width = (p.hp / p.mh * 100) + "%";
        el('p-spr').className = `spr j-${p.job}`; // Dynamically apply job-specific CSS

        // Inventory HUD (3% Items, 1.5% Cards)
        el('inv-hud').innerHTML = p.inv.map(n => `
            <div class="stat-cell" style="border-color:var(--neon);" title="${DB_ITEMS.getDesc(n)}">
                ${DB_ITEMS.getName(n)}
            </div>`).join('');
    },

    // 3. UI UTILITIES
    loadScene(name, p, s) { 
        el('ctl').innerHTML = this.scenes[name](p, s); 
    },

    // Damage Popup Engine
    pop(amt, id, col = '') {
        const d = document.createElement('div');
        d.className = 'dmg-pop ' + col;
        d.innerText = amt;
        el(id).appendChild(d);
        setTimeout(() => d.remove(), 800);
    },

    // Terminal Logger
    log(m, c) {
        el('log').insertAdjacentHTML('afterbegin', `
            <div class="entry ${c}" style="color:var(--neon); border-bottom:1px solid #1a1a1a;">
                > ${m}
            </div>`);
    }
};

console.log("UI_ENGINE: SYSTEM_READY_V4.7");
