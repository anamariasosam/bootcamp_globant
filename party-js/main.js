var playSong = function (e) {
  var audio = document.querySelector('#audio' + e.keyCode)
  var balloon = document.querySelector("#balloon" + e.keyCode)
 
  if (audio) {
    balloon.classList.add("blow");
    audio.currentTime = 0
    audio.play();

    setTimeout( function () {
      balloon.classList.remove("blow");
    }, 1000);
  }
}

document.addEventListener('keydown', playSong)