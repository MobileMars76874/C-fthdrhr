scoreleftWrist = 0;
left_wrist_x = "";left_wrist_y = "";
right_wrist_x = "";right_wrist_y = "";
music = "";


function preload(){
music = loadSound("Billy Goat Stomp - Joel Cummins.mp3");
}

function setup(){
canvas = createCanvas(400, 400);
canvas.center();
Video = createCapture(VIDEO);
Video.hide();

poseNet = ml5.poseNet(Video, model_loaded);
poseNet.on("pose", gopose);
}

function draw(){
image(Video, 0, 0, 400, 400);

fill(0, 255, 255);
stroke(30, 255, 255);
if(scoreleftWrist > 0.2){
circle(left_wrist_x, left_wrist_y, 20);
numberleftWrist_y = Number(left_wrist_y);
removeDecimals = floor(numberleftWrist_y);
volume = removeDecimals/500;
document.getElementById("V").innerHTML = "Volume : "+volume;
setVolume(volume);
}
}


function gopose(results){
if(results.length > 0){
console.log(results);
scoreleftWrist = results[0].pose.keypoints[9].score;
console.log("Score : "+scoreleftWrist)

left_wrist_x = results[0].pose.leftWrist.x;
left_wrist_y = results[0].pose.leftWrist.y;

right_wrist_x = results[0].pose.rightWrist.x;
right_wrist_y = results[0].pose.rightWrist.y;
}
}


function play_s(){
music.play();
}

function model_loaded(){
console.log("Model Loaded!");
}
    