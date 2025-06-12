import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.maxPolarAngle = Math.PI / 2;

const ambientLight = new THREE.AmbientLight(0xFFFFFF); // Color
scene.add(ambientLight);

loader.load( 'HouseA.glb', function ( gltf ) {

    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    scene.add( gltf.scene );

}, undefined, function ( error ) {

    console.error( error );

} );


camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();