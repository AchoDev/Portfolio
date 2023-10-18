
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.background = new THREE.Color('#ffffff') 

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshLambertMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


const ambient = new THREE.AmbientLight(0xFFFFFF, 0.5)

const light = new THREE.SpotLight(0xFFFFFF, 1, 10, 200)
scene.add(light)
scene.add(ambient)


// light.position.z = 1

camera.position.z = 5

let angleX = 0
let angleY = 0



const moveAmount = 0.005
let mouseclicked = false 

function animate() {
	requestAnimationFrame( animate );

  // camera.rotation.x = angleY
  // camera.rotation.y = angleX

  if(mouseclicked) {
    cube.rotation.x = angleY
    cube.rotation.y = angleX
  }

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;


  cube.rotation 

	renderer.render( scene, camera );
}

animate();

window.addEventListener('mousedown', () => {
  mouseclicked = true
  angleX = cube.rotation.y
  angleY = cube.rotation.x
});
window.addEventListener('mouseup', () => mouseclicked = false);


window.addEventListener('mousemove', (e) => {
  if(!mouseclicked) return;

  angleX += e.movementX * moveAmount
  angleY += e.movementY * moveAmount
})