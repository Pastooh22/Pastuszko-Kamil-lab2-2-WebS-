document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx
function appStart () {
  canvas = document.querySelector('#canvas')
  document
    .querySelector('#btnDarken')
    .addEventListener('click', () => darkenFilter())
  document
    .querySelector('#btnLighten')
    .addEventListener('click', () => lightenFilter())

  ctx = canvas.getContext('2d');
    resize();

    function el(id){return document.getElementById(id);} // element z id

    var canvas  = el("canvas");
    var context = canvas.getContext("2d");
    
    function readImage() { //upload zdjecia
        if ( this.files && this.files[0] ) {
            var FR= new FileReader();
            FR.onload = function(e) {
               var img = new Image();
               img.addEventListener("load", function() {
                 context.drawImage(img, 0, 0);
               });
               img.src = e.target.result;
            };       
            FR.readAsDataURL( this.files[0] );
        }
    }
    
    el("fileUpload").addEventListener("change", readImage, false);
}

function darkenFilter (amount = 30) {
  const canvasData = ctx.getImageData(0, 0, 1920, 1080)
  for (let i = 0; i < canvasData.data.length; i += 4) {
    // R
    canvasData.data[i] -= amount
    // G
    canvasData.data[i + 1] -= amount
    // B
    canvasData.data[i + 2] -= amount
  }
  ctx.putImageData(canvasData, 0, 0)
  console.log(canvasData.data)
}

function lightenFilter (amount = 30) {
  const canvasData = ctx.getImageData(0, 0, 1920, 1080)
  for (let i = 0; i < canvasData.data.length; i += 4) {
    // R
    canvasData.data[i-1] -= amount
    // G
    canvasData.data[i - 1] -= amount
    // B
    canvasData.data[i - 2] -= amount
  }
  ctx.putImageData(canvasData, 0, 0)
  console.log(canvasData.data)
}

function drawImage (img, x, y) {
  ctx.drawImage(img, x, y)
}

window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
var pos = { x: 0, y: 0 };

// nowa pozycja kursora z eventow
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
function draw(e) {
  if (e.buttons !== 1) return; // if wcisniety lpm

  var color = document.getElementById("color").value; //kolor

  ctx.beginPath(); // rozpoczecie 
  ctx.lineCap = "round";
  ctx.strokeStyle = color; // kolor rysowania
  ctx.lineWidth = 20
 
  ctx.moveTo(pos.x, pos.y); // z pozycji
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // na pozycje

  ctx.stroke(); // rysuje
}