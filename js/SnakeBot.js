import {Snake} from './Snake.js';

export class SnakeBot extends Snake {
  constructor(user) {
    super(user);
    this.nextStep = {x: 1, y: 0};
    this.nearestApple = null;
  }

  findApple(apples) {
    this.nearestApple = apples.reduce((nearest, apple) => {
      return (
        HELPERS.findDelta(this.snakeHead, apple.coords)
        < HELPERS.findDelta(this.snakeHead, nearest.coords)
          ? apple
          : nearest
      )
    });
    console.log(this.nearestApple)
  }

  hasNextStepBorderCollisions() {
    return (
      this.snakeHead.x + this.nextStep.x < 0 ||
      this.snakeHead.y + this.nextStep.y < 0 ||
      this.snakeHead.x + this.nextStep.x > GAME_WIDTH_IN_BLOCKS ||
      this.snakeHead.y + this.nextStep.y > GAME_HEIGHT_IN_BLOCKS
    )
  }

  chooseDirectionToApple() {
    if(!this.hasSelfCollision()){
      const isRight = this.nearestApple.coords.x > this.snakeHead.x;
      const isDown = this.nearestApple.coords.y > this.snakeHead.y;

      if (this.nearestApple.coords.x !== this.snakeHead.x) {
        return isRight ? this.nextStep = {x: 1, y: 0} : this.nextStep = {x: -1, y: 0};
      }
      if (this.nearestApple.coords.y !== this.snakeHead.y) {
        return isDown ? this.nextStep = {x: 0, y: 1} : this.nextStep = {x: 0, y: -1};
      }
    }
  }

  _chooseNextStep() {
    switch (HELPERS.getRandomDirection()) {
      case DIRECTIONS.UP:
        if (this.nextStep.y !== 0) break;
        this.direction = DIRECTIONS.UP;
        this.nextStep = {x: 0, y: -1};
        console.log('UP')
        break;
      case DIRECTIONS.DOWN:
        if (this.nextStep.y !== 0 ) break;
        this.direction = DIRECTIONS.DOWN;
        this.nextStep = {x: 0, y: 1};
        console.log('DOWN')
        break;
      case DIRECTIONS.LEFT:
        if (this.nextStep.x !== 0) break;
        this.direction = DIRECTIONS.LEFT;
        this.nextStep = {x: -1, y: 0};
        console.log('LEFT')
        break;
      case DIRECTIONS.RIGHT:
        if (this.nextStep.x !== 0) break;
        this.direction = DIRECTIONS.RIGHT;
        this.nextStep = {x: 1, y: 0};
        console.log('RIGHT')
        break;
      default:
        return;
    }
  }
}
