export class Snake {
  constructor(user) {
    this.id = HELPERS.getId();
    this.user = user;
    this.snake = this.initiateCoordsArray(); // [{x: 20, y: 15}, {x: 19, y: 15}, {x: 18, y: 15}, {x: 17, y: 15}]
    this.nextStep = null;
    this.prevKey = null;
    this.points = 0;
    this.#listen();
  }

  #listen() {
    window.addEventListener('keydown', ({which}) => {
      switch (which) {
        case this.user.KEYS.UP:
          if (this.prevKey && this.prevKey === this.user.KEYS.DOWN) break;
          this.prevKey = this.user.KEYS.UP;
          this.nextStep = {x: 0, y: -1};
          break;
        case this.user.KEYS.DOWN:
          if (this.prevKey && this.prevKey === this.user.KEYS.UP) break;
          this.prevKey = this.user.KEYS.DOWN;
          this.nextStep = {x: 0, y: 1};
          break;
        case this.user.KEYS.LEFT:
          if (this.prevKey && this.prevKey === this.user.KEYS.RIGHT) break;
          this.prevKey = this.user.KEYS.LEFT;
          this.nextStep = {x: -1, y: 0};
          break;
        case this.user.KEYS.RIGHT:
          if (this.prevKey && this.prevKey === this.user.KEYS.LEFT) break;
          this.prevKey = this.user.KEYS.LEFT;
          this.nextStep = {x: 1, y: 0};
          break;
        default:
          return;
      }
    })
  }

  initiateCoordsArray() {
    const snake = [];
    for (let i = 0; i < this.user.startLength; i++) {
      snake.push({
        x: this.user.startPosition.x - i,
        y: this.user.startPosition.y
      });
    }
    return snake;
  }

  getCoords() {
    return this.snake;
  }

  expand(segment) {
    this.snake.push(segment);
    this.points += 1;
  }

  hasSelfCollision() {
    let boolean;
    for (let i = this.snake.length; i > 0; i--) {
      boolean = this.snake[0].x === this.snake.x && this.snake[0] === this.snake[i];
    }
    return boolean;
  }

  // hasBorderCollision() {
  //   this.snake[0].x ===
  // }

  handleCollisions() {
    if (this.hasSelfCollision()) {
      alert('GAME OVER!');
      location.reload();
    }
  }

  move() {
    this.handleCollisions();
    if (this.nextStep) {
      for (let i = this.snake.length - 2; i >= 0; i--) {
        this.snake[i + 1] = {...this.snake[i]};
      }
      this.snake[0].x += this.nextStep.x;
      this.snake[0].y += this.nextStep.y;
    }
  }

  // appleOnSnake(apples){
  //   return apples.find(apple => {
  //     const snakeHead = this.snake[0];
  //     return apple.coords.x === snakeHead.x && apple.coords.y === snakeHead.y;
  //   })
  // }
  //
  // eatApple(apples) {
  //  const eatenApple = this.appleOnSnake(apples);
  //   if (eatenApple) {
  //     this.expand();
  //   }
  // }

  render() {
    for (let i = 0; i < this.snake.length; i++) {
      HELPERS.drawSnakeSegment(this.snake[i].x, this.snake[i].y);
    }
  }
}
