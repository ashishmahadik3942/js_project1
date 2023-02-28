const inputcolor = document.getElementById("inputColorCode")
const inputbox = document.getElementById("inColorBox")
const inputrange = document.getElementById("range")
const range = document.getElementById("persent")
const alterbox = document.getElementById("alterColorBox")
const togglebtn = document.getElementById("toggleBtn")

inputcolor.value= "#000000";
inputcolor.addEventListener('input', function() {
    inputbox.style.backgroundColor = inputcolor.value
    alterbox.style.backgroundColor = inputcolor.valuered
})

inputrange.addEventListener('input', function() {
    let rw = inputrange.value
    range.textContent = rw + "%"
    if(!togglebtn.checked)
        alterbox.style.backgroundColor = newShade(inputcolor.value, rw*3)
    else
    alterbox.style.backgroundColor = newShade(inputcolor.value, 0-rw)
})

const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};