const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el")
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el")
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let cards = [];

let player = {
    name: "Femi",
    chips: 200
};

playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
     let randomNumber = Math.floor( Math.random() * 13 ) +  1;
     if (randomNumber > 10) {
         return 10;
     } else if (randomNumber === 1 ) {
        return 11;
     } else {
        return randomNumber;
     }
  
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {
    if (sum <= 20) {
        message = "Do you want a draw a new card?";
     }else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
     }else {
        message = "You're out of the game!";
         isAlive = false;
     }

     sumEl.textContent = "Sum: " + sum;
     cardsEl.textContent = "Cards: ";

     for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
     }

     messageEl.textContent = message;
     
}


function newCard() {
   if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
   }
   
}


