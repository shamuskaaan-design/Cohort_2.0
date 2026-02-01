let img = document.querySelector("img");
let main = document.querySelector("main");

main.addEventListener("mousemove", function(dets){
  
  img.style.left = dets.x - 20 + "px";
  img.style.top = dets.y - 20 + "px";
})