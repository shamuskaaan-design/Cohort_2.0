var h1 = document.querySelector("h1");
var btn1 = document.querySelector("#increase");
var btn2 = document.querySelector("#decrease");
var sound = document.querySelector("#clickSound");

var count = 1;
h1.innerText = count;

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function bump() {
  h1.classList.add("bump");
  setTimeout(() => {
    h1.classList.remove("bump");
  }, 200);
}

btn1.addEventListener("click", function () {
  count++;
  h1.innerText = count;
  playSound();
  bump();
});

btn2.addEventListener("click", function () {
  if (count > 0) {
    count--;
    h1.innerText = count;
    playSound();
    bump();
  }
});
