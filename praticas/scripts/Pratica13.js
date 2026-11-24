const canvas1 = document.getElementById('meuCanvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('meuCanvas2');
const ctx2 = canvas2.getContext('2d');

function circulo() {
  ctx1.beginPath();
  ctx1.arc(200, 150, 50, 0, 2 * Math.PI);
  ctx1.stroke();
}

function retangulo() {
  ctx1.strokeRect(100, 100, 200, 100);
}

function linha() {
  ctx1.beginPath();
  ctx1.moveTo(50, 50);
  ctx1.lineTo(350, 250);
  ctx1.stroke();
}

function limpar() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
}

const img = new Image();

img.src = '../assets/LogoFCT.png';

img.onload = function() {
    ctx2.drawImage(img, 0, 0, 800, 270);
}