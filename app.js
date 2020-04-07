var a= 1.4, b=-1.1, c=1.8, d=-2.5;
var x=1, y=1
var aSlider, bSlider, cSlider, dSlider

function setup() {
  aSlider = createSlider(-3,3,a,0.01);
  bSlider = createSlider(-3,3,b,0.01);
  cSlider = createSlider(-3,3,c,0.01);
  dSlider = createSlider(-3,3,d,0.01);
  var myButton = createButton("Redraw");
  myButton.mousePressed(function(){
    a =aSlider.value();
    b =bSlider.value();
    c =cSlider.value();
    d =dSlider.value();
    background(255);
  })
  createCanvas(500,500);
  stroke(20, 20, 150, 100);
}

function draw (){
  for(var i=0; i<1000;i++){
    var oldx= x;
    var oldy= y;
    x = sin(a * oldy) - cos(b * oldx);
    y = sin(b * oldx) - cos(d * oldy);
    var scaledx = map(x, -2, 2, 0, width);
    var scaledy = map(y, -2, 2, 0, height);
    point(scaledx, scaledy)
  }
}
