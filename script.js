const buttonSlapen = document.getElementById('buttonSlapen');
const buttonVoeren = document.getElementById('buttonVoeren');
const buttonSpelen = document.getElementById('buttonSpelen');
const buttonAaien = document.getElementById('buttonAaien');


const newImage = document.getElementById('image');
const frog1 = 'images/frog1.jpg';

const hungerBar = document.getElementById('hungerBar');
const playBar = document.getElementById('playBar');
const restedBar = document.getElementById('restedBar');
const loveBar = document.getElementById('loveBar');

const message = document.querySelector('p')
const originalMessage = message.textContent;


let hungerProgress = 0;
let sleepProgress = 0;
let playProgress = 0;
let loveProgress = 0;

function newFrog(newSrc, progress) {
    if (progress < 100) {  // als progress minder dan 100 is, voer deze functie uit (het plaatje word voor een moment verander, en dan terug veraderd)
        newImage.src = newSrc;
        setTimeout(() => {
            newImage.src = frog1;
        }, 650);
    }
}

// progress bar bron: https://www.w3schools.com/howto/howto_js_progressbar.asp 
function progressOmhoog(progress, progressBar, newMessage) {
    if (progress < 100) {
        progress += 20;
        progressBar.style.width = progress + '%';
    }
    else {
        message.textContent = newMessage;
        setTimeout(() => {
            message.textContent = originalMessage;
        }, 3000);
    }
    return progress; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return (hulp met de returnfunctie)
}


buttonSlapen.addEventListener('click', () => {
    newFrog('images/frog2.jpg', sleepProgress);
    sleepProgress = progressOmhoog(sleepProgress, restedBar, 'Bob is niet meer moe');
});

buttonVoeren.addEventListener('click', () => {
    newFrog('images/frog3.jpg', hungerProgress);
    hungerProgress = progressOmhoog(hungerProgress, hungerBar, 'Bob heeft geen honger');
});

buttonSpelen.addEventListener('click', () => {
    newFrog('images/frog4.jpg', playProgress);
    playProgress = progressOmhoog(playProgress, playBar, 'Bob wil niet meer spelen');
    progressOmlaag(playProgress)
});
buttonAaien.addEventListener('click', () => {
    newFrog('images/frog5.jpg', loveProgress);
    loveProgress = progressOmhoog(loveProgress, loveBar, 'Bob wil niet meer geaaid worden');
});