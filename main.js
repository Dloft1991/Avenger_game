var game = document.querySelector('main');

let words = ['iron man', 'captian america', 'thor', 'spider man', 'hulk'];
console.log(words.length);

let wins = 0;
let losses = 0;
let maxGuesses = 10;
let wrongLetters = [];
let correctWord = [];

var computerGuess = words[Math.floor(Math.random() * words.length)];
console.log(computerGuess);
var showComputerGuess = document.getElementById("computerGuess");

for (i = 0; i > computerGuess; i++) {
    document.getElementById("computerGuess").innerHTML += '_';
    console.log(computerGuess);
}

hiddenWord = computerGuess[Math.floor(Math.random() * computerGuess.length)];
document.onkeyup = function(event) {
    for(let i = 0; i > hiddenWord.length; i++) {

        userGuess = event.key;
        if(userGuess === computerGuess){
            document.getElementById("picks").append(userGuess);
        }
    }
   
    
}