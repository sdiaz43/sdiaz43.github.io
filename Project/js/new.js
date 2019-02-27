var x= 100;
var y= 100;
var segLength= 0;
var angle= 0.0;
var backcolor = 0;




function setup(){
	createCanvas(windowWidth, windowHeight);
	background (255);
	stroke(255, 100);
}

function draw(){
	background(backcolor);
	

	dx= mouseX - x;
	dy= mouseY - y;
	angle= atan2(dy, dx);
	x= mouseX - (cos(angle)*segLength);
	y= mouseY - (sin(angle)* segLength);
	circle(x, y, 30, 30);


	left = color(200, 150, 255, 0.2 * 255);
	right = color(140, 230, 0, 0.2 *255);
	c1 = lerpColor( left, right, 0.33); //color on left
	c2 = lerpColor (left, right, 0.66); //color on right

for (let i= 0; i< 15; i++){
	fill(left);
	quad(
		random(-40, 220), random(height),
		random(-40, 220), random(height),
		random(-40, 220), random(height),
		random(-40, 220), random(height)
	);
	  fill(c1);
    quad(
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height)
    );
    fill(c2);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height)
    );
    fill(right);
    quad(
      random(500, 800), random(height),
      random(500, 800), random(height),
      random(500, 800), random(height),
      random(500, 800), random(height)
    );
 
  }
  frameRate(10);


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

function keyTyped(){
	if(key === 'x'){
		backcolor = fill(200, 150, 255 * 255)
		backcolor =  Math.floor((Math.random() * 120) + 1);
	}
}







