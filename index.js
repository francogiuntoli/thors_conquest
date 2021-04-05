let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '5px solid brown';
canvas.style.backgroundColor = '#f0c6a3'



// The DOM of the start and the restart buttons
let gameOverScreen = document.querySelector('#gameover')
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

let intervalId = 0, isGameOver = false;
let thorX = 20, thorY = 580, thorMove = 10;
let daggerX = 30, daggerY = -35, daggerDrop = 10;
let isArrowLeft = false, isArrowRight = false;

//events
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
    ctx.drawImage(mjolnirhq, 600, 150, mjolnirhq.width/25, mjolnirhq.height/25)
}
//thor
function drawThor(){
    ctx.drawImage(thorhq, thorX, thorY, thorhq.width/15, thorhq.height/15)
}
//loki
function drawLoki(){
    ctx.drawImage(lokihq, 750, 0, lokihq.width/1.5, lokihq.height/1.5)
}
//dagger
function drawDagger(){
    
    ctx.drawImage(dagger, 50, 100, dagger.width/10, dagger.height/10)
}


//for loopin
let daggers = [
    {x: 20, y: -500},
    {x: 300, y: -50},
    {x: 600, y: -150},
    {x: 450, y: -350},
];


function thorMoving(){
    if(thorY>=453){
        if(isArrowRight && thorX+(thorhq.width/15)<canvas.width-20 ){
            
            thorX += Math.floor(thorMove/1.5)
            thorY -= Math.floor(thorMove/9)
           
            
        }
        if(isArrowLeft && thorX-10>0){
            thorX -=Math.floor(thorMove/1.5)
            thorY +=Math.floor(thorMove/9)
           
        }
    }
    // else if(thorY<=452 && thorY>=306){
    //     if(isArrowLeft && thorX-10>0){
            
    //         thorX -= Math.floor(thorMove/1.5)
    //         thorY -= Math.floor(thorMove/9)
    //         console.log(thorY)
    //         console.log(thorX)
    //         console.log("cond3")
            
    //     }
    //     if(isArrowRight && thorX+(thorhq.width/15)<canvas.width-20 ){
    //         thorX +=Math.floor(thorMove/1.5)
    //         thorY +=Math.floor(thorMove/9)
    //         console.log(thorY)
    //         console.log(thorX)
    //         console.log("cond4")
    //     }
    // }else if(thorY<=305 && thorY>0){

    //     if(isArrowRight && thorX+(thorhq.width/15)<canvas.width-20 ){
            
    //         thorX += Math.floor(thorMove/1.5)
    //         thorY -= Math.floor(thorMove/9)
    //         console.log(thorY)
    //         console.log(thorX)
    //         console.log("cond5")
            
    //     }
    //     if(isArrowLeft && thorX-10>0){
    //         thorX -=Math.floor(thorMove/1.5)
    //         thorY +=Math.floor(thorMove/9)
    //         console.log(thorY)
    //         console.log(thorX)
    //         console.log("cond6")
    //     }
    // }
}

function daggerMoving(){
    for(let i=0; i< daggers.length; i++) {
        ctx.drawImage(dagger, daggers[i].x, daggers[i].y, dagger.width/4, dagger.height/4)
        daggers[i].y += 13
        
        // making an infinite loop for the pipes
        if (daggers[i].y >= canvas.height) {
            daggers[i] = {
                x: Math.floor(Math.random()*canvas.width), 
                y: -Math.floor(Math.random()*canvas.height)
            }
        }
        
        //collision
        if(thorX + (thorhq.width/15) >= daggers[i].x && thorX <= daggers[i].x + (dagger.width/5) && thorY <= daggers[i].y + (dagger.height/5) && thorY+(thorhq.height/15) >= daggers[i].y ){
            stabAudio.play();
            isGameOver = true;
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
    }
    else {
        intervalId = requestAnimationFrame(animate)
    }
    
}





//screens
function start(){
    
    
    splashScreen.style.display = 'none'
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    mainMenuBtn.style.display = 'block'
    animate()
}
function mainMenu() {
    canvas.style.display = 'none'
    splashScreen.style.display = 'block'
    startBtn.style.display = 'block'   
    restartBtn.style.display = 'none'
    mainMenuBtn.style.display = 'none'
    gameOverScreen.style.display = 'none'
    isGameOver = false;
    thorX = 20;
    thorY= 580;
    score = 0;
    
}
function gameOver() {
    canvas.style.display = 'none'
    restartBtn.style.display = 'block'
    mainMenuBtn.style.display = 'block'
    isGameOver = false;
    thorX = 20;
    thorY= 580;
    score = 0;
    
}



// let gameOverAudio = new Audio('./game-over.mp3')
let stabAudio = new Audio('./stab.mp3')
window.addEventListener('load', () => {
    startBtn.style.display = 'block'
    restartBtn.style.display = 'none'   
    mainMenuBtn.style.display = 'none'   
    canvas.style.display = 'none'
    gameOverScreen.style.display = 'none'
    
    startBtn.addEventListener('click', () =>{
         
        start()
        
    })
    restartBtn.addEventListener('click', () => {
        gameOver()
    })
    mainMenuBtn.addEventListener('click', () => {
        mainMenu()
    })
})