var fameFont,
    titleFont,
    contentFont,
    minWidth = 300,
    minHeight = 300,
    wScale = true;

    function preload(){
      frameFont = loadFont("/fonts/NunitoSans-Light.ttf");
      titleFont = loadFont("/fonts/NunitoSans-Bold.ttf");
      contentFont = loadFont("/fonts/NunitoSans-Regular.ttf");
    }

function setup() {
  console.log("Win W: " + windowWidth + "  Win H: " + windowHeight);
  if (windowWidth >= minWidth && windowHeight >= minHeight){
    createCanvas(windowWidth-5, windowHeight);
  }else if (windowWidth >= minWidth && windowHeight < minHeight) {
    createCanvas(windowWidth-5, minHeight);
  }else if (windowWidth < minWidth && windowHeight >= minHeight) {
    createCanvas(minWidth, windowHeight);
    wScale = false;
  }else {
    createCanvas(minWidth, minHeight);
    wScale = false;
  }
}

function draw() {
  background(0);
  noStroke();
  fill("#ffffff");
  textFont(frameFont);
  textSize(32);
  text(round(frameRate()), 10, 40);
  text(mouseX + "X" + mouseY, 10, 80);
  text(windowWidth + "X" + windowHeight, 10, 120);

  if (wScale){
    noStroke();
    textSize(50);
    colorMode(RGB, 255);
    fill(255, 255, 255);
    text("Edward J. Green", (width/4)+32, 60);
  }else{
    noStroke();
    textSize(50);
    colorMode(RGB, 255);
    fill(255, 255, 255);
    text("Edward J. Green", 82, 60);
  }
}

function windowResized() {
  if (windowWidth >= minWidth && windowHeight >= minHeight){
    resizeCanvas(windowWidth-25, windowHeight-1);
  }else if (windowWidth >= minWidth && windowHeight < minHeight) {
    resizeCanvas(windowWidth-25, minHeight);
  }else if (windowWidth < minWidth && windowHeight >= minHeight) {
    resizeCanvas(minWidth, windowHeight-1);
    wScale = false;
  }else {
    resizeCanvas(minWidth, minHeight);
    wScale = false;
  }
  console.log("RESIZED\nWin W: " + windowWidth + "  Win H: " + windowHeight);
}
