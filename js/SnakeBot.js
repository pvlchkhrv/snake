import {Snake} from './Snake.js';

export class SnakeBot extends Snake {
  constructor(user) {
    super(user);
    this.direction = null;
  }

  chooseNextStep() {
    switch (HELPERS.getRandomDirection()) {
      case DIRECTIONS.UP:
        if (this.direction === DIRECTIONS.DOWN) break;
        this.direction = DIRECTIONS.UP;
        this.nextStep = {x: 0, y: -1};
        break;
      case DIRECTIONS.DOWN:
        if (this.direction === DIRECTIONS.UP) break;
        this.direction = DIRECTIONS.DOWN;
        this.nextStep = {x: 0, y: 1};
        break;
      case DIRECTIONS.LEFT:
        if ( this.direction === DIRECTIONS.RIGHT) break;
        this.direction = DIRECTIONS.LEFT;
        this.nextStep = {x: -1, y: 0};
        break;
      case DIRECTIONS.RIGHT:
        if (this.direction === DIRECTIONS.LEFT) break;
        this.direction = DIRECTIONS.RIGHT;
        this.nextStep = {x: 1, y: 0};
        break;
      default:
        return;
    }
  }
  move() {
    const num = Math.random() * 100;
    if (num < 20) {
      this.chooseNextStep();
    }
    super.move();
  }
}
