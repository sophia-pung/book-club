console.log("galaxy.js is loaded");
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

// 1. Scene Setup
var scene = new THREE.Scene();

// 2. Camera Setup
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Renderer Setup
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Handle window resize
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// 4. Add Galaxy Elements
var particleCount = 1000; // Adjust based on your needs
var particles = new THREE.BufferGeometry();
var positions = [];

for (var i = 0; i < particleCount; i++) {
    // Create a random position for each particle
    positions.push(Math.random() * 600 - 300); // x
    positions.push(Math.random() * 600 - 300); // y
    positions.push(Math.random() * 600 - 300); // z
}

// Add the positions to the particles geometry
particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

var particleMaterial = new THREE.PointsMaterial({
    color: 0x5555ff, // Blue color
    size: 1.5,
    transparent: true
});

var particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    particleSystem.rotation.x += 0.00005;
    particleSystem.rotation.y += 0.0001;

    renderer.render(scene, camera);
}

animate();