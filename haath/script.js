let img = document.querySelector("img");
let text = document.querySelector("h2 span");

img.addEventListener("mouseenter", function(){
  text.innerHTML = "Don't you dare to touch My Man ❤️😡";
})
img.addEventListener("mouseleave", function(){
  text.innerHTML = "That's good 😤";
})