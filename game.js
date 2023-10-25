const ROWS = 3;
const COLUMNS = 3;
const DEFAULT_TOKEN = "*";
const PLAYER1_TOKEN = "X";
const PLAYER2_TOKEN = "O";
const table$$ = document.querySelector("#board");
let currentPlayer = 1;

function starGame() {
  cleanBoard();
  printBoard();
}

function cleanBoard() {
  table$$.innerHTML = "";
}

// Crear Tabla en HTML//
function printBoard() {
  for (i = 0; i < ROWS; i++) {
    const tr$$ = document.createElement("tr");
    for (j = 0; j < COLUMNS; j++) {
      const td$$ = document.createElement("td");
      td$$.textContent = DEFAULT_TOKEN;
      tr$$.appendChild(td$$);
      td$$.addEventListener("click", placeToken);
    }
    table$$.appendChild(tr$$);
  }
}

// Conseguir que marque "x" o "o"//
function placeToken() {
  const actualToken = this.textContent;
  if (actualToken === DEFAULT_TOKEN) {
    const token = currentPlayer === 1 ? PLAYER1_TOKEN : PLAYER2_TOKEN;
    this.textContent = token;
  }
  const winner = checkWinner();
  if (winner) {
    player();
  } else {
    switchPlayer();
  }
}

//Seleccion Jugador//
function player () {
  currentPlayer = currentPlayer === 1 ? alert ('You win Player 1') : alert (`You win Player 2`);
}

// cambiar jugador //
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  // if (currentPlayer === 1) {
  //   currentPlayer = 2;
  // } else {
  //   currentPlayer = 1;
  // }
}

//comprobar ganador//
function checkWinner() {
  let boardArray = getBoardArray();
  if (boardArray[0][0] !== DEFAULT_TOKEN) {
    for (let i = 0; i < ROWS; i++) {
      if (
        boardArray[i][0] === PLAYER1_TOKEN &&
        boardArray[i][1] === PLAYER1_TOKEN &&
        boardArray[i][2] === PLAYER1_TOKEN
      ) {
        return true;
      }
    }
    for (let j = 0; j < COLUMNS; j++) {
      if (
        boardArray[0][j] === PLAYER1_TOKEN &&
        boardArray[1][j] === PLAYER1_TOKEN &&
        boardArray[2][j] === PLAYER1_TOKEN
      ) {
        return true;
      }
      if (
        boardArray[0][0] === PLAYER1_TOKEN &&
        boardArray[1][1] === PLAYER1_TOKEN &&
        boardArray[2][2] === PLAYER1_TOKEN
      ) {
        return true;
      }
      if (
        boardArray[0][2] === PLAYER1_TOKEN &&
        boardArray[1][1] === PLAYER1_TOKEN &&
        boardArray[2][0] === PLAYER1_TOKEN
      ) {
        return true;
      }
      for (let i = 0; i < ROWS; i++) {
        if (
          boardArray[i][0] === PLAYER2_TOKEN &&
          boardArray[i][1] === PLAYER2_TOKEN &&
          boardArray[i][2] === PLAYER2_TOKEN
        ) {
          return true;
        }
      }
      for (let j = 0; j < COLUMNS; j++) {
        if (
          boardArray[0][j] === PLAYER2_TOKEN &&
          boardArray[1][j] === PLAYER2_TOKEN &&
          boardArray[2][j] === PLAYER2_TOKEN
        ) {
          return true;
        }
        if (
          boardArray[0][0] === PLAYER2_TOKEN &&
          boardArray[1][1] === PLAYER2_TOKEN &&
          boardArray[2][2] === PLAYER2_TOKEN
        ) {
          return true;
        }
        if (
          boardArray[0][2] === PLAYER2_TOKEN &&
          boardArray[1][1] === PLAYER2_TOKEN &&
          boardArray[2][0] === PLAYER2_TOKEN
        ) {
          return true;
        }
        return false;
      }
    }
  }
}

function getBoardArray() {
  let boardArray = [];
  const rows1$$ = table$$.querySelectorAll("tr");
  for (const row1$$ of rows1$$) {
    const rowArray = [];
    const columns1$$ = row1$$.querySelectorAll(`td`);
    for (const column1$$ of columns1$$) {
      rowArray.push(column1$$.textContent);
    }
    boardArray.push(rowArray);
  }
  return boardArray;
}

const newGameBtn$$ = document.querySelector("#newGame");
newGameBtn$$.addEventListener("click", starGame);
starGame();
