const lights = document.querySelectorAll('.light');
const colors = ['red', 'blue', 'green', 'yellow'];

let changeColor = setTimeout(function setColor() {
    lights.forEach(e => {
        e.style.background = colors[getRandom(0, colors.length)];
    });
    setTimeout(setColor, 1000);
}, 1000);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
