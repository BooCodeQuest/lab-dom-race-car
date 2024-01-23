window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();

  }

  function handleKeydown(event) {
    if (game && !game.gameIsOver) {
      switch (event.key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  function handleKeyup(event) {
    if (game && !game.gameIsOver) {
      if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
        game.player.directionX = 0;
      }
      if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        game.player.directionY = 0;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};
