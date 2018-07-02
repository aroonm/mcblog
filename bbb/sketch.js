var bg;
function setup() {
  // uncomment if for circle object of interest stepup
  // bg = loadImage("hm/img/donuts.png");
  var cnv = createCanvas(300, 222);
  cnv.parent("draw-canvas");

  // comment if for circle object of interest stepup
  background(238, 238, 238);
}

function draw() {
  // uncomment if for circle object of interest stepup
  // background(bg);
}

function mouseDragged() {
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}