const img = document.querySelector("img");
         const music = document.querySelector("audio");
         const play = document.getElementById("play");
         const prev = document.getElementById("prev");
         const next = document.getElementById("next");
         const artist = document.getElementById("artist")
         const title = document.getElementById("title")

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
            }
        ]
        
       
         let isPlaying = false;

         playMusic = () => {
             isPlaying = true
             music.play()
             img.classList.add("anime")
             play.classList.replace("fa-play", "fa-pause")
         }
         pauseMusic = () => {
            isPlaying =false
             music.pause()
             img.classList.remove("anime")
             play.classList.replace("fa-pause", "fa-play")
         }

         play.addEventListener("click", ()=>{
             if (isPlaying == false){
                 playMusic()
             }
             else{
                 pauseMusic()
             }
         })

         const loadSongs = (songs) => {
           title.textContent = songs.title;
           artist.textContent = songs.artist;
           music.src = "music/" + songs.name +".mp3"
           img.src = "images/" + songs.name + ".jpg"
             
         }

         songIndex = 0

         const nextSong = () => {
             songIndex = (songIndex + 1) % songs.length;
             loadSongs(songs[songIndex])
             playMusic()
         }

         const prevSong = () => {
             songIndex = (songIndex - 1 + songs.length) % songs.length;
             loadSongs(songs[songIndex])
             playMusic()
         }
        prev.addEventListener("click", prevSong)
        next.addEventListener("click", nextSong)