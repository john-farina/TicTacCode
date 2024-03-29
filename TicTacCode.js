let squareCount = 0;
let roundCount = 0;
let wonGame = false;
let lostGame = false;
let twoPlayer = false;
let gridSize = 3;
let botThinking = false;

const body = document.querySelector("body");
const gameHeader = document.createElement("h1");
const buttonContainer = document.createElement("div");
const resetButton = document.createElement("button");
const gameModeButton = document.createElement("button");
const thinkingText = document.createElement("p");

buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(gameModeButton);

const Gameboard = (() => {
  const gameArray = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  function logArray() {
    console.log(gameArray);
  }

  function resetBoard() {
    roundCount = 0;
    wonGame = false;
    lostGame = false;
    twoPlayer = false;
    gridSize = 3;
    botThinking = false;

    for (let i = 0; i < gameArray.length; i++) {
      gameArray[i] = undefined;
    }
  }

  function add(mark, number) {
    gameArray[number] = mark;
  }

  return {
    gameArray,
    logArray,
    resetBoard,
    add,
  };
})();

function theRandomBrain() {
  setTimeout(() => {
    function random() {
      return Math.floor(Math.random() * 9);
    }

    let compChoice = random();

    if (Gameboard.gameArray[compChoice] === undefined) {
      roundCount++;

      Gameboard.gameArray[compChoice] = 0;

      botThinking = false;
      return;
    }

    if (wonGame || lostGame) {
      return;
    }

    theRandomBrain();
  }, 100);
}

function computerPlayer() {
  if (wonGame != true || lostGame != true) {
    botThinking = true;
    setTimeout(theRandomBrain(), 10);
  }
}

function createSquares() {
  const squares = document.createElement("div");
  const thisNumber = squareCount;

  squares.classList.add("gameSquares");
  squareCount++;

  //Update Squares Based off Array
  setInterval(() => {
    if (Gameboard.gameArray[thisNumber] === undefined) {
      squares.innerHTML = "";
    }

    if (Gameboard.gameArray[thisNumber] === 1) {
      squares.innerHTML = "X";
    }

    if (Gameboard.gameArray[thisNumber] === 0) {
      squares.innerHTML = "O";
    }
  }, 100);

  squares.addEventListener("click", () => {
    if (
      botThinking ||
      wonGame ||
      lostGame ||
      Gameboard.gameArray[thisNumber] !== undefined
    ) {
      return;
    }

    if (roundCount % 2 === 0) {
      roundCount++;

      Gameboard.gameArray[thisNumber] = 1;

      if (!twoPlayer) {
        computerPlayer();
      }
    } else {
      roundCount++;

      Gameboard.gameArray[thisNumber] = 0;
    }
  });

  return squares;
}

function createRows() {
  const gameRow = document.createElement("div");

  gameRow.classList.add("gameRow");

  for (let i = 0; i < gridSize; i++) {
    gameRow.appendChild(createSquares());
  }

  return gameRow;
}

function createGameBoard() {
  const gameBoardContainer = document.createElement("div");

  gameBoardContainer.classList.add("gameboard");

  for (let i = 0; i < gridSize; i++) {
    gameBoardContainer.appendChild(createRows());
  }

  body.appendChild(gameHeader);
  body.appendChild(thinkingText);
  body.appendChild(gameBoardContainer);
  body.appendChild(buttonContainer);
}

function gameLogic() {
  let Zero = Gameboard.gameArray[0];
  let One = Gameboard.gameArray[1];
  let Two = Gameboard.gameArray[2];
  let Three = Gameboard.gameArray[3];
  let Four = Gameboard.gameArray[4];
  let Five = Gameboard.gameArray[5];
  let Six = Gameboard.gameArray[6];
  let Seven = Gameboard.gameArray[7];
  let Eight = Gameboard.gameArray[8];

  //down
  //0,1,2
  //3,4,5
  //6,7,8

  if (
    (Zero === 1 && One === 1 && Two === 1) ||
    (Three === 1 && Four === 1 && Five === 1) ||
    (Six === 1 && Seven === 1 && Eight === 1)
  ) {
    wonGame = true;
  }

  if (
    (Zero === 0 && One === 0 && Two === 0) ||
    (Three === 0 && Four === 0 && Five === 0) ||
    (Six === 0 && Seven === 0 && Eight === 0)
  ) {
    lostGame = true;
  }

  //side
  //0,3,6
  //1,4,7
  //2,5,8

  if (
    (Zero === 1 && Three === 1 && Six === 1) ||
    (One === 1 && Four === 1 && Seven === 1) ||
    (Two === 1 && Five === 1 && Eight === 1)
  ) {
    wonGame = true;
  }

  if (
    (Zero === 0 && Three === 0 && Six === 0) ||
    (One === 0 && Four === 0 && Seven === 0) ||
    (Two === 0 && Five === 0 && Eight === 0)
  ) {
    lostGame = true;
  }

  //diagnal
  //0,4,8
  //2,4,6

  if (
    (Zero === 1 && Four === 1 && Eight === 1) ||
    (Two === 1 && Four === 1 && Six === 1)
  ) {
    wonGame = true;
  }

  if (
    (Zero === 0 && Four === 0 && Eight === 0) ||
    (Two === 0 && Four === 0 && Six === 0)
  ) {
    lostGame = true;
  }
}

function loseAnimate(lost) {
  if (lost) {
    gameHeader.innerHTML = "You Lost";
  }

  body.classList.add("loseAnimate");

  setTimeout(() => {
    body.classList.remove("loseAnimate");
  }, 4000);
}

function winAnimate() {
  body.classList.add("winAnimate");

  setTimeout(() => {
    body.classList.remove("winAnimate");
  }, 4000);
}

function updateText() {
  if (botThinking && roundCount < 9 && !wonGame && !lostGame) {
    thinkingText.innerHTML = "Computer is thinking about the next move...";
  } else {
    thinkingText.innerHTML = " ";
  }

  if (twoPlayer) {
    gameModeButton.innerHTML = "Single Player";

    thinkingText.innerHTML = " ";
  } else {
    gameModeButton.innerHTML = "Multiplayer";
  }

  if (roundCount === 9 && !wonGame && !lostGame) {
    gameHeader.innerHTML = `No One Won`;

    loseAnimate(false);

    return;
  }

  if (wonGame || lostGame) {
    if (!twoPlayer) {
      if (wonGame) {
        gameHeader.innerHTML = "You Won";

        winAnimate();

        return;
      }

      if (lostGame) {
        loseAnimate(true);

        return;
      }
    }

    if (wonGame) {
      gameHeader.innerHTML = "Player One Wins!";

      winAnimate();

      return;
    }

    if (lostGame) {
      gameHeader.innerHTML = "Player Two Wins!";

      winAnimate();

      return;
    }
  }

  if (!twoPlayer && roundCount < 9) {
    if (roundCount % 2 === 0) {
      gameHeader.innerHTML = `Players Turn`;
    } else {
      gameHeader.innerHTML = `Computers Turn`;
    }
  }

  if (twoPlayer && roundCount < 9) {
    if (roundCount % 2 === 0) {
      gameHeader.innerHTML = `Player Ones Turn`;
    } else {
      gameHeader.innerHTML = `Player Twos Turn`;
    }
  }
}

function updateFunctions() {
  gameLogic();
  updateText();
}

function gameLoop() {
  updateFunctions();
}

function start() {
  let myInterval = setInterval(gameLoop, 200);

  createGameBoard();

  return myInterval;
}

start();

///////EVENTS
resetButton.addEventListener("click", () => {
  Gameboard.resetBoard();
});

gameModeButton.addEventListener("click", () => {
  if (twoPlayer) {
    Gameboard.resetBoard();

    twoPlayer = false;
  } else {
    Gameboard.resetBoard();

    twoPlayer = true;
  }
});

///////CLASSES (DOM)
gameHeader.classList.add("gameHeader");
buttonContainer.classList.add("buttonContainer");
resetButton.classList.add("resetButton");
resetButton.innerHTML = "Reset";
gameModeButton.classList.add("gameModeButton");
thinkingText.classList.add("thinkingText");
