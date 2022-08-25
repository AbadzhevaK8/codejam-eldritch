// ---------------------------- Data and variables.
let diffDeckGreen = [];
let diffDeckBrown = [];
let diffDeckBlue = [];

let firstStageDeck = [];
let secondStageDeck = [];
let thirdStageDeck = [];

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
    cardFace: "./assets/Ancients/Azathoth.jpg",
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
    cardFace: "./assets/Ancients/Cthulthu.jpg",
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
    cardFace: "./assets/Ancients/IogSothoth.jpg",
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
    cardFace: "./assets/Ancients/ShubNiggurath.jpg",
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
    cardFace: "./assets/MythicCards/blue/blue1.jpg",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    cardFace: "./assets/MythicCards/blue/blue2.jpg",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    cardFace: "./assets/MythicCards/blue/blue3.jpg",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    cardFace: "./assets/MythicCards/blue/blue4.jpg",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    cardFace: "./assets/MythicCards/blue/blue5.jpg",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    cardFace: "./assets/MythicCards/blue/blue6.jpg",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    cardFace: "./assets/MythicCards/blue/blue7.jpg",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    cardFace: "./assets/MythicCards/blue/blue8.jpg",
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    cardFace: "./assets/MythicCards/blue/blue9.jpg",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    cardFace: "./assets/MythicCards/blue/blue10.jpg",
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    cardFace: "./assets/MythicCards/blue/blue11.jpg",
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    cardFace: "./assets/MythicCards/blue/blue12.jpg",
    difficulty: 'normal',
    color: 'blue'
  },
]

const cardsDataBrown = [
  {
    id: 'brown1',
    cardFace: "./assets/MythicCards/brown/brown1.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    cardFace: "./assets/MythicCards/brown/brown2.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    cardFace: "./assets/MythicCards/brown/brown3.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    cardFace: "./assets/MythicCards/brown/brown4.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    cardFace: "./assets/MythicCards/brown/brown5.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    cardFace: "./assets/MythicCards/brown/brown6.jpg",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    cardFace: "./assets/MythicCards/brown/brown7.jpg",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    cardFace: "./assets/MythicCards/brown/brown8.jpg",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    cardFace: "./assets/MythicCards/brown/brown9.jpg",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    cardFace: "./assets/MythicCards/brown/brown10.jpg",
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    cardFace: "./assets/MythicCards/brown/brown11.jpg",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    cardFace: "./assets/MythicCards/brown/brown12.jpg",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    cardFace: "./assets/MythicCards/brown/brown13.jpg",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    cardFace: "./assets/MythicCards/brown/brown14.jpg",
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    cardFace: "./assets/MythicCards/brown/brown15.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    cardFace: "./assets/MythicCards/brown/brown16.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    cardFace: "./assets/MythicCards/brown/brown17.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    cardFace: "./assets/MythicCards/brown/brown18.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    cardFace: "./assets/MythicCards/brown/brown19.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    cardFace: "./assets/MythicCards/brown/brown20.jpg",
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    cardFace: "./assets/MythicCards/brown/brown21.jpg",
    difficulty: 'easy',
    color: 'brown'
  },
]

const cardsDataGreen = [
  {
    id: 'green1',
    cardFace: "./assets/MythicCards/green/green1.jpg",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    cardFace: "./assets/MythicCards/green/green2.jpg",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    cardFace: "./assets/MythicCards/green/green3.jpg",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    cardFace: "./assets/MythicCards/green/green4.jpg",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    cardFace: "./assets/MythicCards/green/green5.jpg",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    cardFace: "./assets/MythicCards/green/green6.jpg",
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    cardFace: "./assets/MythicCards/green/green7.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    cardFace: "./assets/MythicCards/green/green8.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    cardFace: "./assets/MythicCards/green/green9.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    cardFace: "./assets/MythicCards/green/green10.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    cardFace: "./assets/MythicCards/green/green11.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    cardFace: "./assets/MythicCards/green/green12.jpg",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    cardFace: "./assets/MythicCards/green/green13.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    cardFace: "./assets/MythicCards/green/green14.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    cardFace: "./assets/MythicCards/green/green15.jpg",
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    cardFace: "./assets/MythicCards/green/green16.jpg",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    cardFace: "./assets/MythicCards/green/green17.jpg",
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    cardFace: "./assets/MythicCards/green/green18.jpg",
    difficulty: 'easy',
    color: 'green'
  },
]


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
  document.querySelector('.deck').classList.remove('hidden');
  document.querySelector('.last-card').classList.add('hidden');
  let startGameCounter = ancientsData[currentAncient];
  showGameCounter(startGameCounter);

  // Clean diffDecks.

  diffDeckGreen = [];
  diffDeckBrown = [];
  diffDeckBlue = [];

  firstStageDeck = [];
  secondStageDeck = [];
  thirdStageDeck = [];

  resultDeck = [];
  cardCounter = 0;

  // Get numbers of colored cards.

  function getCountCardsOfAncient(currentAncient, colorOfCards) {
    return ancientsData[currentAncient].firstStage[colorOfCards] + ancientsData[currentAncient].secondStage[colorOfCards] + ancientsData[currentAncient].thirdStage[colorOfCards];
  }

  let greenCardsCount = getCountCardsOfAncient(currentAncient, "greenCards");
  let brownCardsCount = getCountCardsOfAncient(currentAncient, "brownCards");
  let blueCardsCount = getCountCardsOfAncient(currentAncient, "blueCards");


  // Functions for different mods.
  function getVeryEasyDeck(cardsDataColor, diffDeckColor, colorCardCount) {
    for (let i = 0; i < cardsDataColor.length; i++) {
      if (cardsDataColor[i].difficulty === 'easy' && diffDeckColor.length < colorCardCount) {
        diffDeckColor.push(cardsDataColor[i]);
      }
    }
    while (diffDeckColor.length < colorCardCount) {
      let item = cardsDataColor[Math.floor(Math.random() * cardsDataColor.length)];
      if (item.difficulty === 'normal' && !diffDeckColor.includes(item)) {
        if (diffDeckColor.length < colorCardCount) {
          diffDeckColor.push(item);
        }
      }
    }

  }

  function getEasyDeck(cardsDataColor, diffDeckColor, colorCardCount) {
    while (diffDeckColor.length < colorCardCount) {
      let itemEasy = cardsDataColor[Math.floor(Math.random() * cardsDataColor.length)];
      if (itemEasy.difficulty !== 'hard' && !diffDeckColor.includes(itemEasy)) {
        if (diffDeckColor.length < colorCardCount) {
          diffDeckColor.push(itemEasy);
        }
      }
    }
  }

  function getNormalDeck(cardsDataColor, diffDeckColor, colorCardCount) {
    while (diffDeckColor.length < colorCardCount) {
      let itemNormal = cardsDataColor[Math.floor(Math.random() * cardsDataColor.length)];
      if (!diffDeckColor.includes(itemNormal)) {
        if (diffDeckColor.length < colorCardCount) {
          diffDeckColor.push(itemNormal);
        }
      }
    }
  }

  function getHardDeck(cardsDataColor, diffDeckColor, colorCardCount) {
    while (diffDeckColor.length < colorCardCount) {
      let itemEasy = cardsDataColor[Math.floor(Math.random() * cardsDataColor.length)];
      if (itemEasy.difficulty !== 'easy' && !diffDeckColor.includes(itemEasy)) {
        if (diffDeckColor.length < colorCardCount) {
          diffDeckColor.push(itemEasy);
        }
      }
    }
  }

  function getVeryHardDeck(cardsDataColor, diffDeckColor, colorCardCount) {
    for (let i = 0; i < cardsDataColor.length; i++) {
      if (cardsDataColor[i].difficulty === 'hard' && diffDeckColor.length < colorCardCount) {
        diffDeckColor.push(cardsDataColor[i]);
      }
    }
    while (diffDeckColor.length < colorCardCount) {
      let item = cardsDataColor[Math.floor(Math.random() * cardsDataColor.length)];
      if (item.difficulty === 'normal' && !diffDeckColor.includes(item)) {
        if (diffDeckColor.length < colorCardCount) {
          diffDeckColor.push(item);
        }
      }
    }
    // console.log(diffDeckColor);
  }

  if (currentDifficult === "veryEasy") {     // VeryEasy mode deck.
    getVeryEasyDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getVeryEasyDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getVeryEasyDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  } else if (currentDifficult === "easy") {   // Easy mode deck.
    getEasyDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getEasyDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getEasyDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  } else if (currentDifficult === "normal") {   // Normal mode deck.
    getNormalDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getNormalDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getNormalDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  } else if (currentDifficult === "hard") {   // Hard mode deck.
    getHardDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getHardDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getHardDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  } else if (currentDifficult === "veryHard") {   // VeryHard mode deck.
    getVeryHardDeck(cardsDataGreen, diffDeckGreen, greenCardsCount);
    getVeryHardDeck(cardsDataBrown, diffDeckBrown, brownCardsCount);
    getVeryHardDeck(cardsDataBlue, diffDeckBlue, blueCardsCount);
  }

  function getStageDeck(currentAncient, stageNum, diffDeckGreen, diffDeckBrown, diffDeckBlue, stageDeck) {
    let greenCardsStageNum = ancientsData[currentAncient][stageNum].greenCards;
    let brownCardsStageNum = ancientsData[currentAncient][stageNum].brownCards;
    let blueCardsStageNum = ancientsData[currentAncient][stageNum].blueCards;

    for (let i = greenCardsStageNum; i > 0; i--) {
      let itemG = diffDeckGreen[Math.floor(Math.random() * diffDeckGreen.length)];
      let itemGIdx = diffDeckGreen.indexOf(itemG);
      diffDeckGreen.splice(itemGIdx, 1);
      stageDeck.push(itemG);
    }
    for (let i = brownCardsStageNum; i > 0; i--) {
      let itemBn = diffDeckBrown[Math.floor(Math.random() * diffDeckBrown.length)];
      let itemBnIdx = diffDeckBrown.indexOf(itemBn);
      diffDeckBrown.splice(itemBnIdx, 1);
      stageDeck.push(itemBn);
    }
    for (let i = blueCardsStageNum; i > 0; i--) {
      let itemBl = diffDeckBlue[Math.floor(Math.random() * diffDeckBlue.length)];
      let itemBlIdx = diffDeckBlue.indexOf(itemBl);
      diffDeckBlue.splice(itemBlIdx, 1);
      stageDeck.push(itemBl);
    }

  }

  getStageDeck(currentAncient, "firstStage", diffDeckGreen, diffDeckBrown, diffDeckBlue, firstStageDeck);
  getStageDeck(currentAncient, "secondStage", diffDeckGreen, diffDeckBrown, diffDeckBlue, secondStageDeck);
  getStageDeck(currentAncient, "thirdStage", diffDeckGreen, diffDeckBrown, diffDeckBlue, thirdStageDeck);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(firstStageDeck);
  shuffle(secondStageDeck);
  shuffle(thirdStageDeck);

  resultDeck = firstStageDeck.concat(secondStageDeck.concat(thirdStageDeck));
  document.querySelector('.thirdStageTxt').classList.remove('active');

})


function showGameCounter(gameCounter) {
  document.querySelector('.st1green').innerHTML = gameCounter.firstStage.greenCards;
  document.querySelector('.st1brown').innerHTML = gameCounter.firstStage.brownCards;
  document.querySelector('.st1blue').innerHTML = gameCounter.firstStage.blueCards;
  document.querySelector('.st2green').innerHTML = gameCounter.secondStage.greenCards;
  document.querySelector('.st2brown').innerHTML = gameCounter.secondStage.brownCards;
  document.querySelector('.st2blue').innerHTML = gameCounter.secondStage.blueCards;
  document.querySelector('.st3green').innerHTML = gameCounter.thirdStage.greenCards;
  document.querySelector('.st3brown').innerHTML = gameCounter.thirdStage.brownCards;
  document.querySelector('.st3blue').innerHTML = gameCounter.thirdStage.blueCards;
}

// ------------------------------------------------------------------------------------------- Show card logic.

const imageCard = document.querySelector('.last-card');
const cardBackground = document.querySelector('.deck');
let cardCounter = 0;

function showCard(resultDeck, gC) {
  const firstStageLength = gC.firstStage.greenCards + gC.firstStage.brownCards + gC.firstStage.blueCards;
  const secondStageLength = gC.secondStage.greenCards + gC.secondStage.brownCards + gC.secondStage.blueCards;

  document.querySelector('.last-card').classList.remove('hidden');
  let deckLength = resultDeck.length;
  
  const cardName = resultDeck[cardCounter].id;
  const cardColor = resultDeck[cardCounter].color;

  if (cardCounter < deckLength) {
    const img = new Image();
    img.src = `./assets/MythicCards/${cardColor}/${cardName}.jpg`;

    img.onload = () => {
      imageCard.style.backgroundImage = `url(${img.src})`;
    };

    cardCounter++;

    if (cardCounter === deckLength) {
      document.querySelector('.deck').classList.add('hidden');
    }
  }
  
  // ------------------ counter logic.
  if (firstStageLength) {
    document.querySelector('.firstStageTxt').classList.add('active');
    if (cardColor == 'green') {
      gC.firstStage.greenCards = gC.firstStage.greenCards - 1;
    } else if (cardColor == 'brown') {
      gC.firstStage.brownCards = gC.firstStage.brownCards - 1;
    } else {
      gC.firstStage.blueCards = gC.firstStage.blueCards - 1;
    }
  } else if (secondStageLength){
    document.querySelector('.firstStageTxt').classList.remove('active');
    document.querySelector('.secondStageTxt').classList.add('active');
    if (cardColor == 'green') {
      gC.secondStage.greenCards = gC.secondStage.greenCards - 1;
    } else if (cardColor == 'brown') {
      gC.secondStage.brownCards = gC.secondStage.brownCards - 1;
    } else {
      gC.secondStage.blueCards = gC.secondStage.blueCards - 1;
    }
  } else {
    document.querySelector('.secondStageTxt').classList.remove('active');
    document.querySelector('.thirdStageTxt').classList.add('active');
    if (cardColor == 'green') {
      gC.thirdStage.greenCards = gC.thirdStage.greenCards - 1;
    } else if (cardColor == 'brown') {
      gC.thirdStage.brownCards = gC.thirdStage.brownCards - 1;
    } else {
      gC.thirdStage.blueCards = gC.thirdStage.blueCards - 1;
    }
  } 
  showGameCounter(ancientsData[currentAncient]);
}

cardBackground.addEventListener('click', () => {
  showCard(resultDeck, ancientsData[currentAncient]);
})

