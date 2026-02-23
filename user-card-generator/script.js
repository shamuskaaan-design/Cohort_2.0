const users = [
  {
    fullName: "Software Developer",
    realImage: "https://media.istockphoto.com/id/2150988877/photo/professional-man-working-on-laptop-in-modern-office.jpg?s=1024x1024&w=is&k=20&c=biJEmAUXZoFqbZ482erRCZN5hi0QFijM-pteNJu2YI0=",
    profession: "Full Stack Developer",
    description: "Builds scalable web applications using modern frontend and backend technologies."
  },
  {
    fullName: "UI/UX Designer",
    realImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    profession: "Product Designer",
    description: "Designs user-friendly interfaces with a focus on accessibility and user experience."
  },
  {
    fullName: "Content Creator",
    realImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    profession: "Digital Marketer",
    description: "Creates engaging content and strategies for social media and online platforms."
  },
  {
    fullName: "Data Analyst",
    realImage: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80",
    profession: "Data Scientist",
    description: "Analyzes complex datasets to derive insights and support data-driven decisions."
  },
  {
    fullName: "Daraksha Muskaan",
    realImage: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Fronted Developer",
    description: "Analyzes complex datasets to derive insights and support data-driven decisions."
  }
];

let sum ='';

users.forEach(function(elem){
  sum = sum + `<div class="card">
      <img src=${elem.realImage} alt="image1">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`
});
let main = document.querySelector("main");

main.innerHTML = sum;
