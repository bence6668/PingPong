var paddle1, paddle2;
var paddleVel1, paddleVel2;
var p1Score, p2Score;
var ballVel;
var ball;

function setup() {
    createCanvas(600, 400);

    paddleVel1 = paddleVel2 = 0;
    paddle1 = paddle2 = height / 2 - 50;

    initBall();

    p1Score = p2Score = 0;

    textAlign(CENTER);
    textSize(30);
    fill(255);
}

function draw() {
    background(51);

    rect(20, paddle1, 15, 100);
    rect(width-35, paddle2, 15, 100);
    ellipse(ball.x, ball.y, 20);
    movePaddles();
    moveBall();
    text(p1Score + " | " + p2Score, width/2, 50);
}

function movePaddles() {

    if(keyIsDown(87)){
        paddleVel1 -= 8;
    }else if(keyIsDown(83)){
        paddleVel1 += 8;
    }

    if (keyIsDown(UP_ARROW)) {
        paddleVel2 -= 8;
    } else if (keyIsDown(DOWN_ARROW)) {
        paddleVel2 += 8;
    }

      paddleVel1 *= 0.4;
      paddleVel2 *= 0.4;

      paddle1 += paddleVel1;
      paddle2 += paddleVel2;

    paddle1 = constrain(paddle1, 0, height - 100);
    paddle2 = constrain(paddle2, 0, height - 100);
}

function moveBall() {

    ball.y += ballVel.y;
    ball.x += ballVel.x;
    
    if (ball.y-10 < 0 || ball.y+10 > height) {
        ballVel.y *= -1; 
    }

    if (ball.x < 42.5) {

        if (ball.y > paddle1 && ball.y < paddle1 + 100) {
            ballVel.x *= -1;
            ballVel.mult(1.1);
        } else {
            p2Score++;
            initBall();
            return; 
        }
        
    } else if (ball.x > width - 42.5) {

        if (ball.y > paddle2 && ball.y < paddle2 + 100) {
            ballVel.x *= -1;
            ballVel.mult(1.1);
        } else {
            p1Score++;
            initBall();
        }
    }

}

function initBall() {
    ball = createVector(width / 2, height / 2);
    ballVel = createVector(2, 2);
}
