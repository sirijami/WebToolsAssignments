const TTT = {
  WIN: 'Won',
  DRAW: 'Draw', 
  IN_PROGRESS: 'In Progress',
  PLAYER_1: 'X',
  PLAYER_2: 'O',
  EMPTY: ' ',
  HARD: 'Hard',

  newGame: function () {
    return {
      board: [ this.emptyRow(), this.emptyRow(), this.emptyRow() ],
      currentPlayer: this.PLAYER_1,
      progress: this.IN_PROGRESS
    };
  },
   
  emptyRow: function() {
    return [ this.EMPTY, this.EMPTY, this.EMPTY ];
  },

  copyGame: function (game) {
    var result = Object.assign({}, game);
    result.board = [...game.board];
    result.board.forEach((row, index) => { 
      result.board[index] = [...row];
    }); // deep copy
    return result;
  },

  takeTurn: function (game) {
    game = this.copyGame(game);
    let winner = this.checkForEnd(game);
    game = this.applyEndResults(game, winner);
    if( winner ) {
      return game;
    }
    // Player didn't win, try for computer player
    if(game.difficulty === this.HARD) {
      game = this.smartTurn(game);
    } else {
      game = this.computerTurn(game);
    }
    winner = this.checkForEnd(game);   
    game.currentPlayer = this.otherPlayer(game.currentPlayer);
    return this.applyEndResults(game, winner);
  },

  applyEndResults: function (game, winner) {
    if(winner) {
      if( winner === this.DRAW ) {
        game.progress = this.DRAW;
      } else {
        game.progress = this.WIN;
        game.currentPlayer = winner;
      }
    }
    return game;
  },

  otherPlayer: function(player) {
    return `${this.PLAYER_1}${this.PLAYER_2}`.replace(player, '');
  },

  computerTurn: function (game) {
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        if(game.board[row][col] === this.EMPTY) {
          game.board[row][col] = game.currentPlayer;
          return game;
        }
      }
    }
  },

  smartTurn: function (game) {
    const best = {score: -100};
    game.board.forEach( (row, rowIndex) => {
      row.forEach( (col, colIndex) => {
        if(col === this.EMPTY) {
          const score = this.scorePosition({ game, rowIndex, colIndex });
          if(score > best.score) {
            best.rowIndex = rowIndex;
            best.colIndex = colIndex;
            best.score = score;
          }
        }
      });
    });
    const copy = this.copyGame(game);
    copy.board[best.rowIndex][best.colIndex] = copy.currentPlayer;
    return copy;
  },

  dumpBoard: function(game) {
    let output='';
    game.board.forEach( (row) => {
      row.forEach( (col) => {
        output += col;
      });
      output += ' - ';
    });
    return output;
  },

  scorePosition: function({ game, rowIndex, colIndex }) {
    let copy = this.copyGame(game);
    copy.board[rowIndex][colIndex] = copy.currentPlayer;
    // console.log(`${this.dumpBoard(copy)} ${copy.currentPlayer} just played at ${rowIndex}, ${colIndex}`);
    const winner = this.checkForEnd(copy);
    if(winner) {
      if(winner && winner === copy.currentPlayer) {
        return 1;
      }
      return 0;
    }
    // take their turn
    copy.currentPlayer = this.otherPlayer(copy.currentPlayer);
    copy = this.smartTurn(copy);
    // What is best of what's left?
    const theyEndedIt = this.checkForEnd(copy);
    copy.currentPlayer = this.otherPlayer(copy.currentPlayer);
    if(theyEndedIt) {
      return 0;
    }
    // back to us
    let total = 0;
    copy.board.forEach( (row, rowIndex) => {
      row.forEach( (col, colIndex) => {
        if(col === this.EMPTY) {
          total += this.scorePosition({ game: copy, rowIndex, colIndex }); 
        }
      });
    });
    return total;
  },

  checkForEnd: function (game) {
    let winner = this.checkForVerticalWin(game) 
      || this.checkForHorizontalWin(game)
      || this.checkForDiagonalWin(game);    
    winner = winner || this.checkForDraw(game);
    return winner;
  },

  checkForDraw: function (game) {
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        if(game.board[row][col] === this.EMPTY) {
          return;
        }
      }
    }
    return this.DRAW;
  },

  checkForVerticalWin: function (game) {
    let winner = this.compareCells(game.board[0][0], game.board[1][0], game.board[2][0]) 
      || this.compareCells(game.board[0][1], game.board[1][1], game.board[2][1])
      || this.compareCells(game.board[0][2], game.board[1][2], game.board[2][2]);
    if(winner) {
      return winner;
    }
  },

  checkForHorizontalWin: function (game) {
    let winner = this.compareCells(game.board[0][0], game.board[0][1], game.board[0][2]) 
      || this.compareCells(game.board[1][0], game.board[1][1], game.board[1][2])
      || this.compareCells(game.board[2][0], game.board[2][1], game.board[2][2]);
    if(winner) {
      return winner;
    }
  },

  checkForDiagonalWin: function (game) {
    let winner = this.compareCells(game.board[0][0], game.board[1][1], game.board[2][2]) 
      || this.compareCells(game.board[0][2], game.board[1][1], game.board[2][0]);
    if(winner) {
      return winner;
    }
  },

  compareCells: function (cell1, cell2, cell3 ) {
    if( cell1 !== this.EMPTY && cell1 === cell2 && cell2 === cell3 ) {
      return cell1;
    }
  }
};

module.exports = TTT;
