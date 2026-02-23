let box = document.querySelector("#box");
let btn = document.querySelector("Button");
let arr =  ["Daraksha", "Sadia", "Gulafsha","Alisha", "Sarfaraz","Imran","Amreen"];

btn.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*100);
    let c2 = Math.floor(Math.random()*100);
    let c3 = Math.floor(Math.random()*100);

    let RandomIndex = Math.floor(Math.random() * arr.length);
    box.innerHTML = arr[RandomIndex];
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

})