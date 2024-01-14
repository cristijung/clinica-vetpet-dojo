const arrayImages = [
    {name: "image1", src: "./assets/pexels-tima-miroshnichenko-6235233.jpg"},
    {name: "image2", src: "./assets/imagem-coelho.jpg"},
    {name: "image3", src: "./assets/imagem-cachorro-vet.jpg"}
];

const imageHero = document.getElementById("hero-image");

function changeImage(image){
    arrayImages.forEach((item) => {
        if(image === item.name){
            imageHero.src = item.src;
        }
    });
}

