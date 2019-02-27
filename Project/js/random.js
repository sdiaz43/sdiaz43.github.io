var x= 100;
var y= 100;
var segLength = 0;
var angle = 0.0;
var backcolor = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background (255);
	stroke(255, 100);
}

function draw(){
	background(backcolor);
	dx = mouseX - x;
	dy = mouseY - y;
	angle= atan2(dy, dx);
	x= mouseX - (cos(angle)*segLength);
	y= mouseY - (sin(angle)* segLength);
	circle(x, y, 30, 30);
	
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	background(255);

}



function mousePressed() {
  if (backcolor = 255 ) {
    backcolor = Math.floor((Math.random() * 255) + 1);
  }



}





