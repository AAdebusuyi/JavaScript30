function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

//selects all keys and for each key, listens for when transition ends
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
