let words = ["котомото"];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let findedLetters = [];

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадай букву, или нажми 'Отмена' если сдаёшься").toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Нужно ввести только одну букву");

  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        findedLetters.push(guess);
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);