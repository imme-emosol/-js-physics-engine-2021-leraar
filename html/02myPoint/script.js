const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let points = [];
let colors = ["red","green","blue","yellow","orange","purple"]

animate();

function animate(){
    context.clearRect(0,0,width,height)
    requestAnimationFrame(animate);
    if(Math.random() < 0.1){
        let pointRnd = getRandomInt(0,colors.length);
        let point = new Point(getRandomInt(0,width),getRandomInt(0,-50),getRandomInt(10,50),colors[pointRnd]);
        point.speed = pointRnd+1;
        points.push(point);
    }
    
    points.map((P,i)=>{
        //console.log(P);
        P.y += P.speed;
        P.draw(context);
        if(P.y >height){
            points.splice(i,1);
        }
    });

    for(let i = 0; i<colors.length; i++){
        context.fillStyle = colors[i];
        context.fillRect(0,20*i,width,20);
    }
}

