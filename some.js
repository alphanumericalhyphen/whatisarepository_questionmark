ghghvcuv7gvz
let t, dt, width;

 

function setup() {

   width = 500

   height = 500

createCanvas(width, height);

   

background(240);

   line(width/2, 0, width/2, height)
   
   line(0, height/2, width, height/2)

fill("red");

stroke("red");

strokeWeight(2);

t = 0.25

dt = 0.25;
}

function f2(x) {
 if (x == 0.25) {
     return 200
 }
 else {
     return f2(x-dt) + dt*(-50/x**2)
 }
}

function f1(x) {
 return 50*x
}

function F2(x) {
 return 50/x
}

function F1(x) {
 return 50*x
}

function draw() {
  t = t + dt
  line(f1(t-dt) + width/2, height/2 -f2(t-dt), f1(t) + width/2, height/2 - f2(t))
  line(F1(t-dt) + width/2, height/2 -F2(t-dt), F1(t) + width/2, height/2 - F2(t))
}
