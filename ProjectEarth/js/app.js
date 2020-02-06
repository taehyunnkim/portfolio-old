const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const radius = 0.5;
const seg = 50;

const geometry = new THREE.SphereGeometry(radius, seg, seg);
const material = new THREE.MeshPhongMaterial({
	map: new THREE.TextureLoader().load('resources/earth3.jpg'),
	specularMap: new THREE.TextureLoader().load('resources/specular.jpg'),
	bumpMap: new THREE.TextureLoader().load('resources/bump.jpg'),
	bumpScale: 0.3
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// CLOUDS
const cloudGeometry = new THREE.SphereGeometry(radius + 0.03, seg-25, seg-25);
const cloudMaterial = new THREE.MeshPhongMaterial({
	map: new THREE.TextureLoader().load('resources/clouds.jpg'),
	side: THREE.DoubleSide,
	opacity: 0.8,
	transparent: true,
	depthWrite: false,
})
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
sphere.add(cloudMesh)

// Glow
// const glowGeometry = new THREE.SphereGeometry(radius + 0.01, 32, 32)
// const glowMaterial = new THREE.MeshPhongMaterial({
// 	color: 0x1348b8,
// 	side: THREE.DoubleSide,
// 	opacity: 0.3,
// 	transparent: true,
// 	depthWrite: false,
// })
// const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
// sphere.add(glowMesh)

// Lights
const lightColor = 0xffffff;
const intensity = 1.2;
const light = new THREE.DirectionalLight(lightColor, intensity);
light.position.set(10, 10, 15);
light.target = sphere;
scene.add(light);

// Stars
//const starGeometry = new THREE.SphereGeometry(5, 32, 32)
//const starMaterial = new THREE.MeshBasicMaterial({
//    map: new THREE.TextureLoader().load('resources/stars.jpg'),
//    side: THREE.BackSide
//});
//
//const stars = new THREE.Mesh(starGeometry, starMaterial)
//scene.add(stars);

camera.position.z = 4;
sphere.rotation.x += -0.5;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', onWindowResize, false);


function onWindowResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	sphere.rotation.y += 0.001;
}

animate();  
