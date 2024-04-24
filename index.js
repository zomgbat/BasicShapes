// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Changes the color of the background using STYLE
function changeBackgroundColor() {
    var colorBg = document.getElementById("color-overlay")
    colorBg.style.backgroundColor = generateRandomColor();
}

function changeBackgroundText() {
    var textBg = document.getElementById("text-bg")
    if (textBg.innerHTML == "RAVE") {
        textBg.innerHTML = "OR"
    } else if (textBg.innerHTML == "OR") {
        textBg.innerHTML = "DIE"
    } else if (textBg.innerHTML == "DIE") {
        textBg.innerHTML = "RAVE"
    };
}

function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
}

// Run this function every 300ms
setInterval(changeBackground, 300);