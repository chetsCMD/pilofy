const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('background').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
const maxDots = 50;  // Количество точек (нейронов)
const maxLineLength = 150;  // Максимальная длина соединений между нейронами

// Функция для генерации точек
function createDots() {
    for (let i = 0; i < maxDots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({ x, y });
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${x - 4}px`;
        dot.style.top = `${y - 4}px`;
        document.body.appendChild(dot);
    }
}

// Функция для рисования линий между точками
function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Очищаем холст перед рисованием
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxLineLength) {  // Рисуем линию только если расстояние между точками меньше максимальной длины
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.strokeStyle = 'rgba(102, 217, 239, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

// Обновление анимации
function animate() {
    drawLines();
    requestAnimationFrame(animate);  // Бесконечный цикл для анимации
}

createDots();
animate();

// Обновление размеров канваса при изменении окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
