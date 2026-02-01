let add = document.querySelector(".btn1");
let remove = document.querySelector(".btn2");
let para = document.querySelector("#para");

let img = document.querySelector(".myimg");
let main = document.querySelector("main");

main.addEventListener("mousemove", function(dets){
  
  img.style.left = dets.x - 20 + "px";
  img.style.top = dets.y - 20 + "px";
})

add.addEventListener("click", function(){
  para.innerHTML = "Friends";
  para.style.color = "#1e3a8a";
})
remove.addEventListener("click", function(){
  para.innerHTML = "Unknown";
  para.style.color = "grey";
})