//Queen Threat Detector
const generateBoard = (w, b) => {
  let board = [];
  for(let row = 0; row < 8; row++) {
    let rowArray = [];
    for (let column = 0; column < 8; column++) {
      row === w[0] && column === w[1] ? rowArray.push(1) : row === b[0] && column === b[1] ? rowArray.push(1) : rowArray.push(0);
    }
    board.push(rowArray);
    rowArray = [];
  }
  return board;
}

const rowThreat = () => {
  return whiteQueen[0] === blackQueen[0];
}

const columnThreat = () => {
  return whiteQueen[1] === blackQueen[1];
}

const upLeft = (board, x, y) => {
  let intersection = false;
  while (x >= 0 && y >= 0) {
    x--;
    y--;
    x >= 0 && y >= 0 ? board[x][y] === 1 ? intersection = true: console.log("not a match"): intersection ? console.log("match found") : console.log("no diagnal matches, up and to the left");
  }
  return intersection
}

const upRight = (board, x, y) => {
  let intersection = false;
  while (x >= 0 && y < 8) {
    x--;
    y++;
    x >= 0 && y < 8 ? board[x][y] === 1 ? intersection = true: console.log("not a match"): intersection ? console.log("match found") :console.log("no diagnal matches, up and to the right");
  }
  return intersection
}

const downLeft = (board, x, y) => {
  let intersection = false;
  while (x < 8 && y >= 0) {
    x++;
    y--;
    x < 8 && y >= 0 ? board[x][y] === 1 ? intersection = true: console.log("not a match"): intersection ? console.log("match found") :console.log("no diagnal matches, down and to the left");
  }
  return intersection
}

const downRight = (board, x, y) => {
  let intersection = false;
  while (x < 8 && y < 8) {
    x++;
    y++;
    x < 8 && y < 8 ? board[x][y] === 1 ? intersection = true: console.log("not a match"): intersection ? console.log("match found") :console.log("no diagnal matches, down and to the right");
  }
  return intersection
}

const DiagonalThreat = (board) => {
  let x = whiteQueen[0];
  let y = whiteQueen[1];
  return upLeft(board, x, y) ? true : upRight(board, x ,y) ? true : downLeft(board, x, y) ? true : downRight(board, x, y);
}

const queenThreat = (board) => {
  return rowThreat() ? true: columnThreat()? true : DiagonalThreat(board);
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));