var btn_red;
var btn_green;

var r = 100;
var g = 120;
var b = 10;


var num1, num2, res=0, result ,n1,n2;

function setup() {
  createCanvas(800, 800);  
  textAlign(CENTER);
  textSize(20);

  btn_red= createButton("Red");
  btn_red.position(80,50);
  btn_red.mousePressed(red_bg);

  btn_green= createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  num1=createInput();
  num1.position(10,150);

  num2=createInput();
  num2.position(250,150);

 // result=createLabel();
 // result.position(250,150);
 

  btn_add= createButton("+");
  btn_add.position(50,250);
  btn_add.mousePressed(add);
  
  btn_sub= createButton("-");
  btn_sub.position(150,250);
  btn_sub.mousePressed(sub);
  
  btn_mul= createButton("*");
  btn_mul.position(250,250);
  btn_mul.mousePressed(mul);
  
  btn_div= createButton("/");
  btn_div.position(350,250);
  btn_div.mousePressed(div);
}

function draw() {
  background(r,g,b);
  text("Number1",90,140);
  text("Number2",350,140);
  text("Result:-  "+ res,590,140);

  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
}

function red_bg(){
  
 r = 255;
 g = 0;
 b = 0;
}

function green_bg(){
  
  r = 0;
  g = 255;
  b = 0;
 }

 function add(){
   res= n1+n2;
   console.log(n1+n2);
 }

 function sub(){
  res= n1-n2;
}

function mul(){
  res= n1*n2;
}

function div(){
  res= n1/n2;
}