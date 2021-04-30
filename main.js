left_wrist_x = "";left_wrist_y = "";
right_wrist_x = "";right_wrist_y = "";
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
poseNet.on("pose", gopose);
}

function draw(){

}


function gopose(results){
if(results.length < 0){
console.log(results);
left_wrist_x = results[0].pose.leftWrist.x;
left_wrist_y = results[0].pose.leftWrist.y;

right_wrist_x = results[0].pose.rightWrist.x;
right_wrist_y = results[0].pose.rightWrist.y;
}
}


function play_s(){
music.play();
}
    