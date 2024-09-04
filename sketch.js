function setup() {
  createCanvas(400, 400);
  background("red");
}

function draw()  {
  if (mouseIsPressed) { 
  stroke("rgb(245,0,0)");
  fill("rgb(39,22,139)");
  rect(mouseX,mouseY,20,20);
  }
}
