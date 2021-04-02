let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '5px solid brown';
canvas.style.backgroundColor = '#f0c6a3'



// The DOM of the start and the restart buttons
let startBtn = document.querySelector('#start')
let mainMenuBtn = document.querySelector('#mainmenu')
let splashScreen = document.querySelector('#splash')
let restartBtn = document.querySelector('#restart')



let mjolnirhq = new Image();
mjolnirhq.src = './img/mjolnir-hq.png'

let thorhq = new Image();
thorhq.src = './img/thor-hq.png'

let lokihq = new Image();
lokihq.src = './img/loki.png'

let dagger = new Image();
dagger.src = './img/dagger.png'

let intervalId = 0, isGameOver = false
let score = 0;
let thorX = 20, thorY = 580, thorMove = 5;
let incrX = 5, incrY = 5;
let isArrowLeft = false, isArrowRight = false;

document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.code == 'ArrowRight'){
        isArrowRight = true
        isArrowLeft = false
    }
    else if (event.code == 'ArrowLeft') {
        isArrowRight = false
        isArrowLeft = true
    }
})
document.addEventListener('keyup', () => {
    isArrowRight = false
    isArrowLeft = false
})




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
    ctx.drawImage(mjolnirhq, 600, 150, mjolnirhq.width/25, mjolnirhq.height/25)
}
//thor
function drawThor(){
    ctx.drawImage(thorhq, 20, 580, thorhq.width/15, thorhq.height/15)
}
//loki
function drawLoki(){
    ctx.drawImage(lokihq, 750, 0, lokihq.width/1.5, lokihq.height/1.5)
}
//dagger
function drawDagger(){
    
    ctx.drawImage(dagger, 50, 100, dagger.width/4, dagger.height/4)
}






function animate(){
    
    
    drawMjolnir()
    drawHill1()
    drawHill2()
    drawHill3()
    
    
    drawThor()
    
    
    drawDagger()
    
    
    drawLoki() 
    
}


function start(){
    
    
    splashScreen.style.display = 'none'
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'block'
    animate()
}

function mainMenu() {
    canvas.style.display = 'none'
    splashScreen.style.display = 'block'

    startBtn.style.display = 'block'   
    restartBtn.style.display = 'none'
    isGameOver = false;
    thorX = 20;
    thorY= 580;
    score = 0;
    
}




window.addEventListener('load', () => {
    startBtn.style.display = 'block'
    restartBtn.style.display = 'none'   
    canvas.style.display = 'none'
    
    startBtn.addEventListener('click', () =>{
         
        start()
        
    })
    restartBtn.addEventListener('click', () => {
        mainMenu()
    })
})