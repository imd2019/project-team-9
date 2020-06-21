let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(60);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);
