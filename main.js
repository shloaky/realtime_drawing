NoseX = 0;
NoseY = 0;
Difference = 0;
LeftwristX = 0;
RightwristX = 0;
function setup(){
canvas = createCanvas(550,500);
canvas.position(550,150);
video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function draw(){
    background(255, 204, 100);
    fill('#301934');
    stroke('#301934');
    square(NoseX,NoseY,Difference);
}

function modelloaded(){
    console.log("PoseNet is initialized");
}

function gotposes(results){
    if(results.length > 0){
console.log("results");
NoseX = results[0].pose.nose.x;
NoseY = results[0].pose.nose.y;
console.log("NoseX = "+ NoseX +"NoseY = "+ NoseY);
RightwristX = results[0].pose.rightWrist.x;
LeftwristX = results[0].pose.leftWristX.x
console.log("RightwristX = "+ RightwristX + "Leftwrist = "+LeftwristX);
Difference = RightwristX - LeftwristX;
console.log("Difference = "+Difference);

    }
}