import { cube, debugref } from './home.js';
let moveamountdebug = 0.1;
let lighttoggled = true;
cube.position.x = debugref.position.x;
cube.position.y = debugref.position.y;
cube.position.z = debugref.position.z;
cube.rotation.x = debugref.rotation.x;
cube.rotation.y = debugref.rotation.y;
cube.rotation.z = debugref.rotation.z;
cube.scale.x = debugref.scale.x;
cube.scale.y = debugref.scale.y;
cube.scale.z = debugref.scale.z;
document.getElementById("rightbutton").addEventListener("click", () => {
    debugref.position.x += moveamountdebug;
    cube.position.x += moveamountdebug;
});
document.getElementById("leftbutton").addEventListener("click", () => {
    debugref.position.x -= moveamountdebug;
    cube.position.x -= moveamountdebug;
});
document.getElementById("upbutton").addEventListener("click", () => {
    debugref.position.y += moveamountdebug;
    cube.position.y += moveamountdebug;
});
document.getElementById("downbutton").addEventListener("click", () => {
    debugref.position.y -= moveamountdebug;
    cube.position.y -= moveamountdebug;
});
document.getElementById("frontbutton").addEventListener("click", () => {
    debugref.position.z += moveamountdebug;
    cube.position.z += moveamountdebug;
});
document.getElementById("backbutton").addEventListener("click", () => {
    debugref.position.z -= moveamountdebug;
    cube.position.z -= moveamountdebug;
});
document.getElementById("turnrightbutton").addEventListener("click", () => {
    debugref.rotation.y += moveamountdebug;
    cube.rotation.y += moveamountdebug;
});
document.getElementById("turnleftbutton").addEventListener("click", () => {
    debugref.rotation.y -= moveamountdebug;
    cube.rotation.y -= moveamountdebug;
});
document.getElementById("turnupbutton").addEventListener("click", () => {
    debugref.rotation.x -= moveamountdebug;
    cube.rotation.x -= moveamountdebug;
});
document.getElementById("turndownbutton").addEventListener("click", () => {
    debugref.rotation.x += moveamountdebug;
    cube.rotation.x += moveamountdebug;
});
document.getElementById("turnfrontbutton").addEventListener("click", () => {
    debugref.rotation.z += moveamountdebug;
    cube.rotation.z += moveamountdebug;
});
document.getElementById("turnbackbutton").addEventListener("click", () => {
    debugref.rotation.z -= moveamountdebug;
    cube.rotation.z -= moveamountdebug;
});
document.getElementById("scalexbutton").addEventListener("click", () => {
    debugref.scale.x += moveamountdebug;
    cube.scale.x += moveamountdebug;
});
document.getElementById("scaleybutton").addEventListener("click", () => {
    debugref.scale.y += moveamountdebug;
    cube.scale.y += moveamountdebug;
});
document.getElementById("scalezbutton").addEventListener("click", () => {
    debugref.scale.z += moveamountdebug;
    cube.scale.z += moveamountdebug;
});
document.getElementById("minusscalexbutton").addEventListener("click", () => {
    debugref.scale.x -= moveamountdebug;
    cube.scale.x -= moveamountdebug;
});
document.getElementById("minusscaleybutton").addEventListener("click", () => {
    debugref.scale.y -= moveamountdebug;
    cube.scale.y -= moveamountdebug;
});
document.getElementById("minusscalezbutton").addEventListener("click", () => {
    debugref.scale.z -= moveamountdebug;
    cube.scale.z -= moveamountdebug;
});
document.getElementById("printbutton").addEventListener("click", () => {
    console.log("POS:");
    console.log(debugref.position);
    console.log("ROT:");
    console.log(debugref.rotation);
    console.log("SCALE:");
    console.log(debugref.scale);
    console.log("INTENSITY:");
    console.log(debugref.intensity);
});
document.getElementById("togglebutton").addEventListener("click", () => {
    lighttoggled = !lighttoggled;
    debugref.visible = lighttoggled;
    cube.visible = lighttoggled;
});
document.getElementById("toggledebugbutton").addEventListener("click", () => {
    cube.visible = !cube.visible;
});
document.getElementById("debugrange").oninput = (e) => {
    const slider = e.target;
    moveamountdebug = parseFloat(slider.value) / 100;
};
document.getElementById("debugintensity").oninput = (e) => {
    const slider = e.target;
    debugref.intensity = parseFloat(slider.value) / 100;
};
