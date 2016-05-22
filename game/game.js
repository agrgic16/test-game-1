var Config = {
    width: 960,
    height: 640,
};
var Resources = {};
var Options = {};
var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());
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
