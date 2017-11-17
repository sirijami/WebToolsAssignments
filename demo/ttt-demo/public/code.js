(() => {

  const fetchTakeTurn = (game) => {
    return fetch('//localhost:8000/takeTurn', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then( (response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response);
    });
  };

  const fetchNewGame = () => {
    return fetch('//localhost:8000/newGame')
    .then( (response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response);
    });
  };

  const drawBoard = (gameData) => {
    gameData.allButtons.forEach( (button) => {
      const position = button.dataset.position;
      button.textContent = gameData.board[position[0]][position[1]];
    });
  };

  const allowPlayerAction = ({ allowed, gameData}) => {
    gameData.allButtons.forEach( (button) => { 
      button.disabled = !allowed;
    });
  };
  const attachListeners = (gameData) => {
    document.getElementById('board').addEventListener('click', gameData.moveListener);
  };

  const findButtons = () => {
    const allButtons = Array.from(document.getElementById('board').getElementsByTagName('button'));
    return allButtons;
  };

  const otherPlayer = (player) => {
    return "XO".replace(player, '');
  };

  const takeComputerTurn = (gameData) => { 
    fetchTakeTurn({ currentPlayer: otherPlayer(gameData.thisPlayer), board: gameData.board, progress: gameData.progress })
      .then( (game) => {
        gameData.board = game.board;
        gameData.currentPlaer = game.currentPlayer;
        gameData.progress = game.progress;
        drawBoard(gameData);
        allowPlayerAction({ allowed: true, gameData });
      })
      .catch( (err) => console.log(err) );
  };

  const makeMoveListener = (gameData) => {
    return (e) => {
      const place = e.target;
      place.textContent = gameData.currentPlayer;
      const position = place.dataset.position;
      gameData.board[position[0]][position[1]] = gameData.currentPlayer;
      allowPlayerAction({ allowed: false, gameData });
      takeComputerTurn(gameData);
    };
  };
  
  const setup = () => {
    const gameData = {};
    gameData.allButtons = findButtons();
    gameData.moveListener = makeMoveListener(gameData);

    attachListeners(gameData);
    fetchNewGame()
      .then( (gameInfo) => {
        gameData.board = gameInfo.board;
        gameData.currentPlayer = gameInfo.currentPlayer;
        gameData.thisPlayer = gameInfo.currentPlayer;
        drawBoard( gameData );
        allowPlayerAction({ allowed: true, gameData });
      })
      .catch( (err) => console.warn(err) );

  };

  setup();
})();
