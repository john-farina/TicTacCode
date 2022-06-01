const body = document.querySelector('body');
let squareCount = 0;
let roundCount = 0;
let wonGame = false;
let lostGame = false;

const gameHeader = document.createElement('h1');
gameHeader.classList.add('gameHeader');
const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.innerHTML = 'Reset';

const Gameboard = (() => {
    const gameArray = ['', '', '', '', '', '', '', '', ''];
    const logArray = () => console.log(gameArray);
    const resetBoard = function () {
        for (let i = 0; i < gameArray.length; i++) {
            gameArray[i] = '';
        }
    };
    const add = (mark, number) => (gameArray[number] = mark);

    return {
        gameArray,
        logArray,
        resetBoard,
        add,
    };
})();

const Player = (mark) => {
    const sayMark = function () {
        if (mark === 0) {
            console.log('o');
        } else if (mark === 1) {
            console.log('x');
        } else {
            console.log('ERROR!');
        }
    };

    return {
        sayMark,
    };
};

function computerPlayer() {
    if (wonGame != true) {
        if (lostGame != true) {
            setTimeout(function () {
                function randomNumGen() {
                    let randomNum = Math.floor(Math.random() * 10);
                    return randomNum;
                }
                let compChoice = randomNumGen();
                if (Gameboard.gameArray[compChoice] === '') {
                    roundCount++;
                    Gameboard.gameArray[compChoice] = 0;
                } else {
                    let compChoice = randomNumGen();
                    if (Gameboard.gameArray[compChoice] === '') {
                        roundCount++;
                        Gameboard.gameArray[compChoice] = 0;
                    } else {
                        let compChoice = randomNumGen();
                        if (Gameboard.gameArray[compChoice] === '') {
                            roundCount++;
                            Gameboard.gameArray[compChoice] = 0;
                        } else {
                            let compChoice = randomNumGen();
                            if (Gameboard.gameArray[compChoice] === '') {
                                roundCount++;
                                Gameboard.gameArray[compChoice] = 0;
                            } else {
                                let compChoice = randomNumGen();
                                if (Gameboard.gameArray[compChoice] === '') {
                                    roundCount++;
                                    Gameboard.gameArray[compChoice] = 0;
                                } else {
                                    let compChoice = randomNumGen();
                                    if (
                                        Gameboard.gameArray[compChoice] === ''
                                    ) {
                                        roundCount++;
                                        Gameboard.gameArray[compChoice] = 0;
                                    } else {
                                        let compChoice = randomNumGen();
                                        if (
                                            Gameboard.gameArray[compChoice] ===
                                            ''
                                        ) {
                                            roundCount++;
                                            Gameboard.gameArray[compChoice] = 0;
                                        } else {
                                            let compChoice = randomNumGen();
                                            if (
                                                Gameboard.gameArray[
                                                    compChoice
                                                ] === ''
                                            ) {
                                                roundCount++;
                                                Gameboard.gameArray[
                                                    compChoice
                                                ] = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, 500);
        }
    }
}

function createSquares() {
    const squares = document.createElement('div');
    squares.classList.add('gameSquares');
    squares.classList.add(`square${squareCount + 1}`);
    const thisNumber = squareCount;
    squareCount++;
    setInterval(function () {
        if (Gameboard.gameArray[thisNumber] === '') {
            squares.style.backgroundColor = 'rgb(71, 81, 105)';
            squares.innerHTML = '';
        }
        if (Gameboard.gameArray[thisNumber] === 1) {
            squares.innerHTML = 'X';
        }
        if (Gameboard.gameArray[thisNumber] === 0) {
            squares.innerHTML = 'O';
        }
    }, 100);
    squares.addEventListener('click', function () {
        if (wonGame != true && lostGame != true) {
            if (Gameboard.gameArray[thisNumber] === '') {
                if (roundCount % 2 === 0) {
                    roundCount++;
                    Gameboard.gameArray[thisNumber] = 1;
                    console.log(Gameboard.gameArray);
                    console.log(roundCount);
                    computerPlayer();
                } else {
                    // roundCount++;
                    // Gameboard.gameArray[thisNumber] = 0;
                    // console.log(Gameboard.gameArray);
                    // console.log(roundCount);
                    // computerPlayer();
                }
            }
        }
    });

    return squares;
}

function createRows() {
    const gameRow = document.createElement('div');
    gameRow.classList.add('gameRow');
    for (let i = 0; i < 3; i++) {
        gameRow.appendChild(createSquares());
    }
    return gameRow;
}

function createGameBoard() {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('gameboard');
    for (let i = 0; i < 3; i++) {
        gameBoardContainer.appendChild(createRows());
    }
    body.appendChild(gameHeader);
    body.appendChild(gameBoardContainer);
    body.appendChild(resetButton);
}
createGameBoard();

// for (let i = 0; i < Gameboard.gameArray.length; i++) {
//     Gameboard.add(1, i);
// }
// Gameboard.logArray();

const playerOne = Player(0);
const playerTwo = Player(1);

playerOne.sayMark();
playerTwo.sayMark();

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
    if (roundCount < 9 && wonGame != true && lostGame != true) {
        if (roundCount % 2 === 0) {
            gameHeader.innerHTML = `Players Turn`;
        } else {
            gameHeader.innerHTML = `Computers Turn`;
        }
    } else if (wonGame === true) {
        gameHeader.innerHTML = 'You Won';
    } else if (lostGame === true) {
        gameHeader.innerHTML = 'You Lost';
    } else {
        gameHeader.innerHTML = `No One Won`;
    }
}

function updateFunctions() {
    gameLogic();
    // updatePage();
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
    console.log(Gameboard.gameArray);
}

resetButton.addEventListener('click', function () {
    clearBoard();
});
