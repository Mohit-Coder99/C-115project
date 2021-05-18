function preload(){
}

function setup(){
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(400,300);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

image(video, 0, 0, 400, 300);


function draw(){
     image(video, 0, 0, 400, 300);
}

function take_snapshot(){
     save('myMustache.png');
}
