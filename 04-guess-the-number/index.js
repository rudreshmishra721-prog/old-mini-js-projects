let randomNumber = parseInt( Math.random() * 100 + 1 );
const Submit = document.querySelector('#subt');
const UserInput =  document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let PrevGuess = []
let NumGuess = 1;

let PlayGame = true;
if(PlayGame){
    Submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        ValidateGuess(guess);
        

    }
)}

function ValidateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter a number greater then 0')
    }
    else if(guess > 100){
        alert('please enter a number less then 100')
    }
    else{
        PrevGuess.push(guess);
        if(NumGuess === 10){
            DisplayGuess(guess);
            DisplayMessage(`Game Over. Random number was ${randomNumber}`);
            EndGame();
        }
        else{
            DisplayGuess(guess);
            CheckGuess(guess);
        }

    } 

}

function CheckGuess(guess){
    if(guess === randomNumber){
        DisplayMessage(`you guessed it right!`)
        EndGame();
    }
    else if(guess < randomNumber){
        DisplayMessage(`Number is Too LOW`);
    }
    else if(guess > randomNumber){
        DisplayMessage(`Number is TOO HIGH`);
    } 

}

function DisplayGuess(guess){
    UserInput.value = '';
    GuessSlot.innerHTML += `${guess}  `;
    NumGuess++;
    Remaining.innerHTML = `${11 - NumGuess}`;

}


function DisplayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

    if (message.includes('Too LOW')) {
        lowOrHi.querySelector('h2').classList.add('low');
    } else if (message.includes('TOO HIGH')) {
        lowOrHi.querySelector('h2').classList.add('high');
    } else if (message.includes('right')) {
        lowOrHi.querySelector('h2').classList.add('correct');
    }
}

function EndGame(){
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    StartOver.appendChild(p);
    PlayGame = false;
    newGame();
    
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
       randomNumber = parseInt( Math.random() * 100 + 1 );
       PrevGuess = [];
       NumGuess = 1;
       GuessSlot.innerHTML = '';
       lowOrHi.innerHTML = '';
       Remaining.innerHTML = `${11 - NumGuess}`; 
       UserInput.removeAttribute('disabled');
       StartOver.removeChild(p);
       PlayGame = true;

    })

}


