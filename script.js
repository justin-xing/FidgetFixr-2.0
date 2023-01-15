// Upload file
function uploadFile() {

    var files = document.getElementById("file").files;
 
    if(files.length > 0 ){
 
       var formData = new FormData();
       formData.append("file", files[0]);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "ajaxfile.php", true);
 
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
 
            var response = this.responseText;
            if(response == 1){
               alert("Upload successfully.");
            }else{
               alert("File not uploaded.");
            }
          }
       };
 
       // Send request with data
       xhttp.send(formData);
 
    }else{
       alert("Please select a file");
    }
 
 }

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