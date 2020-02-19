var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // kąt [-180,180]
  var y = event.gamma; // kąt [-90,90]

  // zmniejszenie kąta do [-90,90]
  if (x >  90) { x = 90};
  if (x < -90) { x = -90};

  // latwiejsze obliczenia zmieniamy zakres x i y do [0,180]
  x += 90;
  y += 90;
    
    var xd = ball.style.top;
  // 10 to polowa kuli
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
    
    Winner();
}
function Winner() {
  var a = ball.style.top;
  var b = ball.style.left;
  if (a <= "28px" && a >= "20px" && b <= "28px" && b >= "20px") {
    Win= "Good job";
      document.getElementById('stopTimer').innerHTML = new Date();
  } else {
    Win = "Keep trying";
  }
  document.getElementById("Win").innerHTML = Win;
}
window.addEventListener('deviceorientation', handleOrientation);