/* --- AEGIS_SCENE_DATABASE_V1.02 --- */
window.SCENES = {
    start: (p, s) => `
        <div class="panel grid g-1 scene-start">
            <div class="ascii-title">
      _  ____  ____  _      ______  _____ _____   _____   ____  
     | |/ __ \|  _ \| |     |  ____|/ ____/ ____| |  __ \ / __ \ 
     | | |  | | |_) | |     | |__  | (___| (___   | |__) | |  | |
 _   | | |  | |  _ <| |     |  __|  \___ \\___ \  |  _  /| |  | |
| |__| | |__| | |_) | |___  | |____ ____) |___) | | | \ \| |__| |
 \____/ \____/|____/|_____|______|_____/_____/  |_|  \_\\____/
            </div>
            <div class="mobile-tag">${DB.txt('mobile_ed').toUpperCase()}</div>
            <button onclick="G.showReg()" class="btn-block btn-start">${DB.txt('start').toUpperCase()}</button>
        </div>`,

    // 1. Ported: Registration Scene
    reg: (p, s) => `
        <div class="panel grid g-1 scene-reg">
            <div class="spr-preview-box">
                <div class="avatar-box spr-container">
                    <div id="reg-spr" class="spr j-Novice ${G.s.tmpG === 'f' ? 'ro-f' : 'ro-m'}">
                        <div class="hd"><div class="pony"></div></div>
                        <div class="bd"></div>
                    </div>
                </div>
            </div>

            <div class="flex input-row">
                <input id="pname" placeholder="${DB.txt('init')}" class="panel input-reg pname">
                <select id="pgender" onchange="G.setG(this.value)" class="panel input-reg pgender">
                    <option value="m" ${G.s.tmpG === 'm' ? 'selected' : ''}>_M</option>
                    <option value="f" ${G.s.tmpG === 'f' ? 'selected' : ''}>_F</option>
                </select>
            </div>
            
            <button onclick="G.initChar()" class="btn-block btn-reg">
                ${DB.txt('start')}
            </button>

            <select id="pdiff" class="panel input-reg pdiff">
                <option value="0.8">${DB.txt('easy')} (0.8x ${DB.txt('stats')})</option>
                <option value="1.0" selected>${DB.txt('normal')} (1.0x ${DB.txt('stats')})</option>
                <option value="1.5">${DB.txt('hard')} (1.5x ${DB.txt('stats')})</option>
            </select>
        </div>`,

    // 2. Ported: Main Menu / Dungeon Warp
    mnu: (p, s) => {
        return `
            <div class="grid g-1">
                <button onclick="G.startBattle()" class="panel btn-block btn-warp">${DB.txt('warp_to')} ${DB.getLocation(s.f)}</button>
                <button onclick="G.loadRank()" class="panel btn-block btn-rank">${DB.txt('rank')}</button>
            </div>`;
    },

    // 2.1 NEW: Stat Allocation Scene
    stats: (p, s) => {
        const stats = ['str', 'agi', 'vit', 'int', 'dex', 'luk'];
        const rows = stats.map(k => `
            <div class="flex" style="justify-content:space-between; padding:5px; border-bottom:1px solid #222;">
                <span style="text-transform:uppercase; color:var(--neon);">${DB.txt(k)}: ${p[k]}</span>
                <button class="btn-sm" onclick="G.addStat('${k}')" ${p.pts <= 0 ? 'disabled' : ''} style="width:30px; height:20px; line-height:10px;">+</button>
            </div>
        `).join('');

        const canContinue = p.pts <= 0;
        return `
            <div class="panel grid g-1">
                <div style="text-align:center; color:var(--neon); font-weight:bold; margin-bottom:5px;">${DB.txt('pts')} <b class="c-yel">${p.pts || 0}</b></div>
                <div style="background:rgba(0,0,0,0.3); padding:5px; border-radius:4px;">${rows}</div>
                <button onclick="G.continueFlow()" class="btn-block" ${!canContinue ? 'disabled' : ''} style="margin-top:10px; border-color:${canContinue ? 'var(--neon)' : '#444'}; color:${canContinue ? 'var(--neon)' : '#444'};">
                    ${canContinue ? 'CONTINUE' : 'ALLOCATE ALL POINTS'}
                </button>
            </div>`;
    },

    // 2.2 NEW: Skill Draft Scene
    draft: (list) => {
        const btns = list.map(sn => {
            let sd = null;
            for (let c in DB.skills) if (DB.skills[c][sn]) sd = DB.skills[c][sn];
            const typeLabel = sd.mode === 'act' ? '[A]' : '[P]';
            return `<button onclick="G.learnSkill('${sn}')" class="panel" style="text-align:left; padding:10px; border-color:var(--sp); font-size:9px; width:100%;">
                <div class="flex" style="justify-content:space-between;">
                    <b style="color:var(--sp);">${DB.getName('skills', sn)}</b>
                    <span style="color:#666;">${typeLabel}</span>
                </div>
                <div style="font-size:8px; color:#888; margin-top:2px;">Tier ${sd.tier}</div>
            </button>`;
        }).join('');

        return `
            <div class="panel grid g-1" style="border-color:var(--sp);">
                <div style="text-align:center; color:var(--sp); font-weight:bold; font-size:11px; margin-bottom:10px;">${DB.txt('pick_skill')}</div>
                ${btns}
            </div>`;
    },

    // 3. Ported: Active Combat Status
    btl: () => `<div class="panel" style="text-align:center; color:var(--hp); border:1px dotted var(--neon); background:rgba(0,0,0,0.5);">${DB.txt('combat')}</div>`,

    // 4. Ported: Job Selection Office
    job: (p) => {
        const jobs = DB.getJob(p.job).next;
        const suffix = p.gender === 'f' ? '_F' : '_M';
        const btns = jobs.map(j => `<button onclick="G.changeJob('${j}')" class="panel btn-block">${DB.getName('jobs', j)}${suffix}</button>`).join('');
        return `<div class="panel grid g-1"><div style="text-align:center; margin-bottom:5px;">${DB.txt('job_office')}</div>${btns}</div>`;
    },

    // 5. NEW: Game Over Scene
    gameover: (p, s) => `
        <div class="panel grid g-1" style="border-color:var(--hp); text-align:center; padding: 20px;">
            <div style="color:var(--hp); font-size:24px; font-weight:bold; font-family:var(--impact);">GAME OVER</div>
            <div style="font-size:12px; margin:15px 0;">${DB.txt('reached')} ${s.f}</div>
            <div style="font-size:10px; color:#888; margin-bottom:20px;">${DB.txt('ended')}</div>
            <button onclick="location.reload()" class="btn-red btn-block">${DB.txt('retry')}</button>
        </div>`,

    // 6. NEW: Leaderboard Scene
    rank: (list) => {
        const rows = (list || []).map((r, i) => `
            <div class="flex rank-row">
                <span style="color:var(--zeny);">#${i + 1} ${r.n}</span>
                <span class="c-yel">F${r.f}</span>
                <span class="c-blu" style="font-size:8px;">${r.j}</span>
            </div>
        `).join('');
        return `
            <div class="panel grid g-1" style="border-color:var(--sp);">
                <div class="rank-header">${DB.txt('legends')}</div>
                <div class="rank-list">${rows || '<div class="no-data">NO DATA</div>'}</div>
                <button onclick="UI.loadScene('mnu', G.p, G.s)" class="btn-block mt-2">${DB.txt('back')}</button>
            </div>`;
    }
};
