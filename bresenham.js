const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imgData.data;

line(0, 0, 50, 50)
ctx.putImageData(imgData, 0, 0);

function setPixel(x, y) {
  const n = (y * canvas.width + x) * 4;
  data[n] = 0;
  data[n + 1] = 0;
  data[n + 2] = 198;
  data[n + 3] = 148;
}

function line(x0, y0, x1, y1) {
  let dx, dy, sx, sy, D, D2
  dx = Math.abs(x1 - x0), // x1 and x0 delta
    sx = x0 < x1 ? 1 : -1;
  dy = Math.abs(y1 - y0), // y1 and y0 delta
    sy = y0 < y1 ? 1 : -1;

  if (dx > dy || dx === dy) {
    D = dx / 2
  } else if (dx < dy) {
    D = dy / 2
  }
  while (true) {
    setPixel(x0, y0);
    if (x0 === x1 && y0 === y1) break;
    D2 = D;
    if (D2 > 0) {
      D -= dy;
      x0 += sx; // go right
    }
    if (D2 < 0) {
      D += dx;
      y0 += sy; // go down
    }
  }
}
