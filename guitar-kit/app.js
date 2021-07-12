function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play');
}

// window.addEventListener('keydown',function (e){
//   console.log(e);
// })  Checking for selected key on console

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!sound) return;

  key.classList.add('play');
  sound.currentTime = 0;
  sound.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);