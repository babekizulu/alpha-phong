//libs
import * as THREE from 'three';
const {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshPhongMaterial, Mesh, DirectionalLight} = THREE;
//style
import './scss/App.scss';
//dom elements
const canvas = document.querySelector('#canvas');
//instantiate a renderer
const renderer = new WebGLRenderer({canvas});
//camera args: 
const fieldOfView = 75;
const aspectRatio = 2;
const near = 0.1;
const far = 5;
//instantiate a perspective camera
const camera = new PerspectiveCamera(fieldOfView, aspectRatio, near, far);
//set camera position
camera.position.z = 2;
//instantiate a scene
const scene = new Scene();
//geometry args: 
const width = 1;
const height = 1;
const depth = 1;
//instantiate a geometry
const geometry = new BoxGeometry(width, height, depth);
//instantiate a material
const material = new MeshPhongMaterial({color: 0x44aa88});
//light args: 
const color = 0xFFFFFF;
const intensity = 1;
//instantiate a directional light
const light = new DirectionalLight(color, intensity);
//set light position
light.position.set(-1, 2, 4);
//add light to scene
scene.add(light);
//add new cube
const newCube = (geometry, color, x) => {
    //instantiate a material
    const material = new MeshPhongMaterial({color});
    //instantiate a new mesh 
    const cube = new Mesh(geometry, material);
    //add cube to scene
    scene.add(cube);
    //set cube's position along x axis to 'x' parameter
    cube.position.x = x;
    return cube;
}
//create an array of cubes
const cubeArr = [
    //center cube
    newCube(geometry, 0x44aa88, 0),
    //left cube
    newCube(geometry, 0x8844aa, -2),
    //right cube
    newCube(geometry, 0xaa8844, 2)
];
//render the scene
renderer.render(scene, camera);
//create an animation loop
const render = t => {
    //convert time to milliseconds
    t *= 0.001;
    //loop through cubes and set a different rotation speed for each
    cubeArr.forEach((cube, i) => {
        const speed = 1 + i * 0.1;
        const rot = t * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });
    //render scene
    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

//initial animation frame request (runs once)
//- automatically passes in a time value to our render loop
requestAnimationFrame(render);