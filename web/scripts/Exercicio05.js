const canvas = document.getElementById('canvasDraw');
const ctx = canvas.getContext('2d');

let ferramenta = 'linha';
let desenhando = false;
let inicioX = 0;
let inicioY = 0;
let snapshot;

canvas.addEventListener('mousedown', (e) => {
  desenhando = true;
  inicioX = e.offsetX;
  inicioY = e.offsetY;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousemove', (e) => {
  if (!desenhando) return;
  ctx.putImageData(snapshot, 0, 0);
  ctx.beginPath();

  if (ferramenta === 'linha') {
    ctx.moveTo(inicioX, inicioY);
    ctx.lineTo(e.offsetX, e.offsetY);
  } else if (ferramenta === 'retangulo') {
    ctx.strokeRect(inicioX, inicioY, e.offsetX - inicioX, e.offsetY - inicioY);
    return;
  } else if (ferramenta === 'circulo') {
    const raio = Math.hypot(e.offsetX - inicioX, e.offsetY - inicioY);
    ctx.arc(inicioX, inicioY, raio, 0, Math.PI * 2);
  }

  ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
  desenhando = false;
});

canvas.addEventListener('mouseleave', () => {
  desenhando = false;
});

function selecionarFerramenta(novaFerramenta) {
  ferramenta = novaFerramenta;
}

function limparCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}