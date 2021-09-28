img = "";
Status = "";
function preload()
{
 img = loadImage('dog_cat.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
  console.log("Model Loaded!");
  Status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
  if (error) 
  {
    console.log(error);
  }
  console.log(results);
}

function draw()
{
  image(img, 0, 0, 640, 420);
  fill("#5203fc");
  text("Dog", 45, 75);
  noFill();
  stroke("#5203fc");
  rect(30, 60, 450, 350);  

  fill("#03fcca");
  text("Cat", 320, 120);
  noFill();
  stroke("#03fcca");
  rect(300, 90, 270, 320);
}