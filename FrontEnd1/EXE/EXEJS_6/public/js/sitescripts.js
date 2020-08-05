const circles = document.querySelectorAll('.circle');
const scoreDiv = document.querySelector('#score');
let score = 0;

circles.forEach(e => {
    e.addEventListener('click', function () {
        score += parseInt(this.textContent);
        scoreDiv.textContent = score;
    });
});

let changePos = setTimeout(function setPos() {
    circles.forEach(e => {
        e.style.top = getRandom(0, 800) + 'px';
        e.style.left = getRandom(0, 1200) + 'px';
    });
    changePos = setTimeout(setPos, 1500);
}, 1500);

let game = setTimeout(function () {
    clearTimeout(changePos);
    alert("Time out!!! Score: " + score);
}, 10000);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
