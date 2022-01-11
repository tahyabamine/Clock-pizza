 const canvas =document.querySelector('canvas');
       const ctx = canvas.getContext('2d');
       const rayon = canvas.height / 2;
ctx.translate(rayon, rayon);
setInterval(clock, 1000);
       function clock(){  
function drawPizza (){
       ctx.beginPath()
         ctx.lineWidth=15;
  ctx.arc(0, 0, rayon-10, 0 , 2 * Math.PI);
   ctx.fillStyle = "#e6b86a";
   ctx.stroke();
  ctx.fill();

ctx.beginPath()
ctx.lineWidth=20;
  ctx.arc(0, 0, (rayon-60), 0 , 2 * Math.PI);
   
   ctx.fillStyle = "#f9c637";
  
   ctx.stroke();
  ctx.fill();
function jambon(x,y){
ctx.fillStyle = "#be1e2d";
ctx.beginPath();
ctx.arc(x, y, 35, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
};
jambon(100,-50);
jambon(-70,200);
jambon(-180,-70);
jambon(100,100);
jambon(20,-180);
jambon(-100,80);
function olive (a,b){  
ctx.beginPath();
ctx.arc(a, b, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#202020";
ctx.fill();

ctx.beginPath();
ctx.arc(a,b, 5, 0, 2 * Math.PI);
ctx.fillStyle = "#fdd05b";
ctx.stroke();
ctx.fill();
};
olive(100,-150);
olive(-100,-180);
olive(-20,80);
olive(180,20);
olive(-150,160);
olive(0,0);
function lettuce(c,d){
ctx.rect(c, d, 10, 30);
ctx.lineJoin="round";
ctx.lineWidth=8;
ctx.fillStyle = "#00a551"
ctx.stroke();
ctx.fill();
};
lettuce(-150,-180);
lettuce(-170,20);
lettuce(170,80);
lettuce(170,-100);
lettuce(10,180);
}


function drawHours() {

  for (let heures = 1; heures < 13; heures++) {
    ctx.save();
    const angle = (heures * Math.PI) / 6;
    ctx.rotate(angle);
    ctx.translate(0, -rayon * 0.94);
    ctx.rotate(-angle);
    ctx.restore();
  }
}

function drawMinutes() {
  ctx.save();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.lineCap = "butt";
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.moveTo(rayon * 0.95 - 1, 0);
    if (i % 5 !== 0) {
      ctx.lineTo(rayon * 0.95 - 1 - 10, 0);
    } else {
      ctx.lineTo(rayon * 0.95 - 1 - 20, 0);
    }
    ctx.stroke();
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
}

function drawTime() {
  const now = new Date();
  let heures = now.getHours();
  let minutes = now.getMinutes();
  let secondes = now.getSeconds();
  ctx.strokeStyle = "black";
  ctx.lineCap = "round";
  drawHoursHand(heures, minutes, secondes);
  drawMinutesHand(minutes, secondes);
  drawSecondesHand(secondes);
}

function drawHoursHand(heures, minutes) {
  ctx.save();
  ctx.rotate((heures % 12) * (Math.PI / 6) + (minutes * Math.PI) / 360);
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.moveTo(0, -0.35 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

function drawMinutesHand(minutes, secondes) {
  ctx.save();
  ctx.rotate((minutes * Math.PI) / 30 + (secondes * Math.PI) / 1800);
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(0, -0.6 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

function drawSecondesHand(secondes) {
  ctx.save();
  ctx.strokeStyle = "black";
  ctx.rotate((secondes * Math.PI) / 30);
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, -0.6 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

drawPizza()
 drawHours()
 drawMinutes()
 drawTime()
}   
       clock()