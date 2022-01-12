export class Snake {
  constructor(user) {
    this.id = HELPERS.getId();
    this.user = user;
    this.snake = this.initiateCoordsArray(); // [{x: 20, y: 15}, {x: 19, y: 15}, {x: 18, y: 15}, {x: 17, y: 15}]
    this.snakeHead = this.snake[0];
    // this.nextStep = {x: 1, y: 0};
    this.nextStep = null;
    this.prevKey = null;
    this.points = 0;
    this.#listen();
  }

  #listen() {
    if (this.user.player !== 'bot') {
      document.addEventListener('keydown', ({which}) => {
        switch (which) {
          case this.user.KEYS.UP:
            if (this.prevKey === this.user.KEYS.DOWN) break;
            this.prevKey = this.user.KEYS.UP;
            this.nextStep = {x: 0, y: -1};
            break;
          case this.user.KEYS.DOWN:
            if (this.prevKey === this.user.KEYS.UP) break;
            this.prevKey = this.user.KEYS.DOWN;
            this.nextStep = {x: 0, y: 1};
            break;
          case this.user.KEYS.LEFT:
            if (this.prevKey === this.user.KEYS.RIGHT) break;
            this.prevKey = this.user.KEYS.LEFT;
            this.nextStep = {x: -1, y: 0};
            break;
          case this.user.KEYS.RIGHT:
            if (this.prevKey === this.user.KEYS.LEFT) break;
            this.prevKey = this.user.KEYS.RIGHT;
            this.nextStep = {x: 1, y: 0};
            break;
          default:
            return;
        }
      });
    }
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

  eatApple() {
    this.snake.push({...this.snake[this.snake.length - 1]});
    this.points += POINTS_PER_APPLE;
  }

  handleCollisions(snakes) {
    this.handleSnakeCollisions(snakes);
    this.handleBorderCollisions();
  }

  handleSnakeCollisions(snakes) {
    if (this.hasAnotherSnakeCollision(snakes)) {
      console.log('snake collision')
      this.snake.pop();
      this.points -= POINTS_PER_APPLE;
    }
  }

  handleBorderCollisions() {
    if (this.hasBorderCollision()) {
      this.points -= 5;
    }
  }

  hasSelfCollision() {
    return this.snake.some((segment, index) => {
      if (index === 0 || index === 1) return false;
      return HELPERS.isEqualPositions(this.snakeHead, segment);
    });
  }

  hasBorderCollision() {
    return (
      this.snakeHead.x < 0 || this.snakeHead.x > GAME_WIDTH_IN_BLOCKS ||
      this.snakeHead.y < 0 || this.snakeHead.y > GAME_HEIGHT_IN_BLOCKS
    )
  }

  hasAnotherSnakeCollision(snakes) {
    const otherSnakes = snakes.filter(snake => snake.id !== this.id);
    const snakesWithCoords = otherSnakes.map(snake => snake.snake);
    let res = false;
    for (let i = 0; i < snakesWithCoords.length; i++) {
      const snake = snakesWithCoords[i];
      res = snake.some(segment => HELPERS.isEqualPositions(this.snakeHead, segment));
    }
    return res;
  }

  handleDeath() {
    if (this.hasSelfCollision() || this.snake.length === 1 || this.hasBorderCollision()) {
      alert('GAME OVER!');
      location.reload();
    }
  }

  move() {
    if (this.nextStep) {
      for (let i = this.snake.length - 2; i >= 0; i--) {
        this.snake[i + 1] = {...this.snake[i]};
      }
      this.snakeHead.x += this.nextStep.x;
      this.snakeHead.y += this.nextStep.y;
    }
  }

  render() {
    for (let i = 0; i < this.snake.length; i++) {
      HELPERS.drawSnakeSegment(this.snake[i].x, this.snake[i].y);
    }
  }
}
