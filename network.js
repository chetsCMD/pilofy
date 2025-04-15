// network.js
const canvas = document.getElementById('network-bg');
const ctx = canvas.getContext('2d');
let width, height;
let points = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = [];

  const density = (width * height) / 7000;

  for (let i = 0; i < density; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 1.5 + Math.random() * 1.5
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  // Линии между близкими точками
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        ctx.strokeStyle = 'rgba(102, 217, 239,' + (1 - dist / 100) + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  // Рисуем точки
  for (let point of points) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius + Math.sin(Date.now() / 300 + point.x) * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#66D9EF';
    ctx.fill();
  }

  update();
  requestAnimationFrame(draw);
}

function update() {
  for (let point of points) {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x <= 0 || point.x >= width) point.vx *= -1;
    if (point.y <= 0 || point.y >= height) point.vy *= -1;
  }
}

window.addEventListener('resize', resize);
resize();
draw();
