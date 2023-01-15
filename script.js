// Replace this with the note dictionary from backend
const notes = {
    'Goats cheese': ' Goat cheese, or chèvre from French fromage de chèvre is cheese made from goat milk.',
    'Nutritional facts:': 'Goat milk has a higher proportion of medium-chain fatty acids.',
    'Rubing cheese': ' Comes from the Yunnan Province of China and is very similar to paneer which is a cows cheese from India',
    'The grand history': 'First created by aliens on the planet Neptune after the Netherlands sent a probe into space in 1749 containing 3 young goats',
    'Concept 6: Information pertaining to concept 6': 'Words, words, words beautiful words, purely awesome words',
};

// Convert notes to an array of arrays
const entries = Object.entries(notes);

let card;
let txt;
let promp;
let answer;
let n = 0; // Counter for card index

const cardBox = document.getElementById('cardBox');
const initial = document.getElementById('initialDisplay');

// Function to flip card
function flipCard () {
    card.classList.add('transition');
    txt.textContent = answer;
};

// Function to call when next button is clicked
function nextCard () {
    // Reload page when flashcards run out
    if (n >= entries.length) {
        location.reload();
        return;
    };
    cardBox.textContent = '';
    card = document.createElement('div');
    card.classList.add('card');
    promp = entries[n][0];
    answer = entries[n][1];
    txt = document.createElement('div');
    txt.classList.add('txt');
    txt.textContent = promp;
    card.appendChild(txt);
    card.addEventListener('click', flipCard);
    cardBox.appendChild(card);
    n++;
};

const next = document.querySelector('.next');

// Function to call when convert is clicked
function convertClick () {
    initial.classList.add('hidden');
    next.classList.remove('hidden');
    nextCard();
};

const convert = document.getElementById('convert');

convert.addEventListener('click', convertClick);

next.addEventListener('click', nextCard);