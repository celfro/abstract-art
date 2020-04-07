var a= 3.4, b=-1.1, c=1.8, d=-2.5;
var x=1, y=1
var aSlider, bSlider, cSlider, dSlider

function setup() {

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
