var randomIntBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var Config = {
    width: 800,
    height: 600,
};
var Resources = {};
var Options = {};
/// <reference path="game.ts" />
var spawnBall = function (ballDef) {
    var ball = new ex.Actor(ballDef.x, ballDef.y, 20, 20);
    //x, y, width, height
    ball.color = ex.Color[ballDef.color];
    ball.dx = 100;
    ball.dy = 100;
    ball.collisionType = ex.CollisionType.Elastic;
    ball.on('update', function () {
        if (this.x < 0) {
            this.dx *= -1;
        }
        if (this.x + this.getWidth() > game.getWidth()) {
            this.dx *= -1;
        }
        if (this.y < 0) {
            this.dy *= -1;
        }
        if (this.y + this.getHeight() > game.getHeight()) {
            this.dy *= -1;
        }
    });
    ball.draw = function (ctx, delta) {
        ctx.fillStyle = this.color.toString();
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballDef.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    game.add(ball);
};
/// <reference path="../Excalibur/dist/Excalibur.d.ts" />
/// <reference path="utility.ts" />
/// <reference path="config.ts" />
/// <reference path="resources.ts" />
/// <reference path="settings.ts" />
/// <reference path="spawnballs.ts" />
var game = new ex.Engine({
    canvasElementId: "mygame",
    width: Config.width,
    height: Config.height,
    pointerScope: ex.Input.PointerScope.Canvas
});
var ballSpawns = [
    { color: 'Red', size: 10, x: 100, y: 300 },
    { color: 'Blue', size: 15, x: 55, y: 222 },
    { color: 'Black', size: 20, x: 221, y: 555 },
    { color: 'Yellow', size: 25, x: 333, y: 111 },
    { color: 'Green', size: 5, x: 444, y: 22 }
];
var spawnAllBalls = function () {
    for (var ii = 0; ii < 5; ii++) {
        spawnBall(ballSpawns[ii]);
    }
    ;
};
var changeInterval = function () {
};
//main
for (var i = 0; i < 25; i++) {
    spawnAllBalls();
}
;
console.log(game);
game.start();
