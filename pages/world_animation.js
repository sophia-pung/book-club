// Load PNG frames
const frameUrls = [];
for (let i = 1; i <= 75; i++) {
  frameUrls.push(`path/to/frame${i}.png`);
}

const loader = new THREE.TextureLoader();
const frames = [];
const frameMaterials = [];

const loadingManager = new THREE.LoadingManager();
loadingManager.onLoad = () => {
  // All images are loaded, create the animation
  const animation = new Animation(frames, frameMaterials);
  animation.play();
};

frameUrls.forEach((url) => {
  loader.load(url, (texture) => {
    frames.push(texture);
    frameMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
  });
});

// Animation class
class Animation {
  constructor(frames, materials) {
    this.frames = frames;
    this.materials = materials;
    this.currentFrame = 0;
  }

  play() {
    const animate = () => {
      requestAnimationFrame(animate);
      // Update the displayed frame
      this.materials.forEach((material) => {
        material.map = this.frames[this.currentFrame];
        material.map.needsUpdate = true;
      });
      // Increment currentFrame (looping if needed)
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
    };

    animate();
  }
}
