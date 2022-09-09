class Music {
    constructor(title,singer,img,file)
    {
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    getName() {
        return this.title ;
    }
}


const musicList= [ 
    new Music("Demedim mi / Oy Gülüm Oy ","Cem Karaca","cemBaba-kardaslar.jpg","konserKaydi.mp3"),
    new Music("33 Kurşun","Cem Karaca","cembBaba2.jpg","33-kursun.mp3"),
    new Music("Beni Bir Gözleri Ahuya Zebun Etti Felek","Cem Karaca","cembBaba4.jpg","ahu.mp3"),
    new Music("Sen de Başını Alıp Gitme","Cem Karaca","cembBaba3.jpg","sen-de-basini-alip-gitme.mp3"),
    new Music("Kerkük Zindanı","Cem Karaca","kerkuk.jpg","kerkuk-zindani.mp3"),
    new Music("Askaros Deresi","Cem Karaca","askaros.jpg","askaros.mp3"),
    new Music("Bu Son Olsun","Cem Karaca","cembBaba.jpg","son-olsun.mp3")

    
];