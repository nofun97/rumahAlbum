/* Created by Novan Allanadi
 * Friday, 5 January 2018
 * Image Slider
 */
const max = 5;
let index = 1;

function moveIndexRight() {
    changeImage((index++)%max + 1);
}

function moveIndexLeft(){
    if (index <= 1){
        index = max;
        changeImage(max);
    } else {
        changeImage((index--)%max + 1);
    }
}

function changeImage(n) {
    document.getElementById('images')
    .setAttribute('src', '/Images/materirumahalbum/Magazine (' + n + ').jpg');
}

document.getElementById("buttonRight").addEventListener("click", moveIndexRight);
document.getElementById("buttonLeft").addEventListener("click", moveIndexLeft);
