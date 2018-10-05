var reproducirCancion = function (e) {
  var audio = document.querySelector('#audio' + e.keyCode)
  var teclita = document.querySelector("#teclita" + e.keyCode)
  if (audio) {
    teclita.style.color = 'red'
    audio.currentTime = 10
    audio.play();

    setTimeout( function () {
      teclita.style.color = 'black'
    }, 500);
  }
}

document.addEventListener('keydown', reproducirCancion)