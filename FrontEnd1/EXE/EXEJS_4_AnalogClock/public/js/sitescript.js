// Cach 1: Dung setTimeOut
const clock = document.querySelector('#digi-clock');

let setTime = setTimeout(function timer() {
    let day = new Date();
    //let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
    let time = day.toLocaleTimeString();
    clock.textContent = time;
    setTimeout(timer, 1000);
});

// Cach 2: Dung setInterval
// const clock = document.querySelector('#digi-clock')
// startTime()
// setInterval(startTime, 1000);

// function startTime() {
//     let day = new Date();
//     let time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
//     clock.innerHTML = time;
// }
