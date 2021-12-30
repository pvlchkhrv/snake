let instance;

export class Apple {
  constructor(snakes) {
    this.snakes = snakes;
    this.position = this.getRandomCoordinates();
    if(!instance) instance = this;
    return instance;
  }

  getRandomCoordinates() {
    return this.snakes.reduce((acc, snake) => {
      snake.getSnake().forEach(segment =>  {
        const x = HELPERS.random.getX();
        const y = HELPERS.random.getY();
        if (segment.x !== x && segment.y !== y) {
          acc.x = x;
          acc.y = y;
        }
      })
      return acc;
    }, {})
  }

  handleSnakeCollision() {
    this.snakes.forEach(snake => {
      if (this.position.x === snake.getSnake()[0].x && this.position.y === snake.getSnake()[0].y) {
        snake.expand(this.position);
        instance = null;
      }
    })
  }

  render() {
    HELPERS.drawApple(this.position.x, this.position.y);
  }
}
