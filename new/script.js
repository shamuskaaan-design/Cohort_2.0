let audio = new Audio("./MYMAN.mp3");
let sorry = new Audio("./sorry.mp3")
let button = document.querySelector("button")
let btn = document.querySelector("#btn")

btn.addEventListener("click" , function(){
  audio.play();
})

button.addEventListener("click", function(){
  sorry.play();
})