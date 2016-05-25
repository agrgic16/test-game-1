var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="references.ts" />
var randomIntBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var bounceWithinScreen = function (actor, game) {
    if (actor.x < 0) {
        actor.dx *= -1;
    }
    if (actor.x + actor.getWidth() > game.getWidth()) {
        actor.dx *= -1;
    }
    if (actor.y < 0) {
        actor.dy *= -1;
    }
    if (actor.y + actor.getHeight() > game.getHeight()) {
        actor.dy *= -1;
    }
};
var Config = {
    width: 1200,
    height: 800,
};
var Resources = {};
var Options = {};
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
/// <reference path="../Excalibur/dist/Excalibur.d.ts" />
/// <reference path="utility.ts" />
/// <reference path="config.ts" />
/// <reference path="resources.ts" />
/// <reference path="settings.ts" />
/// <rererence path="ball.ts" />
/// <reference path="spawnballs.ts" />
/// <reference path="game.ts" /> 
/// <reference path="references.ts"/>
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(ballDef) {
        _super.call(this, ballDef.x, ballDef.y, ballDef.size, ballDef.size, ex.Color[ballDef.color]);
        this._ballDef = ballDef;
        this._size = ballDef.size;
        this._color = ex.Color[ballDef.color];
        this.dx = 100;
        this.dy = 100;
        this.collisionType = ex.CollisionType.Elastic;
        this.on('collision', this._collision);
        this.on('postdraw', this._postdraw);
        this.on('update', this._update);
    }
    Ball.prototype._collision = function (collision) {
        var thiscolor;
        var thatcolor;
        var thissize;
        var thatsize;
        var otherball = collision.other;
        thiscolor = this._color;
        thatcolor = otherball._color;
        thissize = this._size;
        thatsize = otherball._size;
        if (thissize === thatsize && thiscolor === thatcolor) {
            return;
        }
        if (thiscolor !== thatcolor) {
            if (thissize > thatsize) {
                this.changeSize(this._size + 1);
            }
            else {
                if (thissize === thatsize) {
                    //do nothing
                    this.changeSize(this._size + 1);
                }
                else {
                    if (thissize > 5) {
                        this.changeSize(this._size - 2);
                    }
                    else {
                        this.kill();
                    }
                }
            }
            this._color = otherball._color;
        } /* else {
            if (thissize > thatsize){
                if (thissize > 5) {
                    this.changeSize(this._size - 2);
                } else {
                    this.kill();
                }
             
            } else {
                if (thissize === thatsize){
                    //do nothing
                } else {
                    this.changeSize(this._size + 1);
                }
            }
        }*/
    };
    Ball.prototype._update = function (update) {
        bounceWithinScreen(this, game);
    };
    Ball.prototype.changeSize = function (size) {
        if (size > 35) {
            var nb = new Ball(ballSpawns[0]);
            game.add(nb);
            size = 15;
        }
        if (size < 9) {
            this.kill();
        }
        this.setWidth(size);
        this.setHeight(size);
        this._size = size;
    };
    Ball.prototype.updateColor = function (color) {
        this.color = color;
    };
    Ball.prototype.draw = function (ctx, delta) {
        ctx.fillStyle = this._color.toString();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this._size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    Ball.prototype._postdraw = function (evt) {
    };
    return Ball;
}(ex.Actor));
/// <reference path="references.ts" />
/// <reference path="ball.ts" />
var game = new ex.Engine({
    canvasElementId: "mygame",
    width: Config.width,
    height: Config.height,
    pointerScope: ex.Input.PointerScope.Canvas
});
var ballSpawns = [
    { color: 'Red', size: 15, x: 55, y: 300 },
    { color: 'White', size: 15, x: 110, y: 222 },
    { color: 'Azure', size: 15, x: 165, y: 555 },
    { color: 'Yellow', size: 15, x: 230, y: 111 },
    { color: 'Green', size: 15, x: 285, y: 22 },
    { color: 'Orange', size: 15, x: 340, y: 666 },
    { color: 'Magenta', size: 15, x: 395, y: 700 },
    { color: 'Viridian', size: 15, x: 450, y: 750 }
];
var spawnAllBalls = function () {
    for (var i = 0; i < ballSpawns.length; i++) {
        var nb = new Ball(ballSpawns[i]);
        game.add(nb);
    }
    ;
};
var changeSpeedInterval = function () {
    //change the speed interval logic here
};
//main
for (var i = 0; i < 40; i++) {
    spawnAllBalls();
}
;
game.start();
