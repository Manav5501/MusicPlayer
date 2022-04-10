
// Taking Important Tags as a variable 

const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

// Array of an objects 

const songs = [
  {
    name: "scam-1",
    title: "SCAM",
    artist: "Achint",
  },
  {
    name: "backbone-2",
    title: "BACKBONE",
    artist: "Hardy Sandhu",
  },
  {
    name: "vardaan-3",
    title: "VARDAAN",
    artist: "Carryminati",
  },
  {
    name: "holdmyhands-4",
    title: "Hold My hands",
    artist: "Varun Dhavan",
  },
];

let isPlaying = false;

// Play Music Method 

playMusic = () => {
  isPlaying = true;
  music.play();
  img.classList.add("anime");
  play.classList.replace("fa-play", "fa-pause");
};

// Pause Music Method 

pauseMusic = () => {
  isPlaying = false;
  music.pause();
  img.classList.remove("anime");
  play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", () => {
  if (isPlaying == false) {
    playMusic();
  } else {
    pauseMusic();
  }
});

// Songs Loading Section Starts Here 

const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

//  Progress Js Works
let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
let duration_time = document.getElementById("duration_time");

music.addEventListener("timeupdate", (event) => {

  const currentTime = event.srcElement.currentTime;
  const duration = event.srcElement.duration;
  let progress_per = (currentTime / duration) * 100;
  progress.style.width = `${progress_per}%`;

  // updating duration_time...
  let duration_min = Math.floor(duration / 60);
  let duration_sec = Math.floor(duration % 60);
  if (duration_sec < 10){
    duration_sec = `0${duration_sec}`
  }
  let duration_time_total = `${duration_min}:${duration_sec}`;
  if(duration){
    duration_time.textContent = `${duration_time_total}`;
  }
  

  // updating duration_time...
  let currentTime_min = Math.floor(currentTime / 60);
  let currentTime_sec = Math.floor(currentTime % 60);
  if(currentTime_sec < 10 ){
      currentTime_sec = `0${currentTime_sec}`
  }
  let current_time_total = `${currentTime_min}:${currentTime_sec}`;
  current_time.textContent = `${current_time_total}`;

});

// Next Song Functionality 
music.addEventListener("ended", nextSong)

// On click - Progress start Functionality
let progress_div =  document.getElementById("progress_div")
progress_div.addEventListener("click", (event)=>{
const duration = music.duration
const progress_move = (event.offsetX / event.srcElement.clientWidth) * duration;
music.currentTime = progress_move;
})

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

