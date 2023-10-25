console.log("its ronnin mate");
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color('#000000');
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("home").appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 0.2);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
export const cube = new THREE.Mesh(geometry, material);
const loader = new GLTFLoader();
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
const ambient = new THREE.AmbientLight(0xFFFFFF, 0.5);
const light = new THREE.SpotLight('#FFFFFF', 35, 100, 200, 0.25);
light.shadow.bias = -0.0005;
light.castShadow = true;
const monitorlight1 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
const monitorlight2 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5);
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
    scene.add(cube);
}
setInitialTransforms();
addObjectsToScene();
let mouseclicked = false;
function animate() {
    requestAnimationFrame(animate);
    if (!mouseclicked) {
        camera.rotation.x = camera.rotation.x / 1.05;
        camera.rotation.y = camera.rotation.y / 1.05;
    }
    renderer.render(scene, camera);
}
animate();
window.addEventListener('mousedown', () => {
    mouseclicked = true;
});
window.addEventListener('mouseup', () => {
    mouseclicked = false;
});
const moveAmount = 0.001;
const smallMoveAmount = 0.0001;
window.addEventListener('mousemove', (e) => {
    if (!mouseclicked) {
        camera.rotation.y -= e.movementX * smallMoveAmount;
        camera.rotation.x -= e.movementY * smallMoveAmount;
        return;
    }
    camera.rotation.y += e.movementX * moveAmount;
    camera.rotation.x += e.movementY * moveAmount;
});
export const debugref = light;
