export class Apple {
  constructor(snakes) {
    this.id = HELPERS.getId();
    this.snakes = snakes;
    this.coords = this.getRandomCoordinates();
    this.isEaten = false;
  }

  getRandomCoordinates() {
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
      const snakeHead = snake.getCoords()[0];
      if (this.coords.x === snakeHead.x && this.coords.y === snakeHead.y) {
        snake.expand(this.coords);
        this.isEaten = true;
      }
    })
  }

  render() {
    HELPERS.drawApple(this.coords.x, this.coords.y);
  }
}
