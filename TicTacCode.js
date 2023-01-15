let squareCount = 0;
let roundCount = 0;
let wonGame = false;
let lostGame = false;
let twoPlayer = false;
let gridSize = 3;

const body = document.querySelector("body");
const gameHeader = document.createElement("h1");
const buttonContainer = document.createElement("div");
const resetButton = document.createElement("button");
const gameModeButton = document.createElement("button");

gameHeader.classList.add("gameHeader");

buttonContainer.classList.add("buttonContainer");

resetButton.classList.add("resetButton");
resetButton.innerHTML = "Reset";

gameModeButton.classList.add("gameModeButton");

buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(gameModeButton);

const Gameboard = (() => {
  const gameArray = ["", "", "", "", "", "", "", "", ""];

  function logArray() {
    console.log(gameArray);
  }

  function resetBoard() {
    for (let i = 0; i < gameArray.length; i++) {
      gameArray[i] = "";
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
      return Math.floor(Math.random() * 10);
    }
    let compChoice = random();

    if (Gameboard.gameArray[compChoice] === "") {
      roundCount++;

      Gameboard.gameArray[compChoice] = 0;

      return;
    }

    if (wonGame || lostGame) {
      return;
    }

    theRandomBrain();
  }, 500);
}

function computerPlayer() {
  if (wonGame != true || lostGame != true) {
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
    if (Gameboard.gameArray[thisNumber] === "") {
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
    if (wonGame || lostGame || Gameboard.gameArray[thisNumber] !== "") {
      return;
    }

    if (roundCount % 2 === 0) {
      roundCount++;

      Gameboard.gameArray[thisNumber] = 1;

      if (!twoPlayer) {
        computerPlayer();
      }
    } else {
      if (twoPlayer) {
        roundCount++;

        Gameboard.gameArray[thisNumber] = 0;
      }
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
  body.appendChild(gameBoardContainer);
  body.appendChild(buttonContainer);
}

createGameBoard();

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

function updateText() {
  console.log("round count", roundCount);

  if (twoPlayer) {
    gameModeButton.innerHTML = "Single Player";
  } else {
    gameModeButton.innerHTML = "Multiplayer";
  }

  if (roundCount === 9 && !wonGame && !lostGame) {
    gameHeader.innerHTML = `No One Won`;

    return;
  }

  if (wonGame || lostGame) {
    if (!twoPlayer) {
      if (wonGame) {
        body.classList.add("winAnimate");

        gameHeader.innerHTML = "You Won";

        setTimeout(() => {
          body.classList.remove("winAnimate");
        }, 4000);

        return;
      }

      if (lostGame) {
        body.classList.add("loseAnimate");

        gameHeader.innerHTML = "You Lost";

        setTimeout(() => {
          body.classList.remove("loseAnimate");
        }, 4000);

        return;
      }
    }

    if (wonGame) {
      body.classList.add("winAnimate");

      gameHeader.innerHTML = "Player One Wins!";

      setTimeout(function () {
        body.classList.remove("winAnimate");
      }, 4000);

      return;
    }

    if (lostGame) {
      body.classList.add("winAnimate");

      gameHeader.innerHTML = "Player Two Wins!";

      setTimeout(function () {
        body.classList.remove("winAnimate");
      }, 4000);

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

(function start() {
  let myInterval = setInterval(gameLoop, 200);

  return myInterval;
})();

function clearBoard() {
  squareCount = 0;

  roundCount = 0;

  wonGame = false;

  lostGame = false;

  Gameboard.resetBoard();
}

resetButton.addEventListener("click", () => {
  clearBoard();
});

gameModeButton.addEventListener("click", () => {
  if (twoPlayer) {
    clearBoard();

    twoPlayer = !twoPlayer;

    return;
  }

  clearBoard();

  twoPlayer = !twoPlayer;
});
