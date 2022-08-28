const container = document.querySelector(".container")
const image = document.querySelector("#music-image")




const player= new MusicPlayer(musicList);

let music=player.getMusic();
console.log(music.getName());


