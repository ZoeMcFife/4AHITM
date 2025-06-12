//IMPORT STUFF
import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Settings und so
const loader = new GLTFLoader();
// Path to your glTF model file
const modelPath = './public/fighterGen7.gltf';


const animationSlider = document.getElementById('animationSlider');



const scene = new THREE.Scene();

const clock=new THREE.Clock();
scene.background=new THREE.Color(0xbfd1e5);
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
var mixer;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var controls = new OrbitControls( camera, renderer.domElement );
controls.maxPolarAngle = Math.PI / 2;
const ambientLight = new THREE.AmbientLight(0xFFFFFF); // Color
scene.add(ambientLight);



/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/
loader.load(modelPath, (gltf) => {
    const model = gltf.scene;

    // Position and scale the model as needed
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    camera.position.set(10, 10, 10);
    camera.lookAt(model.position);
    // Add the model to your scene
    scene.add(model);

    const animations = gltf.animations; // Extrahiere die Animation(en)
    mixer = new THREE.AnimationMixer(model);
    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);

        // Set the animation to stop after it's completed
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;

        action.play();
    });
    animate();
});




window.addEventListener( 'resize', onWindowResize );

//animate();


//camera.position.z = 0;

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
    if(mixer){
    mixer.update(clock.getDelta());
    }
	render();
}

//animate();


function render() {
    renderer.render( scene, camera );

}

function onWindowResize() {
    
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize( canvasWidth, canvasHeight );

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();

}


