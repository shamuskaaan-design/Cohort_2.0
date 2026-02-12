const reels = [
  {
    ismuted: true,
    username: "aesthetic.soul",
    likeCount: 1245,
    isLiked: true,
    commentCount: 342,
    caption: "Slow mornings & calm hearts ✨",
    video: "./reels/reel01.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 210,
    isFollowed: true,
  },
  {
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
    username: "islamic.reminders",
    likeCount: 2030,
    isLiked: true,
    commentCount: 612,
    caption: "Trust Allah, He is the best planner 🤍",
    video: "./reels/reel04.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 540,
    isFollowed: true,
  },
  {
    ismuted: true,
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
    ismuted: true,
    username: "foodie.diaries",
    likeCount: 1450,
    isLiked: true,
    commentCount: 488,
    caption: "Because good food = good mood 🍕❤️",
    video: "./reels/reel01.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 330,
    isFollowed: true,
  },
  {
    ismuted: true,
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
    ismuted: true,
    username: "fitness.goalz",
    likeCount: 1130,
    isLiked: true,
    commentCount: 305,
    caption: "No excuses. Just progress 💪",
    video: "./reels/reel03.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 275,
    isFollowed: true,
  },
  {
    ismuted: true,
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
    ismuted: true,
    username: "night.thoughts",
    likeCount: 1640,
    isLiked: true,
    commentCount: 529,
    caption: "Some thoughts are only meant for late nights 🌙",
    video: "./reels/reel05.mp4",
    userProfile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    shareCount: 410,
    isFollowed: true,
  },
];

let allreels = document.querySelector(".all-reels");

function addData() {
  let sum = "";

  reels.forEach(function (elem, index) {
    sum =
      sum +
      `<div class="reel">
          <video autoplay loop ${elem.ismuted ? "muted" : ""} src ="${elem.video}"></video>
          <div class="mute" id=${index}>
          ${elem.ismuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}

      </div>
           <i id="like" class="ri-poker-hearts-fill"></i>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userProfile}" alt="image2">
              <h4>${elem.username}</h4>
              <button id=${index} class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${index} class="like">
              <h3 id="love-icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</i></h3>
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

  allreels.innerHTML = sum;
}

addData();

window.addEventListener("scroll", function () {
  let videos = document.querySelectorAll("video");

  videos.forEach(function (video) {
    let rect = video.getBoundingClientRect();

    // If video is mostly visible on screen
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      video.play();
    } else {
      video.pause();
      video.muted = true; // stop sound also
    }
  });
});

allreels.addEventListener("click", function (e) {
  if (e.target.className == "like") {
    if (!reels[e.target.id].isLiked) {
      reels[e.target.id].likeCount++;
      reels[e.target.id].isLiked = true;
    } else {
      reels[e.target.id].likeCount--;
      reels[e.target.id].isLiked = false;
    }
  }

  if (e.target.className == "follow") {
    if (!reels[e.target.id].isFollowed) {
      reels[e.target.id].isFollowed = true;
    } else {
      reels[e.target.id].isFollowed = false;
    }
  }

  if (e.target.className == "mute") {
    if (!reels[e.target.id].ismuted) {
      reels[e.target.id].ismuted = true;
    } else {
      reels[e.target.id].ismuted = false;
    }
  }

  addData();
});
