var mouseEvent="empty"
var lastPositionOfX, lastPositionOfY
Canvas=document.getElementById("myCanvas")

ctx= Canvas.getContext("2d")
var color="#b1b7ba"
var widthOfLine=2

Canvas.addEventListener("mousedown",MyMousedown)
function MyMousedown(e)
{
    mouseEvent="mouseDown"
}

Canvas.addEventListener("mouseup",MyMouseup)
function MyMouseup(e)
{
    mouseEvent="mouseup"
}

Canvas.addEventListener("mouseleave",MyMouseLeave)
function MyMouseLeave(e)
{
    mouseEvent="mouseleave"
}

Canvas.addEventListener("mousemove",MyMouseMove)
function MyMouseMove(e)
{
    currentPositionOfMouseX=e.clientX-Canvas.offsetLeft
    currentPositionOfMouseY=e.clientY-Canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine
        ctx.moveTo(lastPositionOfX,lastPositionOfY)
        ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY)
        ctx.stroke()
    }
    lastPositionOfX=currentPositionOfMouseX
    lastPositionOfY=currentPositionOfMouseY
}