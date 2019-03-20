var canvas;

var question1;

var feelingSelector;
var dropdown1;
var dropdown1;
// var button;
// var sound;
var image1;
var image2;
var colorDog;
var colorTulip;

var start;

var Scene1;
var Scene2;
var Scene3;
var Scene4;

var Begin;
// var beginButton;
var ScenarioGreat;	//Scene 2
var ScenarioContinued; //Scene 3 
var ScenarioFree; //Scene 4
var ScenarioEnding; //Scene 5
// var great;
// var sick;

var imgDogBool = false;
var colorSliderAnim = false;
var imgTulipBool = false;
var colorSliderAnima = false;

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	// button = createButton("play");
	// button.mousePressed(startPlaying);
	// sound = loadSound(".mp3", playAudio);
	// sound.setVolume.(1.0);
	background (120);
	start();
}

// function startPlaying(){
// 	if(!sound.isPlaying()){
// 		sound.play();
// 		button.html("pause");
// 	}else{
// 		sound.pause();
// 		button.html("play");
// 	}
// }



function start(){
	background(223, 247, 212);


	question1 = createP("How would you like to start?");
	// dropdown1 = createInput();
	dropdown1 = createSelect();
	dropdown1.option('Choose');
	dropdown1.option('in bed');
	dropdown1.option('outside');

	dropdown1.changed(Begin);
}

function Begin(){
	background(187, 209, 177);
	question1.hide();
	dropdown1.hide();
		Scene1 = createP("You are " + dropdown1.value() + ", beautiful birds are chirping and you are feeling " );
		// question2= createP("");
	feelingSelector = createRadio();
	feelingSelector.option('great.');
	feelingSelector.option('sick.');
	feelingSelector.changed(ScenarioGreat);

	// beginButton = createButton("Enter");
	// beginButton.addClass("beginButton");


	// beginButton.mousePressed(ScenarioGreat);
	
}

function ScenarioGreat(){
	// background(160, 178, 151);
	question1.hide();
	feelingSelector.hide();
	// beginButton.hide();
	Scene1.hide();
	if(feelingSelector.value() == 'great.'){
		background(230, 255, 219);
		Scene2 = createP("Today should be a good day, you already ate a hearty breakfast and today is the big dance at school.")
		image1 = createImg("media/puppy.jpg");
		image1.position(10, 100);
		image2 = createImg("media/gardenTulips.jpg")
		image2.position(10,200);
		image1.mousePressed(ScenarioImageChoiceDog);
		image2.mousePressed(ScenarioImageChoiceTulip);
	} 
	if(feelingSelector.value() == 'sick.'){
		background(173, 193,164);
		Scene2 = createP("You are not feeling it today, you don't want to go out with your friends feeling like this, and you don't even know what to wear for the school dance tonight.\nYou feel like today will be a disaster, then you see a ")
		image1 = createImg("media/puppy.jpg");
		image1.position(10, 100);
		image1.width= 20;
		image1.height = 20; 
		image2 = createImg("media/gardenTulips.jpg");
		image2.position(10,200);
		image2.width = 20;
		image2.height = 20;
		image1.mousePressed(ScenarioImageChoiceDog);
		image2.mousePressed(ScenarioImageChoiceTulip);
	}


}

function ScenarioImageChoiceDog() {

	imgDogBool = true;

	ScenarioContinued();

}

function ScenarioImageChoiceTulip(){

	imgTulipBool = true;

	ScenarioContinued();

}
function ScenarioContinued(){
	question1.hide();
	feelingSelector.hide();
	Scene1.hide();
	Scene2.hide();
	image1.hide();
	image2.hide();
		if(imgDogBool == true && feelingSelector.value()=='great.'){
		
		Scene3 = createP("The beautiful puppy you have seen smiled at you, seeing how luscious his hair waved with the hair helped you think of what color your outfit should be.");
		colorMode(HSB);

		dropdown2 = createSelect();
		dropdown2.option('Choose');
		dropdown2.option('Go to the dance');
		dropdown2.option('Go check out the puppy');

		dropdown2.changed(scene3Choice);
		colorDog = createSlider(0, 45, 0, 10);
		colorDog.position(10,100);
		colorDog.style('width','80px');



		colorSliderAnim = true;
		}

		if(imgDogBool == true && feelingSelector.value()=='sick.'){
		
		Scene3 = createP("The puppy you have seen seemed to have smiled at you, you feel a bit better, seeing his beautiful color you started to help you achieve ideas of what color to pick your outfit out of.");
		colorMode(HSB);

		dropdown2 = createSelect();
		dropdown2.option('Choose');
		dropdown2.option('Go to the dance');
		dropdown2.option('Go check out the puppy');

		dropdown2.changed(scene3Choice);
		colorDog = createSlider(0, 45, 0, 10);
		colorDog.position(10,100);
		colorDog.style('width','80px');



		colorSliderAnim = true;
		}		

		if(imgTulipBool == true && feelingSelector.value() =='great.'){
		
		Scene4 = createP("You see some nice tulips growing nicely outside in the neighborhood and you get ideas of what color to pick out your outfit. ");
		colorMode(HSB);

		dropdown3 = createSelect();
		dropdown3.option('Choose');
		dropdown3.option('Go to the dance');
		dropdown3.option('Go check out the flowers');

		dropdown3.changed(scene4Choice);
		colorTulip = createSlider(270, 325, 0, 10);
		colorTulip.postion(10,100);
		colorTulip.style('width','80px');

		colorSliderAnima = true;
		}

		if(imgTulipBool == true && feelingSelector.value() =='sick.'){
		
		Scene4 = createP("You see some nice tulips outside and you start to feel better, looking at them is giving you a great idea of what you want your outfit to be. ");
		colorMode(HSB);

		dropdown3 = createSelect();
		dropdown3.option('Choose');
		dropdown3.option('Go to the dance');
		dropdown3.option('Go check out the flowers');


		dropdown3.changed(scene4Choice);
		colorTulip = createSlider(270, 325, 0, 10);
		colorTulip.position(10,100);
		colorTulip.style('width','80px');

		colorSliderAnima = true;
		}
	}	


	function scene3Choice(){
		background(120);
		colorSliderAnim = false;
		colorDog.hide();
		dropdown2.hide();
		Scene3.hide();
		if (imgDogBool == true && dropdown2.value() == 'Go check out the puppy'){
			Scene6 = createP("You have changed into your outfit and you see the puppy again, you seem to approach it and you notice that it's eyes have turned green.")
			Scene7 = createP("He turned into an alien, you can't beieve your eyes, he then tells you that the dance will be invaded, you try to run to the school but it was already too late.")
			image3 = createImg("media/alien.jpg");

		}

		if (imgDogBool == true && dropdown2.value() == 'Go to the dance' ){
			Scene11 = createP("Your outfit matched the color of the dog which you notice on your way out, you see it smiling at you. You rush to the dance with no hesitation to check on the dog.")
			Scene12 = createP("You arrive at the party and notice everyone enjoying themselves. The lights starting turning super bright and people start screaming, your hearts start racing, your vision is blurring but you see people turning into animals, you can't move. This is the end.")
			image5 = createImg("media/abductedPig.png");
		}
		
	}

	function scene4Choice(){
		background(120);
		colorSliderAnima = false;
		colorTulip.hide();
		dropdown3.hide();
		Scene4.hide();

		if(imgTulipBool == true && dropdown3.value() == 'Go check out the flowers'){
			Scene5 = createP("You change into your outfit, your parents say that your outfit will definitely stand out from the others. When you go out to your house you take a look at the tulips, you don't notice the time go by.")
			Scene8 = createP("You notice a strange light beaming in the distance and you notice a strange saucer invading the school, you are out of words and glad you don't have to go to school anymore.")
			image4 = createImg("media/ufo.png");
		}

		if(imgTulip == true && dropdown3.value() == 'Go to the dance'){
			Scene9 = createP("You change into your outfit and you realized you were late to the dance. Your parents compliment you when you walk out which makes you feel amazing, you take a quick glimpse at the flowers but don't waste any time with them.")
			Scene10= createP("You arrive at the party and notice everyone enjoying themselves. The lights starting turning super bright and the music distorts, your hearts start racing, your vision is blurring but you see people turning into animals, you can't respond to anything. This is the end.")
			image5 = createImg("media/abductedPig.png");
		}

		
	}


	function dogImgAnim(){
		var val = colorDog.value();
		background(val,100, 65, 1);
	}

	function tulipImgAnim(){
		var	val = colorTulip.value();
		background(val, 100, 65, 1);
}

function draw(){
	if(colorSliderAnim == true){

		dogImgAnim();
	}
	if(colorSliderAnima == true){

		tulipImgAnim();	
	}
	}




	function windowResized(){
		canvas = createCanvas(windowWidth, windowHeight);
	}






