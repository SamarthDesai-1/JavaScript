const guessNummber = () => {
    let randNumber = Math.floor(Math.random() * 100);
    console.log(randNumber);
    let userGuess;
    let score = 0;
    while (userGuess != randNumber) {
        userGuess = prompt("Enter your guess : ");
        if (userGuess < randNumber) {
            console.log("Guess number is smaller than random number.");
        }
        else if (userGuess > randNumber) {
            console.log("Guess number is bigger than random number.");
        }
        score = score + 1;
    }
    console.log("Right guess.");
    console.log("Your score : " ,100 - score);
}
guessNummber();