const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d')
const brushWidth=document.querySelector('#brush-width')
const brushcolor=document.querySelector('#color-picker')
const brush=document.querySelector('.brush')
const eraser=document.querySelector('.eraser')
const clear=document.querySelector('.clear')
const save=document.querySelector('.save')




let IdDrawing=false
let cuttentWidth=5
let currentcolor=''

window.addEventListener('load',()=>{
    canvas.width=canvas.offsetWidth
    canvas.height=canvas.offsetHeight
    ctx.fillStyle='white'
    ctx.fillRect(0,0,canvas.width,canvas.height)
})

function startDraw(){
    isDrawing=true
    ctx.beginPath()
    ctx.lineWidth=cuttentWidth
}


function drawing(e){
    if(!isDrawing)return
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    ctx.strokeStyle=`${currentcolor}`
}

function endDraw(){
    isDrawing=false
}

canvas.addEventListener('mousedown',startDraw)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', endDraw)


brushWidth.addEventListener('change',()=>{
    cuttentWidth=brushWidth.value
})

brushcolor.addEventListener('change',()=>{
    currentcolor=brushcolor.value
})

eraser.addEventListener('click',()=>{
    eraser.classList.add('active')
    brush.classList.remove('active')
    currentcolor='white'
})

brush.addEventListener('click',()=>{
    brush.classList.add('active')
    eraser.classList.remove('active')
    currentcolor=brushcolor.value
})



clear.addEventListener('click',()=>{
    // ctx.fillStyle='white'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    

})

save.addEventListener('click',()=>{
    let link=document.createElement('a')
    link.download=`${Date.now()}.jpg`
    link.href=canvas.toDataURL()
    link.click()
})