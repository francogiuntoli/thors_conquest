let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '5px solid brown';
canvas.style.backgroundColor = '#f0c6a3'



// The DOM of the start and the restart buttons
let gameOverScreen = document.querySelector('#gameover')
let gameOverText = document.querySelector('.congover')
let startBtn = document.querySelector('#start')
let mainMenuBtn = document.querySelector('#mainmenu')
let splashScreen = document.querySelector('#splash')
let restartBtn = document.querySelector('#restart')
let scoreId = document.querySelector('.hs1')

// Image loads
let mjolnirhq = new Image();
mjolnirhq.src = './img/mjolnir-hq.png'

let thorRight = new Image();
thorRight.src = './img/thor-hq.png'

let thorLeft = new Image();
thorLeft.src = './img/thor-hql.png'

let thorMovingR = new Image();
thorMovingR.src = './img/thor-movingR.png';

let thorMovingL = new Image();
thorMovingL.src = './img/thor-movingL.png';

let thorDefault = thorRight

let lokihq = new Image();
lokihq.src = './img/loki.png'

let dagger = new Image();
dagger.src = './img/dagger.png'

//Variables
let intervalId = 0, isGameOver = false, score= 0, highscore= 0;
let thorX = 20, thorY = 580, thorMove = 8 , thorW = thorDefault.width/15, thorH = thorDefault.height/15;
let daggerX = 30, daggerY = -35, daggerDrop = 5, daggerW = dagger.width/4, daggerH = dagger.height/4;
let isArrowLeft = false, isArrowRight = false;
let mjolnirW = mjolnirhq.width/30, mjolnirH = mjolnirhq.height/30, mjolnirX = 600;


//ArrowEvents
document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.code == 'ArrowRight'){
        whooshAudio.play()
        whooshAudio.volume  = 0.3;
        thorDefault = thorMovingR
        isArrowRight = true
        isArrowLeft = false
    }
    else if (event.code == 'ArrowLeft') {
        whooshAudio.play()
        whooshAudio.volume  = 0.3;
        thorDefault = thorMovingL
        isArrowRight = false
        isArrowLeft = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowRight'){
        whooshAudio.pause()
        thorDefault = thorRight
        isArrowRight = false
        isArrowLeft = false
    }
    else if (event.code == 'ArrowLeft') {
        whooshAudio.pause()
        thorDefault = thorLeft        
        isArrowRight = false
        isArrowLeft = false
    }    
})



//DESIGN ELEMENTS

//join elements?
function hills(){
    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(0, canvas.height)
    ctx.lineTo(canvas.width +10, canvas.height - 150)
    ctx.lineTo(canvas.width,canvas.height)
    ctx.lineTo(0, canvas.height)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(canvas.width-180, canvas.height-230)
    ctx.lineTo(0, canvas.height - 350)
    ctx.lineTo(0, canvas.height - 150)
    ctx.lineTo(canvas.width-180, canvas.height-230)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(180, canvas.height-460)
    ctx.lineTo(canvas.width, canvas.height-610)
    ctx.lineTo(canvas.width, canvas.height-350)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
//floor level 0 (l to r)
function drawHill1(){
    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(0, canvas.height)
    ctx.lineTo(canvas.width +10, canvas.height - 150)
    ctx.lineTo(canvas.width,canvas.height)
    ctx.lineTo(0, canvas.height)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
//floor level 1 (r to l)
function drawHill2(){
    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(canvas.width-180, canvas.height-230)
    ctx.lineTo(0, canvas.height - 350)
    ctx.lineTo(0, canvas.height - 150)
    ctx.lineTo(canvas.width-180, canvas.height-230)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
//floor level 2 (l to r)
function drawHill3(){
    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(180, canvas.height-460)
    ctx.lineTo(canvas.width, canvas.height-610)
    ctx.lineTo(canvas.width, canvas.height-350)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
//mjolnir
function drawMjolnir(){
    ctx.drawImage(mjolnirhq, mjolnirX, 150, mjolnirW, mjolnirH)
}
//thor
function drawThor(){
    ctx.drawImage(thorDefault, thorX, thorY, thorW, thorH)
}
//loki
function drawLoki(){
    ctx.drawImage(lokihq, 750, 0, lokihq.width/1.5, lokihq.height/1.5)
}



//for loopin
let daggers = [
    {x: 20, y: -500},
    {x: 300, y: -50},
    {x: 600, y: -150},
    {x: 450, y: -350},
];


function thorMoving(){
    if(thorY>=449 && thorY<= canvas.height){
        if(isArrowRight && thorX+thorW<=canvas.width ){
            thorX += thorMove
            thorY -= thorMove/7
        }
        if(isArrowLeft && thorX-10>0){
            thorX -=thorMove
            thorY +=thorMove/7
        }
    }
    if(thorY<449 && thorY > 241){
        if(isArrowLeft && thorX-10>0){
            thorX -= thorMove
            thorY -= thorMove/4.5
        }
        if(isArrowRight && thorX+thorW<=canvas.width){
            thorX +=thorMove
            thorY +=thorMove/4.5
        }
    }
    if(thorY<241 && thorY>0){
        if(isArrowRight && thorX+thorW<=canvas.width){
            thorX += thorMove
            thorY -= thorMove/4.3
            
        }
        if(isArrowLeft && thorX-10>0){
            thorX -=thorMove
            thorY +=thorMove/4.3
        }
    }
    if(thorY <= 150 && thorX >=600){
        score++
        daggerDrop *= 1.2 
        scoreId.innerHTML = `Current level ${score} - HighScore: 12`
        gameOverText.innerText = 'Congratulations!'
        restartBtn.innerText = "Continue"
        gameWin.play();
        gameWin.volume = 0.16;
        isGameOver = true;
        console.log('win')

    }
    
}

function daggerMoving(){
    
    for(let i=0; i< daggers.length; i++) {
        ctx.drawImage(dagger, daggers[i].x, daggers[i].y, daggerW, daggerH)
        daggers[i].y += daggerDrop
        
        // making an infinite loop for the pipes
        if (daggers[i].y >= canvas.height) {
            daggers[i] = {
                x: Math.floor(Math.random()*canvas.width), 
                y: -Math.floor(Math.random()*daggerH)
            }
        }
        
        //collision
        if(daggers[i].x < thorX + thorW && daggers[i].x + daggerW > thorX && daggers[i].y + 50< thorY+thorH &&daggers[i].y + daggerH > thorY+50){
            
            daggers[i].x = 20
            daggers[i].y = -1000
            stabAudio.play();
            stabAudio.volume  = 0.2;
            scoreId.innerText = `You maxed at level ${score}, try again!`
            restartBtn.innerText = "Restart"
            gameOverText.innerText = 'Game Over!'
            isGameOver = true;
            gameOverAudio.play();
            gameOverAudio.volume = 0.16;
            score = 0
            daggers[i].y = daggerDrop
            console.log('hit')
        }

    }

}



function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawMjolnir()
    hills()
      
    drawThor()
    thorMoving()
    
    drawLoki() 
    
    daggerMoving()
    
  
    
    if (isGameOver) {
        
        
        cancelAnimationFrame(intervalId);
        canvas.style.display = 'none'
        gameOverScreen.style.display = 'block'
        restartBtn.style.display = 'block'
    }
    else {
        intervalId = requestAnimationFrame(animate)
    }
    
}





//screens
function start(){
    daggers = [
        {x: 20, y: -500},
        {x: 300, y: -50},
        {x: 600, y: -150},
        {x: 450, y: -350},
    ];
    thorX = 20;
    thorY = 580;
    isGameOver = false;
    splashScreen.style.display = 'none'
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    animate()
}

function restart() {
    daggers = [
        {x: 20, y: -500},
        {x: 300, y: -50},
        {x: 600, y: -150},
        {x: 450, y: -350},
    ];
    thorX = 20;
    thorY = 580;
    isGameOver = false;
    gameOverScreen.style.display = 'none'
    canvas.style.display = 'block'    
    restartBtn.style.display = 'block'
    animate()
}

function gameOver() {
    scoreId.innerText = `Highscore: ${score}`
    restartBtn.style.display = 'block'
    canvas.style.display = 'none'    
    isGameOver = false;
    thorX = 20;
    thorY= 580;
        
}

let bgMusic = new Audio('./sounds/bg-music.mp3')
let whooshAudio = new Audio('./sounds/whoosh.mp3')
let gameOverAudio = new Audio('./sounds/game-over.mp3')
let gameWin = new Audio('./sounds/wingame.mp3')
let stabAudio = new Audio('./sounds/stab.mp3')

window.addEventListener('load', () => {
    bgMusic.play() 
    bgMusic.loop = true;   
    bgMusic.volume=0.18;
    startBtn.style.display = 'block'
    restartBtn.style.display = 'none'   
    canvas.style.display = 'none'
    gameOverScreen.style.display = 'none'
    
    thorW = thorDefault.width/15
    thorH = thorDefault.height/15
    daggerW = dagger.width/4
    daggerH = dagger.height/4
    mjolnirH = mjolnirhq.height/30
    mjolnirW = mjolnirhq.width/30

    startBtn.addEventListener('click', () =>{
        start()        
    })
    restartBtn.addEventListener('click', () => {
        restart()
    })
    
})