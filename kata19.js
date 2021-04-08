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

const rowThreat = (board) => {
  let count = 0;
  board.forEach(row => {
    count += row;
  });
  return count > 1 ? true : false;
}

const columnThreat = (board) => {
  return whiteQueen[1] === blackQueen[1] ? true : false;
}

const DiagonalThreat = (board) => {
  return false;
}

const queenThreat = (board) => {
  return rowThreat(board) ? true: columnThreat(board)? true : DiagonalThreat(board);
}


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));