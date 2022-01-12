const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const BLOCK_SIZE = 20;

const GAME_HEIGHT_IN_BLOCKS = GAME_HEIGHT / BLOCK_SIZE - 1;
const GAME_WIDTH_IN_BLOCKS = GAME_WIDTH / BLOCK_SIZE - 1;

const TIME_INTERVAL = 500

const COLOR_BACKGROUND = "#c5f0a7";
const COLOR_SNAKE = "#000000";
const COLOR_APPLE = "#8aa173"

const USERS = [
  {
    player: 1,
    startPosition: {
      x: 20,
      y: 15
    },
    startLength: 4,
    KEYS: {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    }
  },
  {
    player: 2,
    startPosition: {
      x: 15,
      y: 10
    },
    startLength: 4,
    KEYS: {
      UP: 87,    // w
      DOWN: 83,  // s
      LEFT: 65,  // a
      RIGHT: 68  // d
    }
  },
  {
    player: 'bot',
    startPosition: {
      x: 10,
      y: 5
    },
    startLength: 4,
  },
]

const APPLES_COUNT = 3;
const POINTS_PER_APPLE = 10;

const DIRECTIONS = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
}
