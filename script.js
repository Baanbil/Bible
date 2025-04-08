let score = 0;
const value = document.getElementById("score-value")
const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

class Bubble {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = height + Math.random() * 100;
    this.radius = Math.random() * 6 + 2;
    this.speed = Math.random() * 1 + 0.5;
    this.opacity = Math.random() * 0.4 + 0.3;
  }

  update() {
    this.y -= this.speed;
    this.opacity -= 0.002;
    if (this.opacity <= 0 || this.y < -this.radius) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`;
    ctx.fill();
  }
}

const bubbles = [];
const bubbleCount = 100;

for (let i = 0; i < bubbleCount; i++) {
  bubbles.push(new Bubble());
}

function animateBubbles() {
  ctx.clearRect(0, 0, width, height);
  bubbles.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
  requestAnimationFrame(animateBubbles);
}

animateBubbles();

// Quiz logic
const container1 = document.getElementById("con1");
const container2 = document.getElementById("con2");
const container3 = document.getElementById("con3");
const textcontent1 = document.getElementById("textcontent1");
const textcontent2 = document.getElementById("textcontent2");
const textcontent3 = document.getElementById("textcontent3");
const nxtBtn = document.getElementById("next");
const divOne = document.getElementById("qtwo");
const divTwo = document.getElementById("qone");

const con1 = document.getElementById("container1");
const con2 = document.getElementById("container2");
const con3 = document.getElementById("container3");
const txtcon1 = document.getElementById("txtcon1");
const txtcon2 = document.getElementById("txtcon2");
const txtcon3 = document.getElementById("txtcon3");
const final = document.getElementById("final");
const next2 = document.getElementById("next2");

container1.onclick = function () {
  textcontent1.style.display = "block";
  container1.style.border = "2px solid green";
  container2.style.border = "2px solid green";
  container3.style.border = "2px solid green";
  nxtBtn.style.display = "block";
  score++;
  value.textContent = score;
  value.style.webkitTextStroke = "1px green"
};

container2.onclick = function () {
  textcontent2.style.display = "block";
  container1.style.border = "2px solid red";
  container2.style.border = "2px solid red";
  container3.style.border = "2px solid red";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

container3.onclick = function () {
  textcontent3.style.display = "block";
  container1.style.border = "2px solid red";
  container2.style.border = "2px solid red";
  container3.style.border = "2px solid red";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

nxtBtn.onclick = function () {
  divOne.style.display = "block";
  divTwo.style.display = "none";
  value.style.webkitTextStroke = "1px white"
};

con1.onclick = function () {
  con1.style.border = "2px solid red";
  con2.style.border = "2px solid red";
  con3.style.border = "2px solid red";
  txtcon1.style.display = "block";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

con2.onclick = function () {
  con1.style.border = "2px solid green";
  con2.style.border = "2px solid green";
  con3.style.border = "2px solid green";
  txtcon2.style.display = "block";
  next2.style.display = "block";
    score++;
  value.textContent = score;
  value.style.webkitTextStroke = "1px green";
};

con3.onclick = function () {
  con1.style.border = "2px solid red";
  con2.style.border = "2px solid red";
  con3.style.border = "2px solid red";
  txtcon3.style.display = "block";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

next2.onclick = function () {
  divOne.style.display = "none";
  divthree.style.display = "block";
  value.style.webkitTextStroke = "1px white"
};

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const next3 = document.getElementById("next3");
const divthree = document.getElementById("qthree");

content1.onclick = function () {
  txt1.style.display = "block";
  content1.style.border = "2px solid green";
  content2.style.border = "2px solid green";
  content3.style.border = "2px solid green";
  next3.style.display = "block";
    score++;
  value.textContent = score;
  value.style.webkitTextStroke = "1px green"
};

content2.onclick = function () {
  txt2.style.display = "block";
  content1.style.border = "2px solid red";
  content2.style.border = "2px solid red";
  content3.style.border = "2px solid red";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

content3.onclick = function () {
  txt3.style.display = "block";
  content1.style.border = "2px solid red";
  content2.style.border = "2px solid red";
  content3.style.border = "2px solid red";
    score--;
  value.textContent = score;
  value.style.webkitTextStroke = "1px red"
};

next3.onclick = function () {
  final.style.display = "flex";
  divthree.style.display = "none";
  value.style.webkitTextStroke = "1px white" 
  confetti({
  particleCount: 100,
  startVelocity: 30,
  spread: 360,
  origin: { x: 0.5, y: 0.5 }
});
const result = document.getElementById("result")
  if(score === 3){
  result.textContent = "✨ Incredible! You've earned all 3 points! 🌟 Keep it up! 🎉";
} else if(score === 2){
  result.textContent = "🌟 Amazing! You’ve nailed 2 points! Keep the momentum going! 🚀"
} else if(score === 1){
  result.textContent = "👏 Well done! You've earned 1 point! Great start, keep pushing! 💪"
} else if(score === 0) {
  result.textContent = "💪 Don't worry, it's all part of the journey! Keep going, you'll get there! 🌱 Every step counts!"
}
};
