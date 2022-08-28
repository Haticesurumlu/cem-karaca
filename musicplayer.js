class MusicPlayer{
    constructor(musicList) {
this.musicList=musicList;
this.index=1;


    }

    getMusic() {
        return this.musicList[this.index];
    }
}