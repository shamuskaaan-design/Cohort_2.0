let grow = 0;

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let inner = document.querySelector(".inner");

btn.addEventListener("click", () =>{
  btn.style.pointerEvents = "none";

  let a = 50 + Math.floor(Math.random()*70);

  let int = setInterval( () =>{
    grow++;
    h1.innerHTML = grow+"%";
    inner.style.width = grow + "%";
     console.log('Your file will be downloaded in',a/10,'seconds');
  }, a)

  setTimeout(() =>{
    clearInterval(int);
    btn.innerHTML = "Downloaded"
    btn.style.opacity= 0.8;
  },a*100);

  setTimeout(() =>{
    alert("Your file is downloaded");
  },a*102);
})