/// <reference path="../Excalibur/dist/Excalibur.d.ts" />
/// <reference path="utility.ts" />
/// <reference path="config.ts" />
/// <reference path="resources.ts" />
/// <reference path="settings.ts" />
/// <reference path="spawnballs.ts" />

var game = new ex.Engine({
      canvasElementId: "mygame"
    , width: Config.width
    , height: Config.height
    , pointerScope: ex.Input.PointerScope.Canvas
});

var ballSpawns = [
      {color: 'Red', size: 10, x: 100, y:300}
    , {color: 'Blue', size: 15, x: 55, y:222}
    , {color: 'Black', size: 20, x: 221, y:555}
    , {color: 'Yellow', size: 25, x: 333, y:111}
    , {color: 'Green', size: 5, x: 444, y:22}
];

var spawnAllBalls = function (){
    for (var ii=0; ii < 5; ii++){
        spawnBall(ballSpawns[ii]);
    };
};

var changeInterval = function () {
    
}


//main
for (var i=0; i < 25; i++){
    spawnAllBalls();
};
console.log(game);
game.start();