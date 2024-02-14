function hideElementId(elementById) {
    const hideElement = document.getElementById(elementById);
    hideElement.classList.add('hidden');
}

function showElementId(elementById) {
    const showElement = document.getElementById(elementById);
    showElement.classList.remove('hidden');
}

function highlightColor(elementById) {
    const element = document.getElementById(elementById);
    element.classList.add('bg-orange-400');
}

function removeBgColor(elementById) {
    const element = document.getElementById(elementById);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementById) {
    const element = document.getElementById(elementById);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

function setElementValueById(elementById, value) {
    const element = document.getElementById(elementById);
    element.innerText = value;
}

function getRandom() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomIndex = Math.round(Math.random() * 25);
    return alphabets[randomIndex];
}
