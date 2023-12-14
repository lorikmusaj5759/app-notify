/* filename: sophisticated_code.js */

// This code generates a fractal tree using recursion in JavaScript

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colors = ["#d12c55", "#134e7c", "#6bbc6c", "#e0952d"];
const maxDepth = 8;
const angle = Math.PI / 4;
const lengthFactor = 0.7;
const widthFactor = 0.8;
const trunkHeight = 150;

function drawLine(x1, y1, x2, y2, color, lineWidth) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawTree(x1, y1, angle, depth, length, width) {
  if (depth === maxDepth) {
    drawLine(
      x1,
      y1,
      x1 + length * Math.cos(angle),
      y1 - length * Math.sin(angle),
      colors[depth % colors.length],
      width
    );
  } else {
    drawLine(
      x1,
      y1,
      x1 + length * Math.cos(angle),
      y1 - length * Math.sin(angle),
      colors[depth % colors.length],
      width
    );

    drawTree(
      x1 + length * Math.cos(angle),
      y1 - length * Math.sin(angle),
      angle - Math.PI / 4,
      depth + 1,
      length * lengthFactor,
      width * widthFactor
    );

    drawTree(
      x1 + length * Math.cos(angle),
      y1 - length * Math.sin(angle),
      angle + Math.PI / 4,
      depth + 1,
      length * lengthFactor,
      width * widthFactor
    );

    drawLine(
      x1,
      y1,
      x1 - length * Math.cos(angle),
      y1 - length * Math.sin(angle),
      colors[depth % colors.length],
      width
    );
  }
}

function drawFractalTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const startX = canvas.width / 2;
  const startY = canvas.height - trunkHeight;
  drawTree(startX, startY, -Math.PI / 2, 0, trunkHeight, 15);
}

drawFractalTree();
