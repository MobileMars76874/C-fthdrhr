music = "";

function preload(){
music = loadSound("Billy Goat Stomp - Joel Cummins.mp3");
}

function setup(){
canvas = createCanvas(600, 600);
canvas.center();
Video = createCapture(VIDEO);
Video.hide();

poseNet = ml5.poseNet(Video, model_loaded);

}


function play_s(){
music.play();
music.setVolume(1);
music.rate(1);
}

function draw(){
}