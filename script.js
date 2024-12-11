window.onload = function() {
    const img = document.querySelector('img');
    img.src = `${img.src.split('?')[0]}?cacheBuster=${Date.now()}`;
};

  
let crsr = document.querySelector("#cursor"); // Custom cursor

// Current mouse position
let mouseX = 0;
let mouseY = 0;

// Cursor position for smooth transition
let cursorX = 0;
let cursorY = 0;

// Update mouse position on mouse move
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Smoothly animate cursor
function animateCursor() {
    // Gradually update cursor position
    cursorX += (mouseX - cursorX) * 0.1; // Adjust 0.1 for more or less delay
    cursorY += (mouseY - cursorY) * 0.1;

    crsr.style.left = cursorX + "px";
    crsr.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor); // Recursive animation
}

// Start the animation
animateCursor();
