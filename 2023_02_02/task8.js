const a = {
  buttonEl: document.getElementById("start-btn-a"),
  counterEl: document.getElementById("MyPI"),
  pi: document.getElementById('mathPI'),
  circleDots: document.getElementById('dotsInCircle'),
  totalDots: document.getElementById('totalDots'),
  precision: 0.0001,
};

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#FCFC39";
    ctx.fillRect(10, 10, 450, 450);

    ctx.beginPath();
    ctx.fillStyle = "#4BFD68";
    ctx.arc(235, 235, 225, 0, 2 * Math.PI);
    ctx.fill();
  }
}

draw();

function drawDot(x, y) {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fill();
  };
}

function myPiCalculation(args) {
  let { pi, circleDots, totalDots, counterEl, precision } = args;
  running = true;
  counterEl.innerHTML = "";
  let myPi = 0;
  let i = 1
  let counter = 0;
  pi.textContent = `PI = ${Math.PI}`;
  do {
    const x = Math.random();
    const y = Math.random();
    drawDot(11 + x * 448, 11 + y * 448);
    const circleYesNo = x * x + y * y;
    if (circleYesNo <= 1) counter++;
    i++;
    myPi = (counter * 4) / i;
    counterEl.textContent = myPi;
  } while (Math.abs(myPi - Math.PI) > precision);

  circleDots.textContent = `Number of dots in circle = ${counter}`;
  totalDots.textContent = `Total dots = ${i}`;
  running = false;
}

let running = false;

a.buttonEl.addEventListener("click", () => {
  if (!running) {
    draw();
    myPiCalculation(a);
  }
});


