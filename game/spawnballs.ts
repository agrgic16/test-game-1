/// <reference path="references.ts" />
/*
let spawnBall = (ballDef) => {
    //var ball = new ex.Actor(ballDef.x, ballDef.y, ballDef.size, ballDef.size);
    //x, y, width, height
    
    ball.color = ex.Color[ballDef.color];
    ball.dx = 100;
    ball.dy = 100;
    ball.collisionType = ex.CollisionType.Elastic;
    ball.on('update', function () {
        
        if (this.x < 0){
            this.dx *= -1;
        }
        if (this.x + this.getWidth() > game.getWidth()){
            this.dx *= -1;
        }
        if (this.y < 0){
            this.dy *= -1;
        }
        if (this.y + this.getHeight() > game.getHeight()){
            this.dy *= -1;
        }
        
    });
    ball.draw = function (ctx, delta) {
        
        ctx.fillStyle = this.color.toString();
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballDef.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
            
    }
    let ball = new Ball(ballDef);
    game.add(ball);
    //console.log(ball);
}*/