/// <reference path="../Excalibur/dist/Excalibur.d.ts" />
/// <reference path="config.ts" />
/// <reference path="resources.ts" />
/// <reference path="settings.ts" />

var game = new ex.Engine({
   canvasElementId: "game",
   width: Config.width,
   height: Config.height,
	pointerScope: ex.Input.PointerScope.Canvas,
});
