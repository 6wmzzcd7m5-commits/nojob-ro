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
    mnu: (p, s) => `<button onclick="G.startBattle()" class="panel" style="width:100%; padding:20px; border-color:var(--neon);">${DB.txt('warp')} ${s.f}</button>`,

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
        </div>`
};
