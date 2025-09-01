let clickerCoutner = document.getElementById('clicker__counter');
let cookie = document.getElementsByClassName('clicker__cookie') [0];
let count = 0;

function clickOnCookie () {
    count++;
    clickerCoutner.textContent = count;

    if (cookie.width === 200) {
        cookie.width = 350;
    } else {
        cookie.width = 200;
    }
}

cookie.onclick = clickOnCookie;