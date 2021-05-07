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
    var audio = new Audio('firstkey.mp3');
    audio.play();

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
    var audio = new Audio('secondkey.mp3');
    audio.play();

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
    var audio = new Audio('thirdkey.mp3');
    audio.play();


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
    var audio = new Audio('fourthkey.mp3');
    audio.play();

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
    var audio = new Audio('fifthkey.mp3');
    audio.play();

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
    var audio = new Audio('sixthkey.mp3');
    audio.play();

    setTimeout(() => {
      var image = document.querySelector('img');
      image.src = "./img/armsup.png";
      copyImageToCanvas();
}, 100);
  }
})
