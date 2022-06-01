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

function theRandomBrain() {
    setTimeout(function () {
        function randomNumGen() {
            let randomNum = Math.floor(Math.random() * 10);
            return randomNum;
        }
        let compChoice = randomNumGen();

        console.log(Gameboard.gameArray[10]);

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
                                    } else if (
                                        wonGame != true &&
                                        lostGame != true
                                    ) {
                                        roundCount++;
                                        console.log('ERROR');
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

function computerPlayer() {
    //the brain
    if (wonGame != true) {
        if (lostGame != true) {
            setTimeout(theRandomBrain(), 10);
        }
    }
}

function createSquares() {
    const squares = document.createElement('div');
    squares.classList.add('gameSquares');
    const thisNumber = squareCount;
    squareCount++;

    //UPDATE SQUARES BASED OFF OF ARRAY
    setInterval(function () {
        if (Gameboard.gameArray[thisNumber] === '') {
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
                    console.log('ERROR');
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
        body.classList.add('winAnimate');
        gameHeader.innerHTML = 'You Won';
        setTimeout(function () {
            body.classList.remove('winAnimate');
        }, 4000);
    } else if (lostGame === true) {
        body.classList.add('loseAnimate');
        gameHeader.innerHTML = 'You Lost';
        setTimeout(function () {
            body.classList.remove('loseAnimate');
        }, 4000);
    } else {
        gameHeader.innerHTML = `No One Won`;
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
    console.log(Gameboard.gameArray);
}

resetButton.addEventListener('click', function () {
    clearBoard();
});
