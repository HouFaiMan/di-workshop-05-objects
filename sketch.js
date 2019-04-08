var ballCount = 5;
var balls = [];

function addBall() {
    balls.push(new Ball(mouseX, mouseY));
}

function setup() {
    createCanvas(400, 400)
    
    // for five balls, generate a random position (x and Y) and speed to increment.
    // uses arrays for holding the x an y coordinates and also the speed of each.
    for (var i = 0; i < ballCount; i = i + 1) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(200)
    
    // for each of the balls, add the speed and create the balls in the new position.
    for (var i = 0; i < balls.length; i = i + 1) {
        balls[i].create();
    }
}

class Ball {
    
    constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.speedX = Math.random() * 3;
        this.speedY = Math.random() * 3;
    }
    
    create() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) {
            this.speedX = this.speedX * -1
        }
        
        if (this.y < 0 || this.y > height) {
            this.speedY = this.speedY * -1
        }
        
        ellipse(this.x - 5, this.y - 5, 20, 20)
    }
}

// One of the problems this might face is that not all of the values are connected with each other. 
// If the user wishes to edit or remove one of the values for a ball, they will need to ensure that the other values are also edited/deleted.
window.addEventListener('click', addBall);