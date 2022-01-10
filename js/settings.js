const GAME_WIDTH = 800;  // ширина поля в пикселях
const GAME_HEIGHT = 600; // высота поля в пикселях

const BLOCK_SIZE = 20;   // размер одной клетки поля в пикселях

const GAME_HEIGHT_IN_BLOCKS = GAME_HEIGHT / BLOCK_SIZE - 1; // ширина поля в клетках
const GAME_WIDTH_IN_BLOCKS = GAME_WIDTH / BLOCK_SIZE - 1;   // высота поля в клетках
console.log('HEIGHT', GAME_HEIGHT_IN_BLOCKS)
console.log('WIDTH', GAME_WIDTH_IN_BLOCKS)

const TIME_INTERVAL = 500 // интервал времени перерисовки игрового экрана в милисекундах

const COLOR_BACKGROUND = "#c5f0a7";
const COLOR_SNAKE = "#000000";
const COLOR_APPLE = "#8aa173"

//описание начальных параметров игрока
const USERS = [
  {
    player: 1,
    startPosition: { // начальные координаты игрока в вклетках
      x: 20,
      y: 15
    },
    startLength: 4, // начальная длина змеи
    KEYS: {  //коды кнопок управления для этого игрока (посмотреть коды всех кнопок клавиатуры можно тут http://gcctech.org/csc/javascript/javascript_keycodes.htm)
      UP: 38,    // это код стрелки вверх
      DOWN: 40,  // это код стрелки вниз
      LEFT: 37,  // это код стрелки влево
      RIGHT: 39  // это код стрелки вправо
    }
  }
]

const APPLES_COUNT = 3;
