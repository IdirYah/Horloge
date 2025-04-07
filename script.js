const canva = document.getElementById("canvas")
const context = canva.getContext("2d")
var cx = 150
var cy = 150
function dessinAiguille(longueur,angle,thick){
    context.beginPath()
    context.moveTo(cx,cy)
    var x = cx+longueur*Math.cos(angle)
    var y = cy+longueur*Math.sin(angle)
    context.lineTo(x,y)
    context.lineWidth = thick
    context.strokeStyle = 'black'
    context.stroke()
}
function dessinHorloge(){
    context.fillStyle = 'white'
    context.fillRect(0,0,1000,1000)
    context.beginPath() 
    context.arc(cx,cy,120,0,2*Math.PI,false)
    context.lineWidth = 10
    context.strokeStyle = 'black'
    context.stroke()
    for(i=0;i<12;i++){
        context.beginPath()
        const x1 = cx+100*Math.cos(i*Math.PI/6)
        const y1 = cy+100*Math.sin(i*Math.PI/6)
        const x2 = cx+120*Math.cos(i*Math.PI/6)
        const y2 = cy+120*Math.sin(i*Math.PI/6)
        context.moveTo(x1,y1)
        context.lineTo(x2,y2)
        context.lineWidth = 5
        context.strokeStyle = 'black'
        context.stroke()
    }
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const angleHours = ((hours%12)*Math.PI)/6 - Math.PI/2
    const angleMinutes = ((minutes%60)*Math.PI)/30 - Math.PI/2
    const angleSeconds = ((seconds%60)*2*Math.PI)/60 - Math.PI/2
    dessinAiguille(50,angleHours,7)
    dessinAiguille(80,angleMinutes,5)
    dessinAiguille(100,angleSeconds,3)
    const heures = (hours<10 && hours>=0)?'0'+hours:hours
    const mins = (minutes<10 && minutes>=0)?'0'+minutes:minutes
    const secs = (seconds<10 && seconds>=0)?'0'+seconds:seconds
    const total = heures+':'+mins+':'+secs
    document.getElementById("pos").innerHTML = total
}
function init(){
    setInterval(dessinHorloge,1000)
    dessinHorloge()
}
init()
