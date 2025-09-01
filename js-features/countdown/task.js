let timer = document.getElementById('timer');
let currentTime = Number(timer.textContent);


function count() {
    currentTime--;
    timer.textContent = currentTime;

    if (currentTime === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countdown);
    }
}

let countdown = setInterval(count, 1000);