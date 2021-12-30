export class Snake {
  constructor(user) {
    this.user = user;
    this.direction = null;
    this.snake = this.getSnakeObject();
    this.length = this.user.startLength;
    this.prevKey = null;
    this.#listen();
    console.log(this.length)
    console.log(this.snake.length)
  }

  #listen() {
    window.addEventListener('keydown', ({which}) => {
      switch (which) {
        case this.user.KEYS.UP:
          if (this.prevKey && this.prevKey === this.user.KEYS.DOWN) break;
          this.prevKey = this.user.KEYS.UP;
          this.direction = {x: 0, y: -1};
          break;
        case this.user.KEYS.DOWN:
          if (this.prevKey && this.prevKey === this.user.KEYS.UP) break;
          this.prevKey = this.user.KEYS.DOWN;
          this.direction = {x: 0, y: 1};
          break;
        case this.user.KEYS.LEFT:
          if (this.prevKey && this.prevKey === this.user.KEYS.RIGHT) break;
          this.prevKey = this.user.KEYS.LEFT;
          this.direction = {x: -1, y: 0};
          break;
        case this.user.KEYS.RIGHT:
          console.log('RIGHT')
          if (this.prevKey && this.prevKey === this.user.KEYS.LEFT) break;
          this.prevKey = this.user.KEYS.LEFT;
          this.direction = {x: 1, y: 0};
          break;
        default:
          return;
      }
    })
  }

  getSnakeObject() {
    const snake = []
    for (let i = 0; i < this.user.startLength; i++) {
      snake.push({
        x: this.user.startPosition.x - i,
        y: this.user.startPosition.y
      })
    }
    return snake;
  }

  getSnake() {
    return this.snake;
  }

  expand(position) {
    this.snake.push(position);
    this.length += 1;
  }

  move() {
    if (this.direction) {
      for (let i = this.length; i >= 0; i--) {
        this.snake[i + 1] = {...this.snake[i]}
      }
      this.snake[0].x += this.direction.x;
      this.snake[0].y += this.direction.y;
    }
  }

  render() {
    for (let i = 0; i < this.length; i++) {
      HELPERS.drawSnakeSegment(this.snake[i].x, this.snake[i].y);
    }
  }
}
