const arrayImages = [
    {name: "image1", src: "./assets/pexels-tima-miroshnichenko-6235233.jpg"},
    {name: "image2", src: "./assets/mao-segurando-pata-cachorro.png"},
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

function changeImageAuto() {
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3")
    setInterval(() => {
        
        if (radio1.checked) {
            radio2.checked = true;
            radio1.checked = false;
            changeImage("image2");
        } else if (radio2.checked) {
            radio3.checked = true;
            radio2.checked = false;
            changeImage("image3");
        } else if (radio3.checked) {
            radio1.checked = true;
            radio3.checked = false;
            changeImage("image1");
        }
    }, 5000);
}

changeImageAuto();