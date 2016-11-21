var option = 1;
var quote = "We don't know what is going to happen, or how, or when, and that very uncertainty is the space of hope.";
quote.toUpperCase();
var bg2, bg3;

function setup() {
  createCanvas(710, 400);
  background(0);
  strokeWeight(20);
  frameRate(10);
  bg2 = loadImage("standby.jpg");
  bg3 = loadImage("pleasestandby.jpg");
}

function draw() {
  if (option == 1){
    for (var i = 0; i < width; i++) {
      var r = random(255);
      stroke(r);
      line(0, i, width, i);
    }

    fill(0);
    stroke(255);
    strokeWeight(3);
    textAlign(LEFT);
    textSize(50);
    textFont("Helvetica");
    text(quote, 30, 60, width-20, height-20);
  }

  else if (option == 2){
    console.log('option 2');
    currentFrame = frameCount;
    background(bg2);
    var num = int(random(0, 100));
    console.log(num);
    if (currentFrame % num == 0){
      background(255);
    }
  }

  else if (option == 3){
    background(bg3);
  }


}

function mousePressed(){
  option++;
  if (option > 3){
    option = 1;
  }
}
