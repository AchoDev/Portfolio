
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.background = new THREE.Color('#000000') 

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('home').appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 0.2)
const material = new THREE.MeshLambertMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


const loader = new GLTFLoader()

loader.load(
  'room.glb',

  function(gltf) {
    scene.add(gltf.scene)
  },

  function(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded')
  },

  function(error) {
    console.log('error!!!!!')
    console.log(error)
  }
)

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.5)

const light = new THREE.SpotLight('#9A5FC0', 35, 10, 200, 0.25)

const monitorlight1 = new THREE.RectAreaLight(
  '#FFFFFF',
  1,
  10,
  5
)

monitorlight1.position.y = 3
cube.position.y = 3

light.castShadow = true

scene.add(light)
scene.add(ambient)
scene.add(monitorlight1)

let lighttoggled = true;

// light.position.z = 1

camera.position.z = 3

light.position.y = 6

camera.position.y = 3

let angleX = 0
let angleY = 0

const moveAmount = 0.001
const smallMoveAmount = 0.0001

let mouseclicked = false 

function animate() {
	requestAnimationFrame( animate );

  if(!mouseclicked) {
    camera.rotation.x = camera.rotation.x / 1.05
    camera.rotation.y = camera.rotation.y / 1.05
  }

	renderer.render( scene, camera );
}

animate();

window.addEventListener('mousedown', () => {
  mouseclicked = true
  // angleX = cube.rotation.y
  // angleY = cube.rotation.x

  document.body.style.cursor = "grabbing";
  
});
window.addEventListener('mouseup', () => {
  mouseclicked = false
  document.body.style.cursor = "grab";
});


window.addEventListener('mousemove', (e) => {
  if(!mouseclicked) {
    camera.rotation.y -= e.movementX * smallMoveAmount
    camera.rotation.x -= e.movementY * smallMoveAmount
    return
  }

  camera.rotation.y += e.movementX * moveAmount
  camera.rotation.x += e.movementY * moveAmount
})

let moveamountdebug = 0.1
const debugref = monitorlight1

document.getElementById("rightbutton").addEventListener("click", () => {
  debugref.position.x += moveamountdebug
  cube.position.x += moveamountdebug
})

document.getElementById("leftbutton").addEventListener("click", () => {
  debugref.position.x -= moveamountdebug
  cube.position.x -= moveamountdebug
})

document.getElementById("upbutton").addEventListener("click", () => {
  debugref.position.y += moveamountdebug
  cube.position.y += moveamountdebug
})

document.getElementById("downbutton").addEventListener("click", () => {
  debugref.position.y -= moveamountdebug
  cube.position.y -= moveamountdebug
})

document.getElementById("frontbutton").addEventListener("click", () => {
  debugref.position.z += moveamountdebug
  cube.position.z += moveamountdebug
})

document.getElementById("backbutton").addEventListener("click", () => {
  debugref.position.z -= moveamountdebug
  cube.position.z -= moveamountdebug
})


document.getElementById("turnrightbutton").addEventListener("click", () => {
  debugref.rotation.x += moveamountdebug
  cube.rotation.x += moveamountdebug
})

document.getElementById("turnleftbutton").addEventListener("click", () => {
  debugref.rotation.x -= moveamountdebug
  cube.rotation.x -= moveamountdebug
})

document.getElementById("turnupbutton").addEventListener("click", () => {
  debugref.rotation.y -= moveamountdebug
  cube.rotation.y -= moveamountdebug
})

document.getElementById("turndownbutton").addEventListener("click", () => {
  debugref.rotation.y += moveamountdebug
  cube.rotation.y += moveamountdebug
})

document.getElementById("turnfrontbutton").addEventListener("click", () => {
  debugref.rotation.z += moveamountdebug
  cube.rotation.z += moveamountdebug
})

document.getElementById("turnbackbutton").addEventListener("click", () => {
  debugref.rotation.z -= moveamountdebug
  cube.rotation.z -= moveamountdebug
})

document.getElementById("printbutton").addEventListener("click", () => {
  console.log("POS:")
  console.log(debugref.position.x)
  console.log(debugref.position.y)
  console.log(debugref.position.z)

  console.log("ROT: ")
  console.log(debugref.rotation.x)
  console.log(debugref.rotation.y)
  console.log(debugref.rotation.z)
})



document.getElementById("togglebutton").addEventListener("click", () => {
  lighttoggled = !lighttoggled

  monitorlight1.visible = lighttoggled
  cube.visible = lighttoggled
})

document.getElementById("debugrange").oninput = (e) => {
  moveamountdebug = document.getElementById("debugrange").value / 100
}