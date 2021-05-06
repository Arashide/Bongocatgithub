function copyImageToCanvas() {
  var image = document.querySelector('img');
  var canvas = document.querySelector('canvas');

  var ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0);
}

setTimeout(() => {
  copyImageToCanvas();
}, 300)

window.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    var image = document.querySelector('img');
    image.src = "./img/tabletbg.png";

    copyImageToCanvas();
  }
})
