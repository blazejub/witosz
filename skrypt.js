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