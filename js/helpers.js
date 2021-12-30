const HELPERS = new Helpers();

function Helpers() {
    const BLOCK_BORDER_RADIUS = 5;
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext('2d');
    
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    this.clearField = clearField;
    this.drawSnakeSegment = drawSnakeSegment;
    this.drawApple = drawApple;
    this.random = {
        getX: getRandomX,
        getY: getRandomY
    }

    function clearField() {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
    function drawSnakeSegment(x, y) {
        roundRect(x, y, COLOR_SNAKE);
    }
    function drawApple(x, y) {
        x = x * BLOCK_SIZE;
        y = y * BLOCK_SIZE;
        
        ctx.fillStyle = COLOR_APPLE;
        ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE); 
    }
    function roundRect(x, y, color) {
        x = x * BLOCK_SIZE;
        y = y * BLOCK_SIZE;
    
        ctx.beginPath();
        ctx.moveTo(x + BLOCK_BORDER_RADIUS, y);
        ctx.lineTo(x + BLOCK_SIZE - BLOCK_BORDER_RADIUS, y);
        ctx.quadraticCurveTo(x + BLOCK_SIZE, y, x + BLOCK_SIZE, y + BLOCK_BORDER_RADIUS);
        ctx.lineTo(x + BLOCK_SIZE, y + BLOCK_SIZE - BLOCK_BORDER_RADIUS);
        ctx.quadraticCurveTo(x + BLOCK_SIZE, y + BLOCK_SIZE, x + BLOCK_SIZE - BLOCK_BORDER_RADIUS, y + BLOCK_SIZE);
        ctx.lineTo(x + BLOCK_BORDER_RADIUS, y + BLOCK_SIZE);
        ctx.quadraticCurveTo(x, y + BLOCK_SIZE, x, y + BLOCK_SIZE - BLOCK_BORDER_RADIUS);
        ctx.lineTo(x, y + BLOCK_BORDER_RADIUS);
        ctx.quadraticCurveTo(x, y, x + BLOCK_BORDER_RADIUS, y);
        ctx.closePath();
        
        ctx.strokeStyle = COLOR_BACKGROUND;
        ctx.fillStyle = color;

        ctx.fill();    
        ctx.stroke();
    }   

    function getRandomX() {
        return getRandomNumber(GAME_WIDTH_IN_BLOCKS);
    }

    function getRandomY() {
        return getRandomNumber(GAME_HEIGHT_IN_BLOCKS);
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }
}

            








