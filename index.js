var dice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var firstPlayerDice = dice[num1 - 1];
var secondPlayerDice = dice[num2 - 1];

document.querySelector("#img1").setAttribute("src", firstPlayerDice);
document.querySelector("#img2").setAttribute("src", secondPlayerDice);

if (num1 > num2) {
  document.querySelector("h1").textContent = "🎉Player 1 won";
} else if (num2 > num1) {
  document.querySelector("h1").textContent = "Player 2 won🎉";
} else {
  document.querySelector("h1").textContent = "♟DRAW♟";
}
