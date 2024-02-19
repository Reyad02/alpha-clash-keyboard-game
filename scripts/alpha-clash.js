let audio = new Audio();
let isPlay = false;
let artBoard = document.getElementById("artboard")
document.addEventListener("keyup", function (event) {
    if(!isPlay){
        return ;
    }
    const playerPress = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    
    if(playerPress === "Escape"){
        removeBgColor(currentAlphabet);
        gameOver();
    }

    if (playerPress === currentAlphabet) {
        audio.src="../audio/collect-5930.mp3";
        audio.play();

        // score update 
        const currentScore = getElementValueById('current-score')
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        // continue the game 
        removeBgColor(playerPress);
        continueGame();
    } else {
        audio.src="../audio/negative_beeps-6008.mp3";
        audio.play();

        // life update 
        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementValueById('current-life', newLife)

        const updateLifePercentage = (newLife/5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updateLifePercentage}%,red)`;


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
    isPlay=true;
    hideElementId('home-screen');
    showElementId('play-ground');
    hideElementId('final-score');

    setElementValueById('current-life',5);
    setElementValueById('current-score',0);

    continueGame();
}

function gameOver() {
    isPlay=false
    hideElementId('play-ground');
    showElementId('final-score');

    const lastScore = document.getElementById('current-score');
    setElementValueById('game-score',lastScore.innerText);
    artBoard.style.background = `linear-gradient(#FFFFFFB3 100%,red)`;
}