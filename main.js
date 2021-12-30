let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess(){
    let userGuess = Number(guessField.value);
    
    if(guessCount === 1){
        guesses.textContent = 'Propositions precedentes : ';
    }
    guesses.textContent += userGuess + ' ';

    guesses.style.backgroundColor = 'purple';
    guesses.style.color = 'white';
    guesses.style.fontSize = '100%';
    guesses.style.padding = '10px';
    guesses.style.borderRadius  = '.5rem';
    guesses.style.boxShadow = '3px 3px 6px black';
    guesses.style.textTransform = 'upperCase';


    if(userGuess === randomNumber){
        lastResult.textContent = 'Bravo vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.borderRadius = '.5rem';
        lastResult.style.boxShadow = '3px 3px 6px black';
        lowOrHi.textContent = '';
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = '!!! PERDU !!!';
        setGameOver();
    }else{
        lastResult.textContent = 'FAUX !';
        lastResult.style.backgroundColor = 'red';
        lastResult.style.borderRadius = '.5rem';
        lastResult.style.boxShadow = '3px 3px 6px black';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }

    guessCount++; 
    guessField.value = '';
    guessField.focus();

} 
guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Rejouer';
    resetButton.style.border = 'none';
    resetButton.style.backgroundColor = '#222';
    resetButton.style.color = '#fff';
    resetButton.style.padding = '10px';
    resetButton.style.width = '100%';
    resetButton.style.fontSize = '16px';
    resetButton.style.borderRadius = '.5rem';
    
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for(let i=0; i<resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()* 100) +1;
}
