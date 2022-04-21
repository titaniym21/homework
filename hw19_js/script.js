// //task2
// let arrCard = () =>{
//     let suit = ['♤', '♡', '♧', '♢'];
//     let card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     let deck = [];
//     for (let i = 0; i < suit.length; i++) {
//         for (let j = 0; j < card.length; j++) {
//             deck.push(card[j] + ' of ' + suit[i]);
//         }
//     }
//     return deck;
// }

// let randForCard = (cards) => {
//     let rand = Math.floor(Math.random() * cards.length);
//     let forCards = [];
//     for (let i = 0; i < 4; i++) {
//         forCards.push(cards[rand]);
//     }
//     return forCards;
// }

// console.log(randForCard(arrCard()));

//task3
let name = "шип", //prompt('Введи свое имя, странник'),
  letters = ["ш", "щ", "ч", "ж"],
  nameLen = name.length;
isBadName = false;
replics = [
  "Подозрительное у тебя имя, странник. Дам-ка я тебе задание на убийство крыс в канализации.",
  "Отличное имя, странник. Вот тебе квест на убийство дракона.",
];

for (let i = 0; i < nameLen; i++) {
  if (letters.indexOf(name[i].toLowerCase()) > -1) {
    isBadName = true;
    break;
  }
}

if (isBadName == "true") {
  console.log(replics[0]);
} else {
  console.log(replics[1]);
}
