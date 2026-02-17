 let para = document.querySelector("h5");
let text = para.innerHTML;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let chararray = characters.split("");
let interval;
/*
para.addEventListener("mouseenter", (e) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    let str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return chararray[Math.floor(Math.random() * chararray.length)];
      })
      .join("");

    para.innerHTML = str;

    iteration += 0.25;

    if (iteration >= text.length) {
      clearInterval(interval); // stop when done
    }
  }, 30);
});
*/

function startAnimation() {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    let str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return chararray[Math.floor(Math.random() * chararray.length)];
      })
      .join("");

    para.innerHTML = str;

    iteration += 0.25;

    if (iteration >= text.length) {
      clearInterval(interval);
    }
  }, 30);
}

para.addEventListener("mouseenter", startAnimation); // desktop
para.addEventListener("click", startAnimation);      // mobile
