'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {

        displayMessage("🚫 Enter a number! 🚫");

    } else if (guess === secretNumber) {

            displayMessage("Correct guess !!! 🎉");
        document.querySelector('body').style.backgroundColor = '#4cbf29'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess < secretNumber ? "Guess Higher ! 📈" : "Guess Lower ! 📉");
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage("You Lost ! 💥");
            document.querySelector('.score') = 0;
        }

    }

    // else if (guess < secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             "Guess Higher ! 📈"
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent =
    //             "You Lost ! 💥"
    //         document.querySelector('.score') = 0;
    //     }

    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             "Guess Lower ! 📉"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             "You Lost ! 💥"
    //         document.querySelector('.score') = 0;
    //     }
    // }

});

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("🤔 Guess A Number !");
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'

})