import {Apple} from './Apple.js';
import {Snake} from './Snake.js';
import {SnakeBot} from './SnakeBot.js';

export class Game {
  constructor() {
    this.apples = [];
    this.snakes = [];
  }

  init() {
    this.snakes = USERS.map(user => {
      if (user.player === 'bot') {
        return new SnakeBot(user);
      }
      return new Snake(user);
    });
    this.representPoints();
    for (let i = 0; i < APPLES_COUNT; i++) {
      this.apples.push(new Apple(this.snakes));
    }
  }

  representPoints() {
    const pointsElement = document.querySelector('#points');
    this.snakes.forEach(snake => {
      const divElement = document.createElement('div');
      divElement.dataset.id = snake.id;
      pointsElement.append(divElement);
    });
  }

  updatePoints(snakeId, points, player) {
    const divElement = document.querySelector(`[data-id='${snakeId}']`);
    divElement.innerText = `P${player}:${points}`;
  }

  update() {
    HELPERS.clearField();
    this.snakes.forEach(snake => {
      this.updatePoints(snake.id, snake.points, snake.user.player);
      snake.render();
      snake.move();
      snake.handleCollisions(this.snakes);
      snake.isDead();
    });

    this.apples.forEach(apple => {
      if (!apple.isEaten) {
        apple.render();
        apple.handleSnakeCollision();
      } else {
        this.apples = this.apples.filter(({id}) => apple.id !== id);
        this.apples.push(new Apple(this.snakes));
      }
    })

    setTimeout(this.update.bind(this), TIME_INTERVAL);
  }
}
