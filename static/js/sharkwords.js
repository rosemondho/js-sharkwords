const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//
 for (const char in word) {
    $('#word-container').append(`<div class="letter-box ${char}"></div>`);
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  for (letter in ALPHABET){
  $('#letter-buttons').append(`<button>${ALPHABET.charAt(letter)}</button>`);}
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  const button = $(buttonEl);
 //const htmlEl = document.querySelector('#first');
 //const jQueryEl = $(htmlEl);
 $(buttonEl).attr('disabled', true);
//  document.getElementById('#letter-buttons').disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => {
  return $(`.${letter}`)[0] !== undefined;
};

// Called when `lettertms word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  return $(`.${letter}`).html(letter);
};

// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.
//
const handleWrongGuess = () => {
  numWrong++;
  $('#shark-img img').attr('src', `/static/images/guess${numWrong}.png`);

  if (numWrong === 5) {
    $('button').attr('disabled', true);
    $('#play-again').css({ display: 'block' });
  }
};

//  Reset game state. Called before restarting the game.
//
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
  });
})();