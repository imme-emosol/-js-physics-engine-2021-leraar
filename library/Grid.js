class Grid {
    constructor(){
        context.strokeStyle = "#000000";
        //strokesHorizontal
        for(let i=0; i<height;i++){
            if(i%20 == 0){
                context.beginPath();
                if (i%100 == 0){
                    context.lineWidth = "5";
                    console.log(i,'test i')
                } else {
                    context.lineWidth = "1";
                    console.log(i,'dun')
                }
                
                context.moveTo(0,i);
                context.lineTo(width,i);
                context.stroke();
                context.closePath();
            }             

        }

        //strokesVertical
    }
   
}