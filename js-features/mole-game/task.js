let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let currentDeads = 0;
let currentLosts = 0;

for(let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            currentDeads += 1;
            deadMole.textContent = currentDeads;
        } else {
            currentLosts += 1;
            lostMole.textContent = currentLosts;
        }
        checkGame(currentDeads, currentLosts);
    }
}

function checkGame(currentDeads, currentLosts) {
    if(currentDeads === 10) {
        alert('Победа!');
        resetGame();
    } else if(currentLosts === 5) {
        alert('Вы проиграли!'); 
        resetGame();
    }
}

function resetGame() {
    currentDeads = 0;
    currentLosts = 0;
    deadMole.textContent = currentDeads;
    lostMole.textContent = currentLosts;
}