// ---------------------------- Data and variables.
let diffDeckGreen = [];
let diffDeckBrown = [];
let diffDeckBlue = [];


let tempDeck = [];
let resultDeck = [];
let currentAncient = 0;
let currentDifficult = '';

const difficulties = [
  {
    id: 'veryEasy',
    name: 'Очень низкая'
  },
  {
    id: 'easy',
    name: 'Низкая'
  },
  {
    id: 'normal',
    name: 'Средняя'
  },
  {
    id: 'hard',
    name: 'Высокая'
  },
  {
    id: 'veryHard',
    name: 'Очень высокая'
  }
]

const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: "./assets/Ancients/Azathoth.png",
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: "./assets/Ancients/Cthulthu.png",
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: "./assets/Ancients/IogSothoth.png",
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: "./assets/Ancients/ShubNiggurath.png",
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

const cardsDataBlue = [
  {
    id: 'blue1',
    cardFace: "./assets/MythicCards/blue/blue1.png",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    cardFace: "./assets/MythicCards/blue/blue2.png",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    cardFace: "./assets/MythicCards/blue/blue3.png",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    cardFace: "./assets/MythicCards/blue/blue4.png",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    cardFace: "./assets/MythicCards/blue/blue5.png",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    cardFace: "./assets/MythicCards/blue/blue6.png",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    cardFace: "./assets/MythicCards/blue/blue7.png",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    cardFace: "./assets/MythicCards/blue/blue8.png",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    cardFace: "./assets/MythicCards/blue/blue9.png",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    cardFace: "./assets/MythicCards/blue/blue10.png",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    cardFace: "./assets/MythicCards/blue/blue11.png",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    cardFace: "./assets/MythicCards/blue/blue12.png",
    difficulty: 'normal',
    color: 'blue'
  },
]

const cardsDataBrown = [
  {
    id: 'brown1',
    cardFace: "./assets/MythicCards/brown/brown1.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    cardFace: "./assets/MythicCards/brown/brown2.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    cardFace: "./assets/MythicCards/brown/brown3.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    cardFace: "./assets/MythicCards/brown/brown4.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    cardFace: "./assets/MythicCards/brown/brown5.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    cardFace: "./assets/MythicCards/brown/brown6.png",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    cardFace: "./assets/MythicCards/brown/brown7.png",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    cardFace: "./assets/MythicCards/brown/brown8.png",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    cardFace: "./assets/MythicCards/brown/brown9.png",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    cardFace: "./assets/MythicCards/brown/brown10.png",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    cardFace: "./assets/MythicCards/brown/brown11.png",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    cardFace: "./assets/MythicCards/brown/brown12.png",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    cardFace: "./assets/MythicCards/brown/brown13.png",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    cardFace: "./assets/MythicCards/brown/brown14.png",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    cardFace: "./assets/MythicCards/brown/brown15.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    cardFace: "./assets/MythicCards/brown/brown16.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    cardFace: "./assets/MythicCards/brown/brown17.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    cardFace: "./assets/MythicCards/brown/brown18.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    cardFace: "./assets/MythicCards/brown/brown19.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    cardFace: "./assets/MythicCards/brown/brown20.png",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    cardFace: "./assets/MythicCards/brown/brown21.png",
    difficulty: 'easy',
    color: 'brown'
  },
]

const cardsDataGreen = [
  {
    id: 'green1',
    cardFace: "./assets/MythicCards/green/green1.png",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    cardFace: "./assets/MythicCards/green/green2.png",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    cardFace: "./assets/MythicCards/green/green3.png",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    cardFace: "./assets/MythicCards/green/green4.png",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    cardFace: "./assets/MythicCards/green/green5.png",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    cardFace: "./assets/MythicCards/green/green6.png",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    cardFace: "./assets/MythicCards/green/green7.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    cardFace: "./assets/MythicCards/green/green8.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    cardFace: "./assets/MythicCards/green/green9.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    cardFace: "./assets/MythicCards/green/green10.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    cardFace: "./assets/MythicCards/green/green11.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    cardFace: "./assets/MythicCards/green/green12.png",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    cardFace: "./assets/MythicCards/green/green13.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    cardFace: "./assets/MythicCards/green/green14.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    cardFace: "./assets/MythicCards/green/green15.png",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    cardFace: "./assets/MythicCards/green/green16.png",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    cardFace: "./assets/MythicCards/green/green17.png",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    cardFace: "./assets/MythicCards/green/green18.png",
    difficulty: 'easy',
    color: 'green'
  },
]

// --------------------------------------------- Show a card logic.

const imageCard = document.querySelector('.last-card');
const cardBackground = document.querySelector('.deck');

function randomCard() {
  let randomNum = Math.ceil(Math.random() * (cardsDataBlue.length));
  console.log(randomNum);
  const cardNum = String(randomNum);
  const img = new Image();

  img.src = `./assets/MythicCards/blue/blue${cardNum}.png`;
  img.onload = () => {
    imageCard.style.backgroundImage = `url(${img.src})`;
  };
}

cardBackground.addEventListener('click', () => {
  randomCard();
})

// ---------------------------------------------- Select an ancient logic.
const difficultiesBtns = document.querySelectorAll('.difficulty');

window.onload = function () {

  removeSelectedAncient();
  addAncientClickHandler();
  addDifficultClickHandler();
}


const addAncientClickHandler = () => {
  document.querySelector('.ancients-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('ancient-card')) {
      if (e.target.classList.contains('Cthulthu')) {
        currentAncient = 1;
      } else if (e.target.classList.contains('IogSothoth')) {
        currentAncient = 2;
      } else if (e.target.classList.contains('ShubNiggurath')) {
        currentAncient = 3;
      } else {
        currentAncient = 0;
      }

      let clickedA = e.target;
      removeSelectedAncient();
      selectClickedAncient(clickedA);
      showDiffs();
    }
  })
}

const removeSelectedAncient = () => {
  let ancientsCards = document.querySelectorAll('.ancient-card');
  ancientsCards.forEach(aCard => {
    aCard.classList.remove('active');
  })
}

const selectClickedAncient = (clickedA) => {
  clickedA.classList.add('active');
}
// Show diffs
const showDiffs = () => {
  difficultiesBtns.forEach(function (item) {
    item.classList.remove('hidden');
  });
}

// ---------------------------------------- Select difficult logic.

const addDifficultClickHandler = () => {
  document.querySelector('.difficulty-container').addEventListener('click', (eDiff) => {
    if (eDiff.target.classList.contains('difficulty')) {

      if (eDiff.target.classList.contains('veryEasy')) {
        currentDifficult = "veryEasy";
      } else if (eDiff.target.classList.contains('easy')) {
        currentDifficult = "easy";
      } else if (eDiff.target.classList.contains('normal')) {
        currentDifficult = "normal";
      } else if (eDiff.target.classList.contains('hard')) {
        currentDifficult = "hard";
      } else {
        currentDifficult = "veryHard";
      }

      let clickedD = eDiff.target;
      removeSelectedDifficult();
      selectClickedDifficult(clickedD);
      document.querySelector('.makeDeck').classList.remove('hidden');
    }
  })
}

const removeSelectedDifficult = () => {
  difficultiesBtns.forEach(d => {
    d.classList.remove('active');
  })
}

const selectClickedDifficult = (clickedD) => {
  clickedD.classList.add('active');
}

// --------------------------------------------------------------------------- Deck generation.

const makeDeckBtn = document.querySelector('.makeDeck');

makeDeckBtn.addEventListener('click', () => {
  document.querySelector('.deck-container').classList.remove('hidden');

  // Clean diffDecks.

  diffDeckGreen = [];
  diffDeckBrown = [];
  diffDeckBlue = [];

  // Get numbers of colored cards.

  function getCountCardsOfAncient (currentAncient, colorOfCards) {
    return ancientsData[currentAncient].firstStage[colorOfCards] + ancientsData[currentAncient].secondStage[colorOfCards] + ancientsData[currentAncient].thirdStage[colorOfCards];
  }

  let greenCardsCount = getCountCardsOfAncient(currentAncient, "greenCards");
  let brownCardsCount = getCountCardsOfAncient(currentAncient, "brownCards");
  let blueCardsCount = getCountCardsOfAncient(currentAncient, "blueCards");

  console.log(greenCardsCount);
  console.log(brownCardsCount);
  console.log(blueCardsCount);
  console.log(currentDifficult);

  // Functions for different mods.
  function getVeryEasyDeck (cardsDataColor, diffDeckColor, colorCardCount){
    for (let i = 0; i < cardsDataColor.length; i++) {
      if (cardsDataColor[i].difficulty === 'easy' && diffDeckColor.length < colorCardCount) {
        diffDeckColor.push(cardsDataColor[i]);
      }
    }

    while (diffDeckColor.length < colorCardCount) {
      let item = cardsDataColor[Math.floor(Math.random()*cardsDataColor.length)];
        if (item.difficulty === 'normal' && !diffDeckColor.includes(item)) {
            if (diffDeckColor.length < colorCardCount) {
              diffDeckColor.push(item);
          }
        }
    }
    console.log(diffDeckColor);
  }

  function getEasyDeck (cardsDataColor, diffDeckColor, colorCardCount) {
    while (diffDeckColor.length < colorCardCount) {
      let itemEasy = cardsDataColor[Math.floor(Math.random()*cardsDataColor.length)];
        if (itemEasy.difficulty !== 'hard' && !diffDeckColor.includes(itemEasy)) {
            if (diffDeckColor.length < colorCardCount) {
              diffDeckColor.push(itemEasy);
          }
        }
    }
    console.log(diffDeckColor);
  }

  if (currentDifficult === "veryEasy") {     // VeryEasy mode deck.
    getVeryEasyDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getVeryEasyDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getVeryEasyDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  } else if (currentDifficult === "easy"){   // Easy mode deck.
    getEasyDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getEasyDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getEasyDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  }
})



