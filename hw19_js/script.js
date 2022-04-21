//task1
let arr = [];
for(var i = 0; i < 10; i++){
  let num = Number( prompt('Введите число', '')) ;
  if(num =='' || num == null || isNaN(num)){
    alert('Введите число');
    i--;
  }
  else{
    arr.push(num);
  }
}

let test = [],
num1 = Math.max(...arr),
num2 = -1,
num3 = -1;
for(let i = 0; i < arr.length; i++){
  if( arr[i] > num2 && arr[i] < num1){
    num2 = arr[i];
  }
}
for(let i = 0; i < arr.length; i++){
  if(arr[i] > num3 && arr[i] < num2){
    num3 = arr[i];
  }
}
test.push([arr.indexOf(num1),num1], [arr.indexOf(num2),num2],[arr.indexOf(num3),num3]);
console.log('Победители: ' + test[0][0] + ':' + test[0][1] + ' очков, ' + test[1][0] + ':' + test[1][1] + ' очков, ' + test[2][0] + ':' + test[2][1] + ' очков');



//task2
function arrCard() {
  let suit = ['♤', '♡', '♧', '♢'];
  let card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let deck = [];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < card.length; j++) {
      deck.push(card[j] + ' of ' + suit[i]);
    }
  }
  return deck;
}

let randForCard = (cards) => {
    let rand = Math.floor(Math.random() * cards.length);
    let forCards = [];
    for (let i = 0; i < 4; i++) {
        forCards.push(cards[rand]);
        cards.splice(rand, 1);
    }
    return forCards;
}

console.log(randForCard(arrCard()));

//task3
let name = prompt('Введи свое имя, странник'),
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

if (isBadName === true) {
  console.log(replics[0]);
} else {
  console.log(replics[1]);
}
