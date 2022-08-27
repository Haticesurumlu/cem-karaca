class Music {
    constructor(title,singer,img,file)
    {
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    getName() {
        return this.title + " " + this.singer;
    }
}


const musicList= [ 

    new Music("Kerkük Zindanı","Cem Karaca","1.jpeg","1.mp3"),
    new Music("Nazar Eyle","Barış Manço","2.jpeg","2.mp3"),
    new Music("Cumhuriyet","Yalın","2.jpeg","2.mp3"),
    
];