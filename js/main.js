import {Game} from './Game.js';

const game = new Game();
game.init();
game.update();


// init();
//
// gameLoop();
//
// function init() {
//   USERS.forEach(user => SNAKES.push(new Snake(user)));
//
//   for (let i = 0; i < APPLES_COUNT; i++) {
//     APPLES.push(new Apple(SNAKES));
//   }
// }
//
// function gameLoop() {
//   HELPERS.clearField();
//
//   // if (APPLES.length < APPLES_COUNT)  {
//   //   debugger
//   //   APPLES.push(new Apple(SNAKES));
//   // }
//   //
//   // APPLES.forEach(apple => {
//   //   if (!apple.isEaten) {
//   //     apple.render();
//   //     apple.handleSnakeCollision();
//   //   }
//   // });
//
//   for (let i = 0; i < APPLES_COUNT; i++) {
//     const apple = new Apple(SNAKES);
//   }
//
//   SNAKES.forEach(snake => {
//     snake.render();
//     snake.move();
//   });
//
//   setTimeout(gameLoop, TIME_INTERVAL)
// }
