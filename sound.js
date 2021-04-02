let soundOn = true;
let backgroundMusic = new Audio();
backgroundMusic.loop = "true";

function displaySoundSwitch(state) {
    ctx.beginPath();
    if (mql.matches) {
        ctx.clearRect(400, 525, 150, 100);
        ctx.fillStyle = 'white';
        ctx.font = "25px Montserrat";
        ctx.beginPath();
        ctx.fillText(`sound ${state}`, 400, 550);
    }
    else {
        ctx.clearRect(430, 525, 150, 100);
        ctx.fillStyle = 'white';
        ctx.font = "12px Montserrat";
        ctx.beginPath();
        ctx.fillText(`turn sound ${state}`, 430, 550);
    }
}

// create sound off/on switch
function turnSoundOnOff() {
    if (soundOn === true) {
        displaySoundSwitch('on');
        backgroundMusic.pause();
        soundOn = false;
    }
    else {
        displaySoundSwitch('off');
        backgroundMusic.play();
        soundOn = true;
    }
}

displaySoundSwitch('off');
if (mouseX >=430 && mouseX <= 550 && mouseY >= 525 && mouseY <= 575) {
    turnSoundOnOff();
    return null;
}