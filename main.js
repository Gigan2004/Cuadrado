noseX = 0;
noseY = 0;

rightDollX = 0;
leftDollX = 0;

Diference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(450, 400);
    canvas = createCanvas(550, 500);
    canvas.position(500, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet inicialisado");
}

function gotPoses(results){
    console.log(results);
    if (results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("narizX =" + noseX + "" + "narizY =" + noseY )
        rightDollX = results[0].pose.rightWrist.x;
        leftDollX = results[0].pose.leftWrist.x;
        Diference = floor(leftDollX - rightDollX);
        console.log(Diference);
    } 
}
function draw(){
    background("#F2EACE");
    fill("#2D7DCC");
    stroke("#092947");
    square(noseX, noseY, Diference)
    document.getElementById("SquareSize").innerHTML = "El ancho y alto del cuadrado es: " + Diference;
    
}

