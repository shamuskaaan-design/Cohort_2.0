var h1 = document.querySelector("h1");
var btn1 = document.querySelector("#increase");
var btn2 = document.querySelector("#decrease");

var count = 0;

btn1.addEventListener("click", function(){
    count++;
    h1.innerHTML = count;
});
btn2.addEventListener("click", function(){
  if(count>0){
  count--;
  h1.innerHTML = count;
  }
})

