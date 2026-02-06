const reels = [
  {
    username: "aesthetic.soul",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    caption: "Slow mornings & calm hearts ✨",
    video: "./reels/reel01.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 210,
    isFollowed: true,
  },
  {
    username: "code.with.muskan",
    likeCount: 8920,
    isLiked: false,
    commentCount: 198,
    caption: "Learning JavaScript step by step 💻🔥",
    video: "./reels/reel02.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 145,
    isFollowed: true,
  },
  {
    username: "daily.motivation",
    likeCount: 15670,
    isLiked: true,
    commentCount: 421,
    caption: "Discipline will take you where motivation can’t 🚀",
    video: "./reels/reel03.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 389,
    isFollowed: false,
  },
  {
    username: "islamic.reminders",
    likeCount: 20340,
    isLiked: true,
    commentCount: 612,
    caption: "Trust Allah, He is the best planner 🤍",
    video: "./reels/reel04.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 540,
    isFollowed: true,
  },
  {
    username: "travel.vibes",
    likeCount: 9780,
    isLiked: false,
    commentCount: 254,
    caption: "Lost somewhere between mountains & dreams 🏔️",
    video: "./reels/reel05.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 190,
    isFollowed: false,
  },
  {
    username: "foodie.diaries",
    likeCount: 18450,
    isLiked: true,
    commentCount: 488,
    caption: "Because good food = good mood 🍕❤️",
    video: "./reels/reel01.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 330,
    isFollowed: true,
  },
  {
    username: "minimal.life",
    likeCount: 6420,
    isLiked: false,
    commentCount: 121,
    caption: "Less clutter, more clarity 🌿",
    video: "./reels/reel02.mp4",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    shareCount: 88,
    isFollowed: false,
  },
  {
    username: "fitness.goalz",
    likeCount: 11230,
    isLiked: true,
    commentCount: 305,
    caption: "No excuses. Just progress 💪",
    video: "./reels/reel03.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 275,
    isFollowed: true,
  },
  {
    username: "creative.mind",
    likeCount: 7310,
    isLiked: false,
    commentCount: 167,
    caption: "Create something today, even if it’s small 🎨",
    video: "./reels/reel04.mp4",
    userProfile: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    shareCount: 102,
    isFollowed: false,
  },
  {
    username: "night.thoughts",
    likeCount: 16540,
    isLiked: true,
    commentCount: 529,
    caption: "Some thoughts are only meant for late nights 🌙",
    video: "./reels/reel05.mp4",
    userProfile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    shareCount: 410,
    isFollowed: true,
  },
];

let sum = "";

reels.forEach(function (elem) {
  sum =
    sum +
    `<div class="reel">
          <video autoplay loop muted src ="${elem.video}"></video>
           <i id="like" class="ri-poker-hearts-fill"></i>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userProfile}" alt="image2">
              <h4>${elem.username}</h4>
              <button>${elem.isFollowed? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div class="like">
              <h3 id="love-icon"><i class="ri-heart-line"></i></h3>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h3 id="comment-icon"><i class="ri-chat-3-line"></i></h3>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h3 id="share-icon"><i class="ri-send-ins-line"></i></h3>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="more">
              <h3 id="more-icon"><i class="ri-more-2-fill"></i></h3>
            </div>
          </div>
        </div>`;
});

let allreels = document.querySelector(".all-reels");
allreels.innerHTML = sum;

let btn = document.querySelectorAll("button");

btn.forEach(function (elem) {
  elem.addEventListener("click", function () {

    if (elem.innerHTML == "Follow") {
         elem.innerHTML = "Following";
    } 
    else {
      elem.innerHTML = "Follow";
    }
  });
});

let likes = document.querySelectorAll(".ri-heart-line");

likes.forEach(function (elem) {
  elem.addEventListener("click", function () {

    if (elem.classList.contains("ri-heart-line")) {
      elem.classList.remove("ri-heart-line");
      elem.classList.add("ri-heart-fill");
    } else {
      elem.classList.remove("ri-heart-fill");
      elem.classList.add("ri-heart-line");
    }

  });
});

let love = document.querySelector(".ri-poker-hearts-fill");
let reel = document.querySelector("section");

reel.addEventListener("dblclick", function(){
 love.style.opacity = 1;
 love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";


 setTimeout(function(){
   love.style.transform = "translate(-50%, -700%) scale(1) rotate(60deg)";
},900);

setTimeout(function(){
   love.style.opacity = 0;
},1000);

setTimeout(function(){
    love.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
}, 1200);

})
