class GraphBackground {
    constructor(){
        context.strokeStyle = "rgba(0,0,200,0.2)";
        //strokesHorizontal
        for(let i=0; i<height;i++){
            if(i%20 == 0){
                context.beginPath();
                if (i%100 == 0){
                    context.lineWidth = "5";
                } else {
                    context.lineWidth = "1";
                }
                
                context.moveTo(0,i);
                context.lineTo(width,i);
                context.stroke();
                context.closePath();
            }             

        }

        //strokesVertical
        for(let i=0; i<width;i++){
            if(i%20 == 0){
                context.beginPath();
                if (i%100 == 0){
                    context.lineWidth = "5";
                } else {
                    context.lineWidth = "1";
                }
                
                context.moveTo(i,0);
                context.lineTo(i,height);
                context.stroke();
                context.closePath();
            }             

        }
    }
   
}