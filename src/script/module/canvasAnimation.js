export const canvasAnimation = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.width = "100%"; // 例: 幅を500pxに設定
  canvas.style.height = "100%"; // 例: 高さを300pxに設定

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ctx.strokeStyle = "#BADA55";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 10;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function resetCanvas() {
    clearCanvas();
    isDrawing = false;
  }

  canvas.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      // 左クリックの場合のみ描画を開始
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  });

  canvas.addEventListener("mousemove", draw);

  canvas.addEventListener("mouseup", (e) => {
    if (e.button === 0) {
      // 左クリックの場合のみ描画を停止
      isDrawing = false;
    }
  });

  canvas.addEventListener("mouseout", () => {
    if (isDrawing) {
      // マウスがキャンバス外に移動しても描画を続行
      clearCanvas();
    }
  });

  // リセットボタンを追加
  const resetButton = document.createElement("button");
  resetButton.textContent = "リセット";
  resetButton.addEventListener("click", resetCanvas);
  document.body.appendChild(resetButton);
};
