
// const canvas = document.querySelector('.canvas')
// const ctx = canvas.getContext('2d')
 
// ctx.fillStyle = 'rgb(0, 155, 100)'
// ctx.fillRect(100, 100, 50, 50)

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
 
// ctx.fillStyle = 'rgb(0, 155, 100)'
// ctx.fillRect(100, 100, 20, 20)


const crlManu = ['white','red','pink','yellow','orange','blue']

const navs = document.querySelectorAll('nav')


const range = document.querySelector('.range')

let size = 20

range.addEventListener('input', ()=>{
        size = range.value
        console.log('hello')
})

    for(let i = 0; i < navs.length; i++){
navs[i].addEventListener('click',()=>{

    canvas.addEventListener('mousedown', ()=>{
canvas.addEventListener('mousemove', (el)=>{

    let mouseX = el.offsetX
    let mouseY = el.offsetY
    ctx.fillStyle = crlManu[i]
    ctx.fillRect (mouseX,mouseY,size,size)
})
})  
    })
}


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(20, 200);
ctx.stroke();;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(200, 20);
ctx.lineTo(20, 200);
ctx.stroke();;