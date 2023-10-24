"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugref = exports.cube = void 0;
var THREE = require("three");
// @ts-ignore
var GLTFLoader_js_1 = require("three/addons/loaders/GLTFLoader.js");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color('#000000');
var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('home').appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 0.2);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
exports.cube = new THREE.Mesh(geometry, material);
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
// lights
// '#9A5FC0'
var ambient = new THREE.AmbientLight(0xFFFFFF, 0.5);
var light = new THREE.SpotLight('#FFFFFF', 35, 100, 200, 0.25);
light.shadow.bias = -0.0005;
light.castShadow = true;
var monitorlight1 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
var monitorlight2 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
function setInitialTransforms() {
    light.position.set(0, 4.67, 0);
    light.rotation.set(8, 3.1, 0);
    monitorlight1.position.set(0.3, 2.3, -1.8);
    monitorlight1.rotation.set(0, 3, 0);
    monitorlight1.scale.set(1.5, 1.1, 1);
    monitorlight2.position.set(-1.8, 2.4, -1.6);
    monitorlight2.rotation.set(0, 3.5, 0);
    monitorlight2.scale.set(2, 1.1, 0);
    camera.position.set(0, 3, 3);
}
function addObjectsToScene() {
    scene.add(light);
    // scene.add(ambient)
    scene.add(monitorlight1);
    scene.add(monitorlight2);
    scene.add(exports.cube);
}
setInitialTransforms();
addObjectsToScene();
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
});
window.addEventListener('mouseup', function () {
    mouseclicked = false;
});
var moveAmount = 0.001;
var smallMoveAmount = 0.0001;
window.addEventListener('mousemove', function (e) {
    if (!mouseclicked) {
        camera.rotation.y -= e.movementX * smallMoveAmount;
        camera.rotation.x -= e.movementY * smallMoveAmount;
        return;
    }
    camera.rotation.y += e.movementX * moveAmount;
    camera.rotation.x += e.movementY * moveAmount;
});
exports.debugref = light;
