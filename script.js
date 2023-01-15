// Replace this with the note dictionary from backend
const notes = {
    'Goats cheese': ' Goat cheese, or chèvre from French fromage de chèvre is cheese made from goat milk. It is also high in calcium, vitamins A and K, phosphorus, thiamin and niacin. Goat milk and, therefore, cheeses contain anti-inflammatory enzymes.',
    'Nutritional facts': 'Goat milk has a higher proportion of medium-chain fatty acids. It is also high in calcium, vitamins A and K, phosphorus, thiamin and niacin. Goat milk and, therefore, cheeses contain anti-inflammatory enzymes.',
    'The grand history': 'First created by aliens on the planet Neptune after the Netherlands sent a probe into space in 1749 containing 3 young goats. To the surprise of the Dutch, the probe returned, but instead of goats, on the inside they found a mason jar full of goat's cheese. On the jar was a note that read “You better giveus more goats or else we won't give you more cheese”. The Dutch were shocked by this and upon tasting the cheese were even more shocked by the fact that the cheese was the best thing they had ever tasted. They sent 1000s of goats to Neptune over the next 37 years, but eventually they ran out so they couldn’t get any more goat cheese from the aliens. This meant they had to make their own.',
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

 const pill = document.querySelector('.pill');
 const next = document.querySelector('.next');
 const wrapper = document.querySelector('.hi');

// Function to call when next button is clicked
function nextCard () {
    // Reload page when flashcards run out
    if (n >= entries.length) {
        cardBox.textContent = '';
        pill.classList.remove('hidden');
        next.classList.add('hidden');
        wrapper.classList.add('rainbow');
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

// Function to call when convert is clicked
function convertClick () {
    initial.classList.add('hidden');
    next.classList.remove('hidden');
    nextCard();
};

const convert = document.getElementById('convert');

convert.addEventListener('click', convertClick);

next.addEventListener('click', nextCard);
