
let dzwiek = document.getElementById('dzwiek');
let dzwiek2 = document.getElementById('eat');
let dzwiek3 = document.getElementById('fry');
let dzwiek4 = document.getElementById('chrup');
let audio = document.getElementsByTagName('audio')

dzwiek.addEventListener('mouseenter', () => {
    audio[1].play()
});
eat.addEventListener('mouseenter', () => {
    audio[0].play()
});
fry.addEventListener('mouseenter', () => {
    audio[3].play()
});
chrup.addEventListener('mouseenter', () => {
    audio[2].play()
});

let sc2 = document.getElementById("content2");
let sc3 = document.getElementById("content3");
let sc4 = document.getElementById("content4");
let sc5 = document.getElementById("content5");

let zmienna = "0123456789ABCDEF";
let kolor = "#";
let kolor1 = "#";
let kolor2 = "#";
let kolor3 = "#";
for(var i=0;i<6;i++){
    kolor = kolor + zmienna[Math.floor(Math.random()* 16)]
}
for(var i=0;i<6;i++){
    kolor1 = kolor1 + zmienna[Math.floor(Math.random()* 16)]
}
for(var i=0;i<6;i++){
    kolor2= kolor2 + zmienna[Math.floor(Math.random()* 16)]
}
for(var i=0;i<6;i++){
    kolor3 = kolor3 + zmienna[Math.floor(Math.random()* 16)]
}

sc2.addEventListener('mouseenter', () => {
    document.querySelector('body').style.background = kolor;
});
sc3.addEventListener('mouseenter', () => {
    document.querySelector('body').style.background = kolor1;
});
sc4.addEventListener('mouseenter', () => {
    document.querySelector('body').style.background = kolor2;
});
sc5.addEventListener('mouseenter', () => {
    document.querySelector('body').style.background = kolor3;
});

