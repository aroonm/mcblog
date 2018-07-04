var bg;
function setup() {

  var cnv = createCanvas(300, 222);
  cnv.parent("draw-canvas");

}

function draw() {

}

function mouseDragged() {
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}