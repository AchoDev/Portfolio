import { cube, debugref } from './home.js';
var moveamountdebug = 0.1;
var lighttoggled = true;
cube.position.x = debugref.position.x;
cube.position.y = debugref.position.y;
cube.position.z = debugref.position.z;
cube.rotation.x = debugref.rotation.x;
cube.rotation.y = debugref.rotation.y;
cube.rotation.z = debugref.rotation.z;
cube.scale.x = debugref.scale.x;
cube.scale.y = debugref.scale.y;
cube.scale.z = debugref.scale.z;
document.getElementById("rightbutton").addEventListener("click", function () {
    debugref.position.x += moveamountdebug;
    cube.position.x += moveamountdebug;
});
document.getElementById("leftbutton").addEventListener("click", function () {
    debugref.position.x -= moveamountdebug;
    cube.position.x -= moveamountdebug;
});
document.getElementById("upbutton").addEventListener("click", function () {
    debugref.position.y += moveamountdebug;
    cube.position.y += moveamountdebug;
});
document.getElementById("downbutton").addEventListener("click", function () {
    debugref.position.y -= moveamountdebug;
    cube.position.y -= moveamountdebug;
});
document.getElementById("frontbutton").addEventListener("click", function () {
    debugref.position.z += moveamountdebug;
    cube.position.z += moveamountdebug;
});
document.getElementById("backbutton").addEventListener("click", function () {
    debugref.position.z -= moveamountdebug;
    cube.position.z -= moveamountdebug;
});
document.getElementById("turnrightbutton").addEventListener("click", function () {
    debugref.rotation.y += moveamountdebug;
    cube.rotation.y += moveamountdebug;
});
document.getElementById("turnleftbutton").addEventListener("click", function () {
    debugref.rotation.y -= moveamountdebug;
    cube.rotation.y -= moveamountdebug;
});
document.getElementById("turnupbutton").addEventListener("click", function () {
    debugref.rotation.x -= moveamountdebug;
    cube.rotation.x -= moveamountdebug;
});
document.getElementById("turndownbutton").addEventListener("click", function () {
    debugref.rotation.x += moveamountdebug;
    cube.rotation.x += moveamountdebug;
});
document.getElementById("turnfrontbutton").addEventListener("click", function () {
    debugref.rotation.z += moveamountdebug;
    cube.rotation.z += moveamountdebug;
});
document.getElementById("turnbackbutton").addEventListener("click", function () {
    debugref.rotation.z -= moveamountdebug;
    cube.rotation.z -= moveamountdebug;
});
document.getElementById("scalexbutton").addEventListener("click", function () {
    debugref.scale.x += moveamountdebug;
    cube.scale.x += moveamountdebug;
});
document.getElementById("scaleybutton").addEventListener("click", function () {
    debugref.scale.y += moveamountdebug;
    cube.scale.y += moveamountdebug;
});
document.getElementById("scalezbutton").addEventListener("click", function () {
    debugref.scale.z += moveamountdebug;
    cube.scale.z += moveamountdebug;
});
document.getElementById("minusscalexbutton").addEventListener("click", function () {
    debugref.scale.x -= moveamountdebug;
    cube.scale.x -= moveamountdebug;
});
document.getElementById("minusscaleybutton").addEventListener("click", function () {
    debugref.scale.y -= moveamountdebug;
    cube.scale.y -= moveamountdebug;
});
document.getElementById("minusscalezbutton").addEventListener("click", function () {
    debugref.scale.z -= moveamountdebug;
    cube.scale.z -= moveamountdebug;
});
document.getElementById("printbutton").addEventListener("click", function () {
    console.log("POS:");
    console.log(debugref.position);
    console.log("ROT:");
    console.log(debugref.rotation);
    console.log("SCALE:");
    console.log(debugref.scale);
    console.log("INTENSITY:");
    console.log(debugref.intensity);
});
document.getElementById("togglebutton").addEventListener("click", function () {
    lighttoggled = !lighttoggled;
    debugref.visible = lighttoggled;
    cube.visible = lighttoggled;
});
document.getElementById("toggledebugbutton").addEventListener("click", function () {
    cube.visible = !cube.visible;
});
document.getElementById("debugrange").oninput = function (e) {
    var slider = e.target;
    moveamountdebug = parseFloat(slider.value) / 100;
};
document.getElementById("debugintensity").oninput = function (e) {
    var slider = e.target;
    debugref.intensity = parseFloat(slider.value) / 100;
};
