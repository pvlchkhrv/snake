import {Snake} from './Snake.js';
import {Apple} from './Apple.js';
const PLAYERS = [];
const SNAKES = [];

init();
gameLoop();



function init() {
  USERS.forEach(user => PLAYERS.push(new Snake(user)));
  PLAYERS.forEach(player => SNAKES.push(player.getSnake()));
}

function gameLoop() {
  HELPERS.clearField();
  const apple = new Apple(PLAYERS);
  apple.handleSnakeCollision();
  apple.render();
  PLAYERS.forEach(snake => {
    snake.render();
    snake.move();
  });



  // пример использования объекта HELPERS
  // просто рисуем змейку по параметрам из настроек пользователя
  // и яблоко каждый раз в случайном месте
  // for (var i = 0; i < USER.startLength; i++) {
  //     HELPERS.drawSnakeSegment(USER.startPosition.x - i, USER.startPosition.y );
  // }
  // HELPERS.drawApple(HELPERS.random.getX(), HELPERS.random.getY());
  // конец примера

  setTimeout(gameLoop, TIME_INTERVAL)
}
