/* --- AEGIS_SCENE_DATABASE_V1.02 --- */
window.SCENES = {
    // 0. NEW: Start / Splash Screen
    start: (p, s) => `
        <div class="panel grid g-1" style="border-color:var(--neon); text-align:center;">
            <div style="font-family:var(--impact); font-size:24px; margin-bottom:10px;">JOBLESS RO</div>
            <div style="font-size:10px; margin-bottom:15px; color:#888;">ULTIMATE MOBILE EDITION</div>
            <button onclick="G.showReg()" style="width:100%; padding:15px;">START GAME</button>
        </div>`,

    // 1. Ported: Registration Scene
    reg: (p, s) => `
        <div class="panel grid g-1" style="border-color:var(--neon);">
            <div class="flex" style="gap:5px;">
                <input id="pname" placeholder="${DB.txt('init')}" class="panel" style="background:#000; color:var(--neon); border-color:var(--neon); width:70%; font-size:9px;">
                <select id="pgender" onchange="G.setG(this.value)" class="panel" style="width:30%; background:#000; color:var(--neon); border-color:var(--neon); font-size:9px; height:28px;">
                    <option value="m">_M</option>
                    <option value="f">_F</option>
                </select>
            </div>
            
            <button onclick="G.initChar()" style="width:100%; margin: 5px 0; border-color:var(--neon); background:#000; color:var(--neon); font-weight:bold;">
                ${DB.txt('start')}
            </button>

            <select id="pdiff" class="panel" style="width:100%; background:#000; color:var(--neon); border-color:var(--neon); font-size:9px; height:25px;">
                <option value="0.8">${DB.txt('easy')} (0.8x ${DB.txt('stats')})</option>
                <option value="1.0" selected>${DB.txt('normal')} (1.0x ${DB.txt('stats')})</option>
                <option value="1.5">${DB.txt('hard')} (1.5x ${DB.txt('stats')})</option>
            </select>
        </div>`,

    // 2. Ported: Main Menu / Dungeon Warp
    mnu: (p, s) => `
        <div class="grid g-1">
            <button onclick="G.startBattle()" class="panel" style="width:100%; padding:20px; border-color:var(--neon);">${DB.txt('warp')} ${s.f}</button>
            <button onclick="G.loadRank()" class="panel" style="width:100%; font-size:10px; border-color:var(--sp); color:var(--sp); padding:8px;">${DB.txt('rank')}</button>
        </div>`,

    // 3. Ported: Active Combat Status
    btl: () => `<div class="panel" style="text-align:center; color:var(--hp); border:1px dotted var(--neon); background:#000;">${DB.txt('combat')}</div>`,

    // 4. Ported: Job Selection Office
    job: (p) => {
        const jobs = DB.getJob(p.job).next;
        const btns = jobs.map(j => `<button onclick="G.changeJob('${j}')" class="panel" style="border-color:var(--neon);">${DB.getName('jobs', j)}</button>`).join('');
        return `<div class="panel grid g-1" style="border-color:var(--neon);"><div style="text-align:center; margin-bottom:5px;">${DB.txt('job_office')}</div>${btns}</div>`;
    },

    // 5. NEW: Game Over Scene
    gameover: (p, s) => `
        <div class="panel grid g-1" style="border-color:var(--hp); text-align:center;">
            <div style="color:var(--hp); font-size:18px; font-weight:bold;">GAME OVER</div>
            <div style="font-size:10px; margin:10px 0;">FLOOR REACHED: ${s.f}</div>
            <div style="font-size:10px; color:#888; margin-bottom:10px;">YOUR ADVENTURE ENDS HERE... FOR NOW.</div>
            <button onclick="location.reload()" class="btn-red" style="width:100%;">RETRY</button>
        </div>`,

    // 6. NEW: Leaderboard Scene
    rank: (list) => {
        const rows = (list || []).map((r, i) => `
            <div class="flex" style="justify-content:space-between; font-size:9px; padding:3px 2px; border-bottom:1px solid #222;">
                <span style="color:var(--zeny);">#${i + 1} ${r.n}</span>
                <span class="c-yel">F${r.f}</span>
                <span class="c-blu" style="font-size:8px;">${r.j}</span>
            </div>
        `).join('');
        return `
            <div class="panel grid g-1" style="border-color:var(--sp);">
                <div style="text-align:center; color:var(--sp); font-weight:bold; margin-bottom:5px; font-size:11px;">🏆 TOP 10 LEGENDS</div>
                <div style="max-height:140px; overflow-y:auto; background:rgba(0,0,0,0.5); padding:2px;">${rows || '<div style="text-align:center; color:#444;">NO DATA</div>'}</div>
                <button onclick="UI.loadScene('mnu', G.p, G.s)" style="width:100%; font-size:9px; border-color:var(--sp); margin-top:5px; padding:10px;">BACK</button>
            </div>`;
    }
};
