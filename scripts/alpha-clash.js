document.addEventListener("keyup", function (event) {
    const playerPress = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    
    if(playerPress === "Escape"){
        removeBgColor(currentAlphabet);
        gameOver();
    }

    if (playerPress === currentAlphabet) {
        // score update 
        const currentScore = getElementValueById('current-score')
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        // continue the game 
        removeBgColor(playerPress);
        continueGame();
    } else {
        // life update 
        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementValueById('current-life', newLife)

        // game finished 
        if (newLife === 0) {
            removeBgColor(currentAlphabet);
            gameOver();
        }
    }
})

function continueGame() {
    const alphabet = getRandom();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    highlightColor(alphabet);
}

function play() {
    hideElementId('home-screen');
    showElementId('play-ground');
    hideElementId('final-score');

    setElementValueById('current-life',5);
    setElementValueById('current-score',0);

    continueGame();
}

function gameOver() {
    hideElementId('play-ground');
    showElementId('final-score');

    const lastScore = document.getElementById('current-score');
    setElementValueById('game-score',lastScore.innerText);
}