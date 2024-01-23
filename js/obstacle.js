class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 100));
      this.top = -150; // Start above the screen
      this.width = 100;
      this.height = 150;
      this.element = document.createElement("img");
      this.element.src = "./images/obstacle.png"; // Replace with your obstacle image path
      this.element.style.position = "absolute";
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.gameScreen.appendChild(this.element);
    }

    move() {
      this.top += 3; // Speed of obstacle
      this.element.style.top = `${this.top}px`;
    }

    isOffScreen() {
      return this.top > this.gameScreen.offsetHeight;
    }
}
