const synth = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    playClick() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    },

    playClue() {
        this.init();
        [1100, 1320].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (i * 0.05));
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime + (i * 0.05));
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + (i * 0.05));
            osc.stop(this.ctx.currentTime + 0.3);
        });
    }, // <--- THIS COMMA WAS MISSING

    playArrest() {
        this.init();
        const duration = 1.5;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            let white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = data[i];
            data[i] *= 3.5;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + duration);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(filter);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        noise.start();
        osc.stop(this.ctx.currentTime + duration);
        noise.stop(this.ctx.currentTime + duration);
    }
};
// Case Data - Detailed with forensic evidence and connections
const cases = CASE_DATA;

// Game State
const gameState = {
    currentCase: null,
    currentSuspect: null,
    evidence: [],
    selectedSuspect: null,
    casesCompleted: 0,
    investigationPhase: 'briefing',
    interrogationLog: {}
};

function initGame() {
    renderCaseMenu();

    // Universal sound for anything clickable
    document.addEventListener('click', (e) => {
        // Check if the clicked element or its parent is a button or interactive item
        if (e.target.closest('.button') || e.target.closest('.scene-item') || e.target.closest('.question')) {
            synth.playClick();
        }
    });
}

function renderCaseMenu() {
    const menu = document.getElementById('caseMenu');
    menu.innerHTML = '';
    
    cases.forEach((caseData, index) => {
        const isLocked = index > gameState.casesCompleted;
        const card = document.createElement('div');
        card.className = `case-card ${isLocked ? 'locked' : ''}`;
        card.onclick = !isLocked ? () => viewCaseBriefing(caseData.id) : null;
        
        card.innerHTML = `
            <div class="case-number">${caseData.number}</div>
            <h3>${caseData.title}</h3>
            <p>${caseData.briefing.substring(0, 100)}...</p>
            <div class="case-details">
                <div><strong>Location:</strong> ${caseData.location}</div>
                <div><strong>Status:</strong> ${index < gameState.casesCompleted ? 'SOLVED' : 'AVAILABLE'}</div>
            </div>
            ${isLocked ? '<div class="lock-badge">🔒 LOCKED</div>' : '<button class="button">INVESTIGATE</button>'}
        `;
        menu.appendChild(card);
    });

    const progress = (gameState.casesCompleted / cases.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function viewCaseBriefing(caseId) {
    gameState.currentCase = cases.find(c => c.id === caseId);
    gameState.evidence = [];
    gameState.selectedSuspect = null;
    gameState.interrogationLog = {};
    
    document.getElementById('caseTitle').textContent = gameState.currentCase.title;
    document.getElementById('caseDate').textContent = gameState.currentCase.date;
    document.getElementById('briefingText').innerHTML = `
        <h2 style="font-family: 'Roboto Mono', Monospace; margin-bottom: 20px; font-size: 1.5rem;">${gameState.currentCase.title}</h2>
        <p><strong>Victim:</strong> ${gameState.currentCase.victim}</p>
        <p><strong>Location:</strong> ${gameState.currentCase.location}</p>
        <p><strong>Time:</strong> ${gameState.currentCase.timeOfDeath}</p>
        <br>
        <p>${gameState.currentCase.briefing}</p>
    `;
    
    showScreen('briefingScreen');
}

function startInvestigation() {
    document.getElementById('sceneTitle').textContent = `🔍 ${gameState.currentCase.location}`;
    
    const sceneItems = document.getElementById('sceneItems');
    sceneItems.innerHTML = '';
    gameState.currentCase.sceneItems.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'scene-item';
        itemEl.textContent = item.name;
        itemEl.onclick = () => examineItem(idx);
        sceneItems.appendChild(itemEl);
    });
    
    document.getElementById('evidenceList').innerHTML = '';
    showScreen('investigationScreen');
}

function examineItem(index) {
    const item = gameState.currentCase.sceneItems[index];
    
    if (!gameState.evidence.find(e => e.name === item.name)) {
        synth.playClue(); // <--- Play the clue "shimmer"
        gameState.evidence.push({
            name: item.name,
            description: item.description,
            forensicAnalysis: item.forensicAnalysis,
            connections: item.connections
        });
        renderEvidence();
    }
    
    showEvidenceModal(item);
}

function showEvidenceModal(item) {
    const modal = document.getElementById('evidenceModal');
    document.getElementById('modalEvidenceTitle').textContent = item.name;
    document.getElementById('modalEvidenceAnalysis').innerHTML = `<strong>Initial Observation:</strong> ${item.description}<br><br><strong>Forensic Analysis:</strong> ${item.forensicAnalysis}`;
    
    let connectionsHTML = '<h4>Connection to Suspects:</h4>';
    item.connections.forEach(conn => {
        connectionsHTML += `<div class="connection">• ${conn}</div>`;
    });
    document.getElementById('modalConnections').innerHTML = connectionsHTML;
    
    modal.classList.add('active');
}

function closeEvidenceModal() {
    document.getElementById('evidenceModal').classList.remove('active');
}

function renderEvidence() {
    const list = document.getElementById('evidenceList');
    list.innerHTML = `<p style="color: var(--neon); margin-bottom: 15px;">Items Collected: ${gameState.evidence.length}/${gameState.currentCase.sceneItems.length}</p>`;
    gameState.evidence.forEach(e => {
        const el = document.createElement('div');
        el.className = 'evidence-item';
        el.innerHTML = `<strong>${e.name}</strong><br><small>${e.description}</small>`;
        el.style.cursor = 'pointer';
        el.onclick = () => showEvidenceModal(e);
        list.appendChild(el);
    });
}

function proceedToInterrogation() {
    const suspectList = document.getElementById('suspectList');
    suspectList.innerHTML = gameState.currentCase.suspects.map((suspect, idx) => `
        <div class="suspect-card" onclick="selectSuspect(${idx})" style="cursor: pointer;">
            <h4>${suspect.name}</h4>
            <p><strong>Role:</strong> ${suspect.role}</p>
            <p><strong>Background:</strong> ${suspect.background}</p>
        </div>
    `).join('');
    
    document.getElementById('interrogationInfo').textContent = `Case: ${gameState.currentCase.title} | Total Evidence: ${gameState.evidence.length} items`;
    showScreen('interrogationScreen');
}

function selectSuspect(index) {
    gameState.currentSuspect = index;
    const suspect = gameState.currentCase.suspects[index];
    
    if (!gameState.interrogationLog[index]) {
        gameState.interrogationLog[index] = [];
    }
    
    let interrogationHTML = `<h4 style="margin-bottom: 20px; color: var(--neon);">Questioning ${suspect.name}</h4>`;
    interrogationHTML += `<div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--secondary); font-size: 0.9rem;">`;
    interrogationHTML += `<p><strong>Motive:</strong> ${suspect.motive}</p>`;
    interrogationHTML += `<p><strong>Alibi:</strong> ${suspect.alibi}</p>`;
    interrogationHTML += `</div>`;
    
    const questions = Object.keys(suspect.interrogationResponses);
    interrogationHTML += `<h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent);">Ask Questions:</h4>`;
    
    questions.forEach((q, qIdx) => {
        const alreadyAsked = gameState.interrogationLog[index].some(log => log.question === q);
        interrogationHTML += `<div class="question" onclick="askQuestion(${index}, ${qIdx}, '${q.replace(/'/g, "&#39;")}');" style="opacity: ${alreadyAsked ? '0.5' : '1'}; cursor: ${alreadyAsked ? 'default' : 'pointer'};">`;
        interrogationHTML += `${q}`;
        if (alreadyAsked) interrogationHTML += ` <span style="color: var(--neon);"> [ALREADY ASKED]</span>`;
        interrogationHTML += `</div>`;
    });
    
    if (gameState.interrogationLog[index].length > 0) {
        interrogationHTML += `<h4 style="margin-top: 25px; margin-bottom: 15px; color: var(--accent);">Interrogation Log:</h4>`;
        interrogationHTML += `<div class="interrogation-log">`;
        gameState.interrogationLog[index].forEach(log => {
            interrogationHTML += `
                <div class="interrogation-exchange">
                    <div class="detective-question">Q: ${log.question}</div>
                    <div class="suspect-answer">A: ${log.answer}</div>
                    <div class="suspect-demeanor"><em>Demeanor: ${log.demeanor}</em></div>
                </div>
            `;
        });
        interrogationHTML += `</div>`;
        
        if (gameState.interrogationLog[index].length >= 2) {
            interrogationHTML += analyzeResponses(index, suspect);
        }
    }
    
    let container = document.querySelector('.questions-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'questions-container';
        document.getElementById('interrogationScreen').querySelector('.button-group').parentElement.insertBefore(container, document.getElementById('interrogationScreen').querySelector('.button-group'));
    }
    container.innerHTML = interrogationHTML;
}

function askQuestion(suspectIdx, questionIdx, question) {
    const suspect = gameState.currentCase.suspects[suspectIdx];
    const response = suspect.interrogationResponses[question];
    
    if (!gameState.interrogationLog[suspectIdx]) {
        gameState.interrogationLog[suspectIdx] = [];
    }
    
    if (!gameState.interrogationLog[suspectIdx].find(log => log.question === question)) {
        gameState.interrogationLog[suspectIdx].push({
            question: question,
            answer: response.answer,
            demeanor: response.demeanor
        });
    }
    
    selectSuspect(suspectIdx);
}

function analyzeResponses(suspectIdx, suspect) {
    const log = gameState.interrogationLog[suspectIdx];
    let analysis = `<div class="interrogation-notes">`;
    analysis += `<strong>Analysis Notes:</strong><br>`;
    
    let suspiciousCount = 0;
    log.forEach(entry => {
        if (entry.demeanor.includes('lie') || entry.demeanor.includes('Nervous') || entry.demeanor.includes('Defensive')) {
            suspiciousCount++;
        }
    });
    
    if (suspiciousCount >= 2) {
        analysis += `<p>🚨 <span style="color: var(--danger);">Multiple signs of deception detected.</span></p>`;
    }
    
    suspect.clue && (analysis += `<p>💡 Clue from investigation: ${suspect.clue}</p>`);
    
    if (suspectIdx === gameState.currentCase.correctSuspect) {
        analysis += `<p style="color: var(--accent);">⚠️ This suspect has significant motive and opportunity.</p>`;
    }
    
    analysis += `</div>`;
    return analysis;
}

function proceedToArrest() {
    const arrestList = document.getElementById('arrestSuspectList');
    arrestList.innerHTML = gameState.currentCase.suspects.map((suspect, idx) => `
        <div class="suspect-card" onclick="selectArrestSuspect(${idx})" style="cursor: pointer; border: ${gameState.selectedSuspect === idx ? '2px solid var(--neon)' : '2px solid var(--secondary)'}; background: ${gameState.selectedSuspect === idx ? 'rgba(0, 212, 255, 0.15)' : 'rgba(15, 76, 117, 0.2)'};">
            <h4>${suspect.name}</h4>
            <p><strong>${suspect.role}</strong></p>
            <p><strong>Motive:</strong> ${suspect.motive}</p>
        </div>
    `).join('');
    
    showScreen('arrestScreen');
}

function selectArrestSuspect(index) {
    gameState.selectedSuspect = index;
    document.getElementById('arrestButton').disabled = false;
    document.querySelectorAll('#arrestSuspectList .suspect-card').forEach((card, idx) => {
        if (idx === index) {
            card.style.borderColor = 'var(--neon)';
            card.style.background = 'rgba(0, 212, 255, 0.15)';
        } else {
            card.style.borderColor = 'var(--secondary)';
            card.style.background = 'rgba(15, 76, 117, 0.2)';
        }
    });
}

function makeArrest() {
    if (gameState.selectedSuspect === null) return;
    
    // Trigger the dramatic synth boom
    synth.playArrest();
    
    const arrested = gameState.currentCase.suspects[gameState.selectedSuspect];
    const isCorrect = gameState.selectedSuspect === gameState.currentCase.correctSuspect;
    
    let revealHTML = `<p style="margin-bottom: 20px; font-size: 1.1rem;">You have arrested <strong>${arrested.name}</strong>.</p>`;
    
    if (isCorrect) {
        revealHTML += gameState.currentCase.reveal;
        gameState.casesCompleted++;
        
        if (gameState.currentCase.id === 5) {
            setTimeout(() => showFinalEnding(), 2500);
            document.getElementById('revealText').innerHTML = revealHTML;
            showScreen('solvedScreen');
            return;
        }
    } else {
        revealHTML += `<p><strong>Wrong Suspect</strong></p>`;
        revealHTML += `<p>You made an arrest, but something feels wrong. The evidence doesn't quite add up. ${arrested.name} maintains their innocence. The real criminal is still out there.</p>`;
        revealHTML += `<p style="margin-top: 20px; color: var(--danger);">The case remains unsolved.</p>`;
    }
    
    document.getElementById('revealText').innerHTML = revealHTML;
    showScreen('solvedScreen');
}

function showFinalEnding() {
    document.getElementById('endingTitle').textContent = 'THE TRUTH - FINAL CASE SOLVED';
    document.getElementById('endingText').innerHTML = gameState.currentCase.reveal;
    showScreen('endingScreen');
}

function goToMenu() {
    gameState.currentCase = null;
    gameState.currentSuspect = null;
    gameState.selectedSuspect = null;
    renderCaseMenu();
    showScreen('menuScreen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// Start Game
initGame();