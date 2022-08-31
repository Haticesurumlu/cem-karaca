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
    new Music("Demedim mi Oy Gülüm Oy ","Cem Karaca","cemBaba-kardaslar.jpg","konserKaydi.mp3"),
    new Music("33 Kurşun","Cem Karaca","cembBaba.jpg","33-kursun.mp3"),
    new Music("Raptiye Rap Rap","Cem Karaca","cembBaba2.jpg","raptiye.mp3"),
    new Music("Beni Bir Gözleri Ahuya Zebun Etti Felek","Cem Karaca","cembBaba3.jpg","ahu.mp3"),
    new Music("Deniz Üstü Köpürür","Cem Karaca","cembBaba4.jpg","sen-de-basini-alip-gitme.mp3"),
    new Music("Kerkük Zindanı","Cem Karaca","cemBaba-kerkük.jpg","kerkuk-zindani.mp3"),
    new Music("33 Kurşun","Cem Karaca","askaros.jpg","askaros.mp3")

    
];