var fameFont,
    titleFont,
    contentFont,
    fps = 40,
    minWidth = 700,
    minHeight = 1024,
    wScale = true,
    data,
    outside_js = [],
    mouseRelease = false,
    cursor_image = "default";

function preload(){
  frameFont = loadFont("fonts/NunitoSans-Light.ttf");
  titleFont = loadFont("fonts/NunitoSans-Bold.ttf");
  contentFont = loadFont("fonts/NunitoSans-Regular.ttf");
  data = loadJSON("data.json");
  window.history.replaceState("", "", "/");
}

function setup() {
  if (getURL() != "https://liz.cray.lgbt/"){
    window.location.replace("https://liz.cray.lgbt/");
  }
  minHeight = data.win["height"];
  minWidth = data.win["width"];
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
  frameRate(fps)
}

function draw() {
  background(0);
  noStroke();
  fill("#ffffff");
  textFont(frameFont);
  textSize(32);
  /*text(round(frameRate()), 10, 40);
  text(mouseX + "X" + mouseY, 10, 80);
  text(windowWidth + "X" + windowHeight, 10, 120);
  */
  if (wScale){
    rLine(width/4, 0, width/4, mouseY);
    noStroke();
    textSize(50);
    colorMode(RGB, 255);
    fill(255, 255, 255);
    text("Elizabeth A. Cray", (width/4)+32, 60);
    drawData(width/4);
  }else{
    rLine(50, 0, 50, mouseY);
    noStroke();
    textSize(50);
    colorMode(RGB, 255);
    fill(255, 255, 255);
    text("Elizabeth A. Cray", 82, 60);
    drawData(82-32);
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

function drawData(offset){
  var heightCounter = 120,
      counter = 0,
      rad = 5,
      inner_func;
  cursor_image = "default";
  textSize(30);
  for (i = 0; i < data.element.length; i++) {
    noStroke();
    fill(180);
    if (outside_js[i] == null){
      outside_js[i] = loadStrings(data.element[i]["content"]);
    }
    rect(offset+38,
      heightCounter,
      int(data.element[i]["width"]),
      int(data.element[i]["height"]),
      rad, rad, rad, rad);
    fill(0);
    textFont(titleFont);
    text(data.element[i]["name"], offset+50, heightCounter+35);
    inner_func = new Function(
      "var xoff = " + str(int(offset+50)) +
      ";\nvar yoff = " + str(int(heightCounter+40)) +
      ";\n" + outside_js[i].join(""));
    textFont(contentFont);
    inner_func();
    document.body.style.cursor = cursor_image;
    stroke(230, 255, 255);
    strokeWeight(3);
    line(offset-16, heightCounter+25, offset+16, heightCounter+25);
    heightCounter += 50 + int(data.element[i]["height"]);
  }
  mouseRelease = false;
}

function rLine(x1, y1, x2, y2){
  // 8px wide line, with hue cycling every x pixels
  var resolution = 16,
      length = sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))),
      numOfElements,
      sectorX1,
      sectorY1,
      sectorX2,
      sectorY2;
  if (length < 80){
    length = 80;
    y2 = 80;
  }
  numOfElements = length / resolution;
  ellipseMode(CORNERS);
  colorMode(HSB, numOfElements);
  for (i = 0; i < numOfElements; i++){
    // for every Hue change... (should only move <resolution> pixels down line)
    sectorX1 = (((x2-x1)/numOfElements)*i)+x1;
    sectorY1 = (((y2-y1)/numOfElements)*i)+y1;
    sectorX2 = (((x2-x1)/numOfElements)*(i+1))+x1;
    sectorY2 = (((y2-y1)/numOfElements)*(i+1))+y1;
    fill(i, 200, 200);
    ellipse(sectorX1-8, sectorY1, sectorX2+8, sectorY2);
  }
  colorMode(RGB, 255);
  color(255, 255, 255);
}

function mouseReleased(){
  mouseRelease = true;
  console.log("Mouse released");
}
