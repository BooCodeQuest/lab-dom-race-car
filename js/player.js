class Player {
    constructor(gameScreen, left, top, width, height, imgSrc){
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.apppendChild(this.element);
}

move() {
    // Update position based on direction
    this.left += this.directionX * 5;
    this.top += this.directionY * 5;

    // Prevent player from going out of bounds
    this.left = Math.max(0, Math.min(this.left, this.gameScreen.offsetWidth - this.width));
    this.top = Math.max(0, Math.min(this.top, this.gameScreen.offsetHeight - this.height));

    // Update the position on the screen
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    // Collision detection logic
    return !(this.top > obstacle.top + obstacle.height ||
             this.top + this.height < obstacle.top ||
             this.left > obstacle.left + obstacle.width ||
             this.left + this.width < obstacle.left);
  }

}