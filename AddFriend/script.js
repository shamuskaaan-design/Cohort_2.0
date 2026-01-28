let add = document.querySelector(".btn1");
let remove = document.querySelector(".btn2");
let para = document.querySelector("#para");

add.addEventListener("click", function(){
  para.innerHTML = "Friends";
  para.style.color = "#1e3a8a";
})
remove.addEventListener("click", function(){
  para.innerHTML = "Unknown";
  para.style.color = "grey";
})