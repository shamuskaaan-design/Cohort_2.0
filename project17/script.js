let btn = document.querySelector("img");
let main = document.querySelector("main");

let arr = ["i love you so much shonu","sorry shonu","you are the bestest mera baccha","you are my everything shonuu","sorry for everthing shonuu mere shahzade","jaanuuuu you are mine","you will be my mehram soon","you are lovely","sorry shonuu","YOU ARE MINEEEEEEEE SORRY SHONUUUU"];

btn.addEventListener("click", function() {
  
  let random = Math.floor(Math.random()*arr.length);
  let T = Math.floor(Math.random()*70);
  let L = Math.floor(Math.random()*70);


  let h1 = document.createElement("h1");
  h1.innerText = arr[random];
  h1.style.top = T+"%";
  h1.style.left = L+"%";
  h1.style.position = "absolute";
  h1.style.color = "white";

  main.appendChild(h1);

  /*let div = document.createElement("div");

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256); 
  let t = Math.floor(Math.random() * 100);
  let l = Math.floor(Math.random() * 100);

  div.style.width = "80px";
  div.style.height = "80px";
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  div.style.position = "absolute";
  div.style.top = t+"%";
  div.style.left = l+"%";

  main.appendChild(div);
  */
})