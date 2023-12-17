let number = 1;
function next() {
    number = number + 1;
    if(number > 8){number = 1}
    photo.src = `./assets/img/img-${number}.jpg`
}
