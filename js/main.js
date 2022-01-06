import {Snake} from './Snake.js';
import {Apple} from './Apple.js';

init();

gameLoop();

function init() {
  for (let i = 0; i < APPLES_COUNT; i++) {
    APPLES.push(new Apple());
  }

  USERS.forEach(user => SNAKES.push(new Snake(user)));
}

function gameLoop() {
  HELPERS.clearField();
  if (APPLES.length < APPLES_COUNT) new Apple(SNAKES);

  APPLES.forEach(apple => {
    apple.render(SNAKES);
  });

  SNAKES.forEach(snake => {
    snake.render();
    snake.eatApple(APPLES);
    snake.move();
  });

  setTimeout(gameLoop, TIME_INTERVAL)
}
