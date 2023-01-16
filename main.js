differnce=0
rightWristX=0
leftWristX=0

function setup(){
  video=createCapture=(VIDEO);
  video.size(550,500);
  
  canvas = createCanvas(550,500);
  cancas.postion(560,150);
  posenet=ml5.posnet(viseo,modeload);
  posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(){
  if(results.length > 0)
{
console.log(results);
  leftWristX =results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.lesftWrist.x;
  difference = floor(leftWristX - rightWrist);
  
  console.log("leftWrisX = " + leftWristX + "rightWristX= " + rightWristX);
} 
}
function draw() {
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Mehek', 50, 400);
}