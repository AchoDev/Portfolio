"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var GLTFLoader_js_1 = require("three/addons/loaders/GLTFLoader.js");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color('#000000');
var renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('home').appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 0.2);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
var loader = new GLTFLoader_js_1.GLTFLoader();
loader.load('room.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(gltf.scene);
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function (error) {
    console.log('error!!!!!');
    console.log(error);
});
var ambient = new THREE.AmbientLight(0xFFFFFF, 0.5);
// '#9A5FC0'
var light = new THREE.SpotLight('#FFFFFF', 35, 100, 200, 0.25);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
light.castShadow = true;
light.position.y = 4.67;
light.rotation.x = 8;
light.rotation.y = 3.1;
light.shadow.bias = -0.0005;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
var monitorlight1 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
var monitorlight2 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
monitorlight1.position.x = 0.3;
monitorlight1.position.y = 2.3;
monitorlight1.position.z = -1.8;
monitorlight1.rotation.y = 3;
monitorlight1.scale.x = 1.5;
monitorlight1.scale.y = 1.1;
monitorlight1.scale.z = 1;
monitorlight2.position.x = -1.8;
monitorlight2.position.y = 2.4;
monitorlight2.position.z = -1.6;
monitorlight2.rotation.y = 3.5;
monitorlight2.scale.x = 2;
monitorlight2.scale.y = 1.1;
cube.position.x = 3;
scene.add(light);
// scene.add(ambient)
scene.add(monitorlight1);
scene.add(monitorlight2);
var lighttoggled = true;
// light.position.z = 1
camera.position.z = 3;
camera.position.y = 3;
var angleX = 0;
var angleY = 0;
var moveAmount = 0.001;
var smallMoveAmount = 0.0001;
var mouseclicked = false;
function animate() {
    requestAnimationFrame(animate);
    if (!mouseclicked) {
        camera.rotation.x = camera.rotation.x / 1.05;
        camera.rotation.y = camera.rotation.y / 1.05;
    }
    renderer.render(scene, camera);
}
animate();
window.addEventListener('mousedown', function () {
    mouseclicked = true;
    // angleX = cube.rotation.y
    // angleY = cube.rotation.x
});
window.addEventListener('mouseup', function () {
    mouseclicked = false;
});
window.addEventListener('mousemove', function (e) {
    if (!mouseclicked) {
        camera.rotation.y -= e.movementX * smallMoveAmount;
        camera.rotation.x -= e.movementY * smallMoveAmount;
        return;
    }
    camera.rotation.y += e.movementX * moveAmount;
    camera.rotation.x += e.movementY * moveAmount;
});
var moveamountdebug = 0.1;
var debugref = light;
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
    moveamountdebug = document.getElementById("debugrange").value / 100;
};
document.getElementById("debugintensity").oninput = function (e) {
    debugref.intensity = document.getElementById("debugintensity").value / 100;
};
