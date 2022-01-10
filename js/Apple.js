export class Apple {
  constructor(snakes) {
    this.id = HELPERS.getId();
    this.snakes = snakes;
    this.coords = this.getRandomCoords();
    this.isEaten = false;
  }

  getRandomCoords() {
    return this.snakes.reduce((randomCoords, snake) => {

      const snakeCoords = snake.getCoords();

      snakeCoords.forEach(segment => {
        const x = HELPERS.random.getX();
        const y = HELPERS.random.getY();
        if (segment.x !== x && segment.y !== y) {
          randomCoords.x = x;
          randomCoords.y = y;
        }
      })

      return randomCoords;
    }, {})
  }

  handleSnakeCollision() {
    this.snakes.forEach(snake => {
      if (HELPERS.isEqualPositions(this.coords, snake.snakeHead)) {
        snake.expand();
        this.isEaten = true;
      }
    });
  }

  render() {
    HELPERS.drawApple(this.coords.x, this.coords.y);
  }
}
