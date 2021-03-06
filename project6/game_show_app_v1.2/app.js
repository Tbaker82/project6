const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn-reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');
const hearts = document.querySelectorAll('.tries img');
const phrases = ['Paint the Town Red',
                 'A Chip on Your Shoulder', 
                 'A Dime a Dozen', 
                 'Close but No Cigar', 
                 'Burst Your Bubble', 
                 'Cut to the Chase', 
                 'Piece of Cake', 
                 'Back to Square One', 
                 'Between a Rock and a Hard Place', 
                 'Beating Around the Bush', 
                 'Barking Up the Wrong Tree', 
                 'Curiosity Killed the Cat', 
                 'Birds of a Feather Flock Together', 
                 'All Bark No Bite', 
                 'Bull in a China Shop'];
let missed = 0;

// Hides the starting overlay

startButton.addEventListener('click', () => {
	overlay.style.display = 'none';
});

// Gets a random phrase from the array and splits the phrase into an array

function getRandomPhraseAsArray(arr) {
	let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
	let splitPhrase = randomPhrase.split('');
	return splitPhrase;
}

let randomPhraseArray = getRandomPhraseAsArray(phrases);

//Displays the phrase 

function addPhraseToDisplay(arr) {
        for (let i = 0; i < arr.length; i++) {
          let li = document.createElement('LI');
          li.textContent = arr[i];
          ul.appendChild(li);
          if (arr[i] !== ' ') {
             li.className = 'letter';
          } else {
            li.className = 'space';
          }
        }
}

let phraseDisplay = addPhraseToDisplay(randomPhraseArray);

// This function checks to see if the letter picked matches a letter in the phrase

function checkLetter(button) {
    let letter = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].textContent.toLowerCase() === button.textContent) {
            letter[i].classList.add('show');
            match = letter[i].textContent;
        }
    }
    return match;
};

// Listens for a click on the keyboard display

qwerty.addEventListener ('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
    } else if (e.target) {
        alert('Please click a button');
    }
    let letterFound = checkLetter(e.target);
    if (letterFound === null) {
       hearts[missed].src = 'images/lostHeart.png';
       missed++;
    }
    checkWin();
});

// This checks to see if the player won or lost the game

function checkWin () {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if (letter.length === show.length) {
        overlay.classList.add('win');
        const winTitle = document.querySelector('H2');
        winTitle.innerHTML = "Congratulations!! You win!!";
        overlay.style.display = 'flex';
    } else if (missed >= 5) {
        overlay.classList.add('lose');
        const loseTitle = document.querySelector('H2');
        loseTitle.innerHTML = 'Sorry, you lost.';
        overlay.style.display = 'flex';
    }
}
