let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");


main.addEventListener("mousemove", function(det){
  cursor.style.left = det.x - 10 + "px";
  cursor.style.top = det.y - 10 + "px";
})