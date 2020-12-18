const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn-reset')[0];
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');
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
    let li = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < li.lenght; i++) {
        if (li[i].toLowerCase() === button.textContent) {
            li[i].classList.add ('show');
            match = li[i].textContent;
        }
    }
    return match
};

// Listens for a click on the keyboard display

qwerty.addEventListener ('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
    }
    let letterFound = checkLetter(e.target);
    console.log(letterFound);
});
