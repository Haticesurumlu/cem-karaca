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

    new Music("Kerkük Zindanı","Cem Karaca","/img/CemBaba(1).jfif","1.mp3"),
    new Music("Oy Gülüm","Cem Karaca","/img/CemBaba(1).jpg","2.mp3"),
    new Music("Islak Islak","Cem Karaca","3.jpeg","3.mp3"),
    new Music("Deniz Üstü Köpürür","Cem Karaca","1.jpeg","1.mp3"),
    new Music("Raptiye Rap Rap","Cem Karaca","2.jpeg","2.mp3"),
    new Music("33 Kurşun","Cem Karaca","3.jpeg","3.mp3"),
    new Music("Tamirci Çırağı","Cem Karaca","1.jpeg","1.mp3"),
    new Music("Allah Yar","Cem Karaca","2.jpeg","2.mp3"),
    new Music("Bu Son Olsun","Cem Karaca","3.jpeg","3.mp3"),
    new Music("Namus Belası","Cem Karaca","1.jpeg","1.mp3"),

    
];