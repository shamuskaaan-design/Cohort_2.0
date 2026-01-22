let h1 = document.querySelector("h1");
let btn = document.querySelector("#btn");
let main = document.querySelector("#main");

let arr = [
  {
    team:"Chennai Super Kings",
    captain:"Ruturaj Gaikwad",
    primary:"#F2C94C",   // soft yellow
    secondary:"#2F80ED", // muted blue
    won:5
  },
  {
    team:"Mumbai Indians",
    captain:"Hardik Pandya",
    primary:"#1F3C88",   // deep muted blue
    secondary:"#C9A227", // soft gold
    won:5
  },
  {
    team:"Kolkata Knight Riders",
    captain:"Shreyas Iyer",
    primary:"#3A1C5A",   // dark purple
    secondary:"#B4975A", // muted gold
    won:2
  },
  {
    team:"Rajasthan Royals",
    captain:"Sanju Samson",
    primary:"#D16BA5",   // dusty pink
    secondary:"#355C7D", // soft navy
    won:1
  },
  {
    team:"Sunrisers Hyderabad",
    captain:"Pat Cummins",
    primary:"#E76F51",   // soft orange
    secondary:"#1F1F1F", // charcoal
    won:1
  },
  {
    team:"Royal Challengers Bengaluru",
    captain:"Faf du Plessis",
    primary:"#8B0000",   // deep red
    secondary:"#2B2B2B", // dark gray
    won:0
  },
  {
    team:"Delhi Capitals",
    captain:"Rishabh Pant",
    primary:"#274060",   // steel blue
    secondary:"#8B2F2F", // muted red
    won:0
  },
  {
    team:"Punjab Kings",
    captain:"Shikhar Dhawan",
    primary:"#7A1F2B",   // wine red
    secondary:"#B0B0B0", // soft silver
    won:0
  },
  {
    team:"Gujarat Titans",
    captain:"Shubman Gill",
    primary:"#0A1A2F",   // deep navy
    secondary:"#B89B5E", // elegant gold
    won:1
  },
  {
    team:"Lucknow Super Giants",
    captain:"KL Rahul",
    primary:"#6CA0DC",   // pastel blue
    secondary:"#F4A261", // soft orange
    won:0
  }
]

btn.addEventListener("click", function(){
  let show = arr[Math.floor(Math.random() * arr.length)];

  h1.innerText = show.team;
  h1.style.backgroundColor = show.primary;
  main.style.backgroundColor = show.secondary;
})