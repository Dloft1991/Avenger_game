var game = document.querySelector('main');

let words = ['iron man', 'captian america', 'thor', 'spider man', 'hulk'];
console.log(words.length);

let wins = 0;
let losses = 0;
let maxGuesses = 10;
let wrongLetters = [];
let correctWord = '';

const guessedElement = document.getElementById("maxGuesses");
guessedElement.textContent = maxGuesses;

var computerGuess = words[Math.floor(Math.random() * words.length)];
console.log(computerGuess);

for (i = 0; i > computerGuess.length; i++) {

    document.getElementById("computerGuess").append += '_';
    console.log(computerGuess);
}

document.onkeyup = function(event) {
       const userGuess = event.key;

       

        document.getElementById("picks").append(userGuess);
        

           if (computerGuess.indexOf(userGuess) > -1) {

               if((userGuess === computerGuess) && (maxGuesses > 0)){
                   correctWord = [];
                   
               }
               
               if((userGuess  != computerGuess) && (maxGuesses > 0)) {
                   maxGuesses --;
                   guessedElement.textContent = maxGuesses;
                   console.log(maxGuesses);
                   correctWord = '';
                   document.getElementById("correctWord").append(userGuess);
               }
               
           }
           
           
        }
    
        