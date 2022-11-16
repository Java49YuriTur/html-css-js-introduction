const letterElements = document.querySelectorAll(".letter-guess");
const gameStatus = document.querySelector('.game-status');
const currentTrialField = document.querySelector('.current-trial');

const words = 'table';
const N_LETTERS = 5;
const N_TRIALS = 6;
const colRed = 'red';
const colGreen = 'green';
const colYellow = 'yellow';
let currentTrial = 0;

let word = '';
initWord();

function onChange(event) {
    
    const wordGuess = event.target.value.toLowerCase();
    currentTrialField.innerHTML = N_TRIALS-currentTrial++;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = colRed;
            if (index  > -1) {
                res = index == i ? colGreen: colYellow ;
            }        
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color=c);
        update(wordGuess, word);
    }
 }

function update(wordGuess, word) {
    currentTrialField.innerHTML = 'Remaining trials: ' + (N_TRIALS-currentTrial);
    if(wordGuess === word) {
        gameStatus.innerHTML = "Congratulations - you have guessed word ";
        gameStatus.style.color = colGreen;
        initWord();
    } else if(currentTrial == N_TRIALS) {
        gameStatus.innerHTML = "Sorry - your guess trials have ended up";
        gameStatus.style.color = COLOR_RED;
        initWord();
    }
}

function initWord() {
    currentTrial = 0;
    word = words;
    currentTrialField.innerHTML = N_TRIALS - currentTrial;
}