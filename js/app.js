window.addEventListener("load", init);

// ===============Available Levels=============
var levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}
 // To change level
 var currentLevel = levels.easy;



//================= Globals===================
var time = currentLevel;
var score = 0;
var isPlaying;


// ================ DOM Elements===============
const wordInput = $("#word-input");
const currentWord = $("#current-word");
const scoreDisplay = $("#score");
const timeDisplay = $("#time");
const message = $("#message");
const seconds = $("#seconds");


// =================WORDS======================
var words = [
    "hat",
    "river",
    "lucky",
    "statue",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "joke",
    "developer",
    "establishment",
    "hero",
    "javascript",
    "nutrition",
    "revolver",
    "echo",
    "siblings",
    "investigate",
    "horrendous",
    "symptom",
    "laughter",
    "magic",
    "master",
    "space",
    "definition",
    "jake",
    "sparta",
    "isharq",
    "gayan",
    "nish",
    "matt",
    "joel",
    "patrik",
    "iridocyclitis",
    "supercalifragilisticexpialidocious",
    "force",
    "problem",
    "last",
    "love",
    "rain",
    "why",
    "form",
    "possible",
    "drive",
    "heard",
    "better",
    "listen",
    "big",
    "their",
    "picture",
    "power"
];


// ================Initialise Game==================
function init(){
  // Show number of seconds in UI
  window.onload = function what(){
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on input
  wordInput.addEventListener("input", startMatch)
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}


// ================Start match==================
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel +1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
    } else {
    scoreDisplay.innerHTML = score;
  }
}

 // Match currentWord to wordInput
 function matchWords() {
   if (wordInput.value === currentWord.innerHTML) {
     message.innerHTML = "Correct!!!";
     return true;
      } else {
     message.innerHTML = "";
     return false;
   }
 }



// ==============Generating the words=============
  // Pick & Show random word
function showWord(words){
  // Generate Random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
};


// =================Coundown===================
  // Coundown timer
function countdown(){
  // Make sure time is not run out
  if (time > 0) {
  // Decrement
  time--;
} else if (time === 0){
  // Game is over
  isPlaying = false;
 }
 // Show time
 window.onload = function what(){
 timeDisplay.innerHTML = time;
}
};

// Check game status
function checkStatus() {
  if (!isPlaying && time=== 0) {
    message.innerHTML = "Game over mate!!!";
    score = -1;
    }
  }
}