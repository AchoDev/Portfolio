"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugref = exports.cube = void 0;
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
exports.cube = new THREE.Mesh(geometry, material);
scene.add(exports.cube);
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
exports.cube.position.x = 3;
scene.add(light);
// scene.add(ambient)
scene.add(monitorlight1);
scene.add(monitorlight2);
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
exports.debugref = light;
