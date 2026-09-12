let container = document.querySelector(".container");
let colorCode = document.querySelector(".color-code");

function randomColorGenerator() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    let color = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
    return color
}

function updateUI() {
    let colorValue = randomColorGenerator();
    container.style.backgroundColor = colorValue;
    colorCode.textContent = colorValue;
}

updateUI();

setInterval(() => {
    updateUI()
}, 2000);