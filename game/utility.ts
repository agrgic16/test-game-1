/// <reference path="references.ts" />

var randomIntBetween = function (min, max) {
    
    return Math.floor(Math.random() * (max-min+1) + min);
    
}


var bounceWithinScreen = function (actor: ex.Actor, game: ex.Engine) {
        if (actor.x < 0){
            actor.dx *= -1;
        }
        if (actor.x + actor.getWidth() > game.getWidth()){
            actor.dx *= -1;
        }
        if (actor.y < 0){
            actor.dy *= -1;
        }
        if (actor.y + actor.getHeight() > game.getHeight()){
            actor.dy *= -1;
        }
}