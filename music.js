class Music {
    constructor(title,singer,img,file)
    {
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    getName() {
        return this.title + "-" + this.singer;
    }
}


const musicList= [ 

    new Music("33 Kurşun","Cem Karaca","cembBaba.jpg","33-kursun.mp3"),
    new Music("Raptiye Rap Rap","Cem Karaca","cembBaba2.jpg","raptiye.mp3"),
    new Music("Beni Bir Gözleri Ahuya Zebun Etti Felek","Cem Karaca","cembBaba3.jpg","ahu.mp3"),
    new Music("Deniz Üstü Köpürür","Cem Karaca","cembBaba4.jpg","sen-de-basini-alip-gitme.mp3"),
    new Music("Raptiye Rap Rap","Cem Karaca","2.jpeg","2.mp3"),
    new Music("33 Kurşun","Cem Karaca","3.jpeg","3.mp3"),
    new Music("Tamirci Çırağı","Cem Karaca","1.jpeg","1.mp3"),
    new Music("Allah Yar","Cem Karaca","2.jpeg","2.mp3"),
    new Music("Bu Son Olsun","Cem Karaca","3.jpeg","3.mp3"),
    new Music("Namus Belası","Cem Karaca","1.jpeg","1.mp3"),

    
];