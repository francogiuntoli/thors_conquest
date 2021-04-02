let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '5px solid brown';
canvas.style.backgroundColor = '#D6B471'





let mjolnirhq = new Image();
mjolnirhq.src = './img/mjolnir-hq.png'

let thorhq = new Image();
thorhq.src = './img/thor-hq.png'

let lokihq = new Image();
lokihq.src = './img/loki.png'







function draw(){
   
    
    ctx.drawImage(mjolnirhq, 600, 150, mjolnirhq.width/25, mjolnirhq.height/25)
    

    //floor level 0 (l to r)
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


    //floor level 1 (r to l)
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

    //floor level 2 (l to r)
    ctx.beginPath()
    ctx.fillStyle = '#a86832'
    ctx.strokeStyle = 'brown'
    ctx.moveTo(180, canvas.height-460)
    ctx.lineTo(canvas.width, canvas.height-610)
    ctx.lineTo(canvas.width, canvas.height-350)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()




    ctx.drawImage(thorhq, 20, 580, thorhq.width/15, thorhq.height/15)
    ctx.drawImage(lokihq, 750, 0, lokihq.width/1.5, lokihq.height/1.5)
    
   
}





window.addEventListener('load', () => {
    draw()
})