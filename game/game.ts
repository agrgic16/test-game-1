/// <reference path="references.ts" />
/// <reference path="ball.ts" />

var game = new ex.Engine({
      canvasElementId: "mygame"
    , width: Config.width
    , height: Config.height
    , pointerScope: ex.Input.PointerScope.Canvas
});

var ballSpawns = [
      {color: 'Red', size: 15, x: 55, y:300}
    , {color: 'White', size: 15, x: 110, y:222}
    , {color: 'Azure', size: 15, x: 165, y:555}
    , {color: 'Yellow', size: 15, x: 230, y:111}
    , {color: 'Green', size: 15, x: 285, y:22}
    , {color: 'Orange', size: 15, x: 340, y:666}
    , {color: 'Magenta', size: 15, x: 395, y:700}
    , {color: 'Viridian', size: 15, x: 450, y:750}
];

var spawnAllBalls = function (){
    for (var i=0; i < ballSpawns.length; i++){
        let nb = new Ball(ballSpawns[i]);
        game.add(nb);
    };
};

var changeSpeedInterval = function () {
    //change the speed interval logic here
    
}

//main
for (var i=0; i < 40; i++){
    spawnAllBalls();
};

game.start();