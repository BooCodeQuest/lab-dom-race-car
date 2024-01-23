class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player(this.gameScreen);
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.gameIntervalId;
      this.gameLoopFrequency = Math.round(1000/60);
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
      this.gameIntervalId = setInterval(() => {
        this.gameLoop()
      }, this.gameLoopFrequency)
    }
  
    gameLoop() {
      console.log("in the game loop");
      
      this.update();
  
      // If "gameIsOver" is set to "true" clear the interval to stop the loop
      if (this.gameIsOver) {
        clearInterval(this.gameIntervalId)
      }
    }
  
    update() {
      console.log("in the update");
    }

    update() {
      this.player.move();

      // Handle obstacle creation and movement
      this.handleObstacles();

      // Check for collisions
      this.checkCollisions();

      // Check if the game is over
      if (this.lives === 0) {
        this.endGame();
      }
    }

    handleObstacles() {
      // Logic to create and move obstacles
      // Create a new obstacle at random intervals
      if (Math.random() > 0.98 && this.obstacles.length < 5) {
        const newObstacle = new Obstacle(this.gameScreen);
        this.obstacles.push(newObstacle);
      }

      // Move each obstacle and remove off-screen ones
      this.obstacles.forEach((obstacle, index) => {
        obstacle.move();
        if (obstacle.isOffScreen()) {
          this.obstacles.splice(index, 1);
          this.score++;
        }
      });
    }

    checkCollisions() {
      this.obstacles.forEach((obstacle, index) => {
        if (this.player.didCollide(obstacle)) {
          this.obstacles.splice(index, 1);
          this.lives--;
        }
      });
    }

    endGame() {
      this.gameIsOver = true;
      clearInterval(this.gameIntervalId);
      // Remove player and obstacles from the DOM
      this.player.element.remove();
      this.obstacles.forEach(obstacle => obstacle.element.remove());
      // Show game end screen
      this.gameEndScreen.style.display = "block";
      this.gameScreen.style.display = "none";
    }
  }