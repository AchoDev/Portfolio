"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_ts_1 = require("./home.ts");
var moveamountdebug = 0.1;
var lighttoggled = true;
home_ts_1.cube.position.x = home_ts_1.debugref.position.x;
home_ts_1.cube.position.y = home_ts_1.debugref.position.y;
home_ts_1.cube.position.z = home_ts_1.debugref.position.z;
home_ts_1.cube.rotation.x = home_ts_1.debugref.rotation.x;
home_ts_1.cube.rotation.y = home_ts_1.debugref.rotation.y;
home_ts_1.cube.rotation.z = home_ts_1.debugref.rotation.z;
home_ts_1.cube.scale.x = home_ts_1.debugref.scale.x;
home_ts_1.cube.scale.y = home_ts_1.debugref.scale.y;
home_ts_1.cube.scale.z = home_ts_1.debugref.scale.z;
document.getElementById("rightbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.x += moveamountdebug;
    home_ts_1.cube.position.x += moveamountdebug;
});
document.getElementById("leftbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.x -= moveamountdebug;
    home_ts_1.cube.position.x -= moveamountdebug;
});
document.getElementById("upbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.y += moveamountdebug;
    home_ts_1.cube.position.y += moveamountdebug;
});
document.getElementById("downbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.y -= moveamountdebug;
    home_ts_1.cube.position.y -= moveamountdebug;
});
document.getElementById("frontbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.z += moveamountdebug;
    home_ts_1.cube.position.z += moveamountdebug;
});
document.getElementById("backbutton").addEventListener("click", function () {
    home_ts_1.debugref.position.z -= moveamountdebug;
    home_ts_1.cube.position.z -= moveamountdebug;
});
document.getElementById("turnrightbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.y += moveamountdebug;
    home_ts_1.cube.rotation.y += moveamountdebug;
});
document.getElementById("turnleftbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.y -= moveamountdebug;
    home_ts_1.cube.rotation.y -= moveamountdebug;
});
document.getElementById("turnupbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.x -= moveamountdebug;
    home_ts_1.cube.rotation.x -= moveamountdebug;
});
document.getElementById("turndownbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.x += moveamountdebug;
    home_ts_1.cube.rotation.x += moveamountdebug;
});
document.getElementById("turnfrontbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.z += moveamountdebug;
    home_ts_1.cube.rotation.z += moveamountdebug;
});
document.getElementById("turnbackbutton").addEventListener("click", function () {
    home_ts_1.debugref.rotation.z -= moveamountdebug;
    home_ts_1.cube.rotation.z -= moveamountdebug;
});
document.getElementById("scalexbutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.x += moveamountdebug;
    home_ts_1.cube.scale.x += moveamountdebug;
});
document.getElementById("scaleybutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.y += moveamountdebug;
    home_ts_1.cube.scale.y += moveamountdebug;
});
document.getElementById("scalezbutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.z += moveamountdebug;
    home_ts_1.cube.scale.z += moveamountdebug;
});
document.getElementById("minusscalexbutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.x -= moveamountdebug;
    home_ts_1.cube.scale.x -= moveamountdebug;
});
document.getElementById("minusscaleybutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.y -= moveamountdebug;
    home_ts_1.cube.scale.y -= moveamountdebug;
});
document.getElementById("minusscalezbutton").addEventListener("click", function () {
    home_ts_1.debugref.scale.z -= moveamountdebug;
    home_ts_1.cube.scale.z -= moveamountdebug;
});
document.getElementById("printbutton").addEventListener("click", function () {
    console.log("POS:");
    console.log(home_ts_1.debugref.position);
    console.log("ROT:");
    console.log(home_ts_1.debugref.rotation);
    console.log("SCALE:");
    console.log(home_ts_1.debugref.scale);
    console.log("INTENSITY:");
    console.log(home_ts_1.debugref.intensity);
});
document.getElementById("togglebutton").addEventListener("click", function () {
    lighttoggled = !lighttoggled;
    home_ts_1.debugref.visible = lighttoggled;
    home_ts_1.cube.visible = lighttoggled;
});
document.getElementById("toggledebugbutton").addEventListener("click", function () {
    home_ts_1.cube.visible = !home_ts_1.cube.visible;
});
document.getElementById("debugrange").oninput = function (e) {
    moveamountdebug = document.getElementById("debugrange").value / 100;
};
document.getElementById("debugintensity").oninput = function (e) {
    home_ts_1.debugref.intensity = document.getElementById("debugintensity").value / 100;
};
