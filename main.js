img = "";


function preload() {
	world_start = loadSound("world_start.wav");
	mariodieSound = loadSound("mariodie.wav");
	kickSound = loadSound("kick.wav");
	jumpSound = loadSound("jump.wav");
	gameoverSound = loadSound("gameover.wav");
	coinSound = loadSound("coin.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose", gotPoses);

}

function draw() {
	game()
}
function modelLoaded() {
	console.log('Model Loaded!');
  }
  function gotPoses(results){

	
	  if(results.length > 0)
	  {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		
	  }
	}
  






