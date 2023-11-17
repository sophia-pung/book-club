const frameCount = 75; // Total number of frames
const frameRate = 650; // milliseconds per frame (4 frames per second)
let currentFrame = 0;
let frames = [];

// Function to preload images
function preloadImages() {
    for (let i = 0; i <= frameCount; i++) {
        let img = new Image();
        img.src = `../assets/pngs/Screenshot_2023-10-22_at_10.59.35_PM-${i} 2.png`;
        frames.push(img);
    }
}

function updateFrame() {
    const container = document.getElementById('animation-container');
    console.log(currentFrame)
    if (!container) {
        console.error('Animation container not found');
        return;
    }

    const frame = frames[currentFrame];
    if (!frame || !(frame instanceof HTMLImageElement)) {
        console.error('Invalid frame:', frame);
        return;
    }

    container.innerHTML = ''; // Clear the previous image
    container.appendChild(frame); // Add the new image

    currentFrame = (currentFrame + 1) % frameCount; // Increment and loop
}


// Start the animation
function startAnimation() {
    preloadImages();
    setInterval(updateFrame, frameRate);
}

window.onload = startAnimation;
