// https://unpkg.co/gsap@3/dist/gsap.min.js

// https://unpkg.com/gsap@3/dist/EasePack.min.js

console.clear();

gsap.registerPlugin(ExpoScaleEase);

class CanvasPath {
  
  constructor(svgPath, scale) {
    
    const bbox = svgPath.getBBox();
    const style = getComputedStyle(svgPath);
    
    this.path = new Path2D(svgPath.getAttribute("d"));
    this.scale = scale;
    this.fillStyle = style.fill;
    this.fillRule = "evenodd";
    this.width = bbox.width;
    this.height = bbox.height;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
  }
  
  draw(context, x, y) {
    
    context.save();    
    context.translate(x, y);
    context.scale(-this.scale, this.scale);
    context.translate(-this.halfWidth, -this.halfHeight);    
    context.fillStyle = this.fillStyle;
    context.fill(this.path, this.fillRule);    
    context.restore();
  }
}

// set to 1 for better performance
const resolution = Math.min(window.devicePixelRatio || 1, 2); 
const svgPath = document.querySelector("#svg-path");
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const startScale = 0.25;
const endScale = 200;
const duration = 15;

const canvasPath = new CanvasPath(svgPath, startScale);

gsap.set(svgPath, {
  transformOrigin: "center",
  scale: startScale,
  xPercent: -50,
  yPercent: -50  
});

const ease = ExpoScaleEase.config(startScale, endScale);

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })
  .to(svgPath, { scale: endScale, ease, duration }, 0)
  .to(canvasPath, { scale: endScale, ease, duration }, 0)

let resized = true;
let vw, vh, cx, cy;

window.addEventListener("resize", () => resized = true);
gsap.ticker.add(draw);

function draw() {
  
  if (resized) {
    resize();
    resized = false;
  }
  
  context.clearRect(0, 0, vw, vh);  
  canvasPath.draw(context, cx, cy);
}

function resize() {
  
  vw = window.innerWidth;
  vh = window.innerHeight;
  cx = vw / 4;
  cy = vh / 2;
  
  canvas.width = canvas.clientWidth * resolution;
  canvas.height = canvas.clientHeight * resolution;
  context.scale(resolution, resolution);
    
  gsap.set(svgPath, {
    x: cx,
    y: cy
  });
}

