const deck = [
  { name: "Hearts", value: 2, image: "/image/2_of_hearts.png" },
  { name: "Hearts", value: 3, image: "/image/3_of_hearts.png" },
  { name: "Hearts", value: 4, image: "/image/4_of_hearts.png" },
  { name: "Hearts", value: 5, image: "/image/5_of_hearts.png" },
  { name: "Hearts", value: 6, image: "/image/6_of_hearts.png" },
  { name: "Hearts", value: 7, image: "/image/7_of_hearts.png" },
  { name: "Hearts", value: 8, image: "/image/8_of_hearts.png" },
  { name: "Hearts", value: 9, image: "/image/9_of_hearts.png" },
  { name: "Hearts", value: 10, image: "/image/10_of_hearts.png" },
  { name: "Hearts", value: 11, image: "/image/jack_of_hearts.png" },
  { name: "Hearts", value: 12, image: "/image/queen_of_hearts.png" },
  { name: "Hearts", value: 13, image: "/image/king_of_hearts.png" },
  { name: "Hearts", value: 14, image: "/image/ace_of_hearts.png" },
  { name: "Clubs", value: 2, image: "/image/2_of_clubs.png" },
  { name: "Clubs", value: 3, image: "/image/3_of_clubs.png" },
  { name: "Clubs", value: 4, image: "/image/4_of_clubs.png" },
  { name: "Clubs", value: 5, image: "/image/5_of_clubs.png" },
  { name: "Clubs", value: 6, image: "/image/6_of_clubs.png" },
  { name: "Clubs", value: 7, image: "/image/7_of_clubs.png" },
  { name: "Clubs", value: 8, image: "/image/8_of_clubs.png" },
  { name: "Clubs", value: 9, image: "/image/9_of_clubs.png" },
  { name: "Clubs", value: 10, image: "/image/10_of_clubs.png" },
  { name: "Clubs", value: 11, image: "/image/jack_of_clubs.png" },
  { name: "Clubs", value: 12, image: "/image/queen_of_clubs.png" },
  { name: "Clubs", value: 13, image: "/image/king_of_clubs.png" },
  { name: "Clubs", value: 14, image: "/image/ace_of_clubs.png" },
  { name: "Diamonds", value: 2, image: "/image/2_of_diamonds.png" },
  { name: "Diamonds", value: 3, image: "/image/3_of_diamonds.png" },
  { name: "Diamonds", value: 4, image: "/image/4_of_diamonds.png" },
  { name: "Diamonds", value: 5, image: "/image/5_of_diamonds.png" },
  { name: "Diamonds", value: 6, image: "/image/6_of_diamonds.png" },
  { name: "Diamonds", value: 7, image: "/image/7_of_diamonds.png" },
  { name: "Diamonds", value: 8, image: "/image/8_of_diamonds.png" },
  { name: "Diamonds", value: 9, image: "/image/9_of_diamonds.png" },
  { name: "Diamonds", value: 10, image: "/image/10_of_diamonds.png" },
  { name: "Diamonds", value: 11, image: "/image/jack_of_diamonds.png" },
  { name: "Diamonds", value: 12, image: "/image/queen_of_diamonds.png" },
  { name: "Diamonds", value: 13, image: "/image/king_of_diamonds.png" },
  { name: "Diamonds", value: 14, image: "/image/ace_of_diamonds.png" },
  { name: "Spades", value: 2, image: "/image/2_of_spades.png" },
  { name: "Spades", value: 3, image: "/image/3_of_spades.png" },
  { name: "Spades", value: 4, image: "/image/4_of_spades.png" },
  { name: "Spades", value: 5, image: "/image/5_of_spades.png" },
  { name: "Spades", value: 6, image: "/image/6_of_spades.png" },
  { name: "Spades", value: 7, image: "/image/7_of_spades.png" },
  { name: "Spades", value: 8, image: "/image/8_of_spades.png" },
  { name: "Spades", value: 9, image: "/image/9_of_spades.png" },
  { name: "Spades", value: 10, image: "/image/10_of_spades.png" },
  { name: "Spades", value: 11, image: "/image/jack_of_spades.png" },
  { name: "Spades", value: 12, image: "/image/queen_of_spades.png" },
  { name: "Spades", value: 13, image: "/image/king_of_spades.png" },
  { name: "Spades", value: 14, image: "/image/ace_of_spades.png" },
];

let points = 0;
let chances = 2;
let cardsCounter;

let buttons = document.querySelectorAll(".play .button button");
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    const object = deck[Math.floor(Math.random() * deck.length)];

    deck.pop(object);
    cardsCounter = deck.length + 1;
    document.querySelector(".display img").src = `${object.image}`;
    document.querySelector(
      ".infoDiv .name"
    ).innerHTML = `<span>Name:</span>  ${object.name}`;
    document.querySelector(
      ".infoDiv .value"
    ).innerHTML = `<span>Value:</span>  ${object.value}`;
    document.querySelector(
      ".card-to-turn p"
    ).innerHTML = `<span>${cardsCounter}</span> cards left. `;
    if (cardsCounter < 2) {
      document.querySelector(
        ".play p"
      ).innerHTML = `<span>No enough cards left to play, click on the play button to play again!</span>`;
    }
  });
}

