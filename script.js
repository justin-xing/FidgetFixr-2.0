// upload functionality
const file = document.getElementById('file');
const upload = document.getElementById('upload');
    const status = document.getElementById('status');
upload.addEventListener('click', () => {
    console.log('clicked the upload button!');
})

// Replace this with the note dictionary
const notes = {
    'Racket': 'Functional programming',
    'Python': 'Object oriented',
    'cd': 'Change directory',
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

// Function to call when upload is clicked
function uploadClick () {
    initial.classList.add('hidden');
    next.classList.remove('hidden');
    nextCard();
};

upload.addEventListener('click', uploadClick);

next.addEventListener('click', nextCard);