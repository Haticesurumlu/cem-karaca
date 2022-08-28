const container = document.querySelector(".container")
const image = document.querySelector("#music-image")
const title=document.querySelector('#music-details .title')
const singer=document.querySelector('#music-details .singer')




const player= new MusicPlayer(musicList);

let music=player.getMusic();
console.log(music.getName());


