var paddle1, paddle2;
var paddleVel1, paddleVel2;
var ballVel;
var ball;

function setup() {
    createCanvas(600, 400);
    paddleVel1 = paddleVel2 = 0;
    paddle1 = paddle2 = height / 2 - 50;
    ball = createVector(width/2, height/2);
    ballVel = createVector(random(-2,2),random(-2,2));
}

function draw() {
    background(51);

    rect(20, paddle1, 15, 100);
    rect(width-35, paddle2, 15, 100);
    ellipse(ball.x, ball.y, 20);
    movePaddles();
    moveBall();
}

function movePaddles() {

    if(keyIsDown(87)){
        paddleVel1 -= 5;
    }else if(keyIsDown(83)){
        paddleVel1 += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        paddleVel2 -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        paddleVel2 += 5;
    }

      paddleVel1 *= 0.4;
      paddleVel2 *= 0.4;

      paddle1 += paddleVel1;
      paddle2 += paddleVel2;

    paddle1 = constrain(paddle1, 0, height - 100);
    paddle2 = constrain(paddle2, 0, height - 100);
}

function moveBall() {

}
