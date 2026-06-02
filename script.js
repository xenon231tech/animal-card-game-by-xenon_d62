const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
let cards = [];
let flipped = [];
let matched = 0;
let score = 0;

function initGame() {
    cards = [...animals, ...animals].sort(() => Math.random() - 0.5);
    flipped = [];
    matched = 0;
    score = 0;
    renderCards();
}

function renderCards() {
    document.getElementById('score').textContent = score;
    document.getElementById('cards').innerHTML = cards.map((card, i) => `
        <div class="card" onclick="flipCard(${i})" style="background: ${flipped.includes(i) ? '#fff' : '#ddd'}">
            ${flipped.includes(i) ? card : '?'}
        </div>
    `).join('');
}

function flipCard(i) {
    if (!flipped.includes(i) && flipped.length < 2) {
        flipped.push(i);
        renderCards();
        
        if (flipped.length === 2) {
            setTimeout(() => {
                if (cards[flipped[0]] === cards[flipped[1]]) {
                    matched += 2;
                    score += 10;
                    flipped = [];
                } else {
                    score -= 1;
                    flipped = [];
                }
                renderCards();
            }, 500);
        }
    }
}

function resetGame() {
    initGame();
}

initGame();