function copyImageToCanvas() {
  var image = document.querySelector('img');
  var canvas = document.querySelector('canvas');

  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0);
}

setTimeout(() => {
  copyImageToCanvas();
}, 100)

window.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    var image = document.querySelector('img');
    image.src = "./img/firstkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    var image = document.querySelector('img');
    image.src = "./img/secondkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    var image = document.querySelector('img');
    image.src = "./img/thirdkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'f') {
    var image = document.querySelector('img');
    image.src = "./img/fourthkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'g') {
    var image = document.querySelector('img');
    image.src = "./img/fifthkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'h') {
    var image = document.querySelector('img');
    image.src = "./img/sixthkey.png";
    copyImageToCanvas();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})
