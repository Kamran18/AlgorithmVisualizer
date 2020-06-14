export default function BubbleRealizer([animation, N], speed){
    let j=0;
    const gColor="#8bc34a", rColor="#f44336", bColor='#64b5f6'
    ,gTextColor='#757575',bTextColor="#212121"; 
    const arrBar = document.querySelectorAll('.Bar')

    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    for(let i=0; i<animation.length; i++){
        //at the start make them light
        arrCode[0].style.color = gTextColor
        arrCode[3].style.color = gTextColor
        arrCode[4].style.color = gTextColor
        if(animation[i].length === 1){
            setTimeout(()=>{
                arrBar[animation[i][0]].style.backgroundColor = gColor
                //at the end of an iteration
                arrCode[2].style.boxShadow = unshadow
                arrCode[2].style.color = gTextColor
                if(i === animation.length-1){
                    //outer for loop unshadow after finishing sorting
                    arrCode[1].style.boxShadow = unshadow
                    //inner for loop unshadow after finishing sorting
                    arrCode[2].style.boxShadow = unshadow
                    arrCode[2].style.color = bTextColor
                    //at the end make them dark
                    arrCode[0].style.color = bTextColor
                    arrCode[3].style.color = bTextColor
                    arrCode[4].style.color = bTextColor
                }
            }, i*speed)
        }
        else{ 
            if(j%3 === 0){
                setTimeout(()=>{
                    arrBar[animation[i][0]].style.backgroundColor = rColor
                    arrBar[animation[i][1]].style.backgroundColor = rColor
                    //outer for loop shadow from start
                    arrCode[1].style.boxShadow = shadow
                    arrCode[1].style.color = bTextColor
                    //inner for loop shadow from start
                    arrCode[2].style.boxShadow = shadow
                    arrCode[2].style.color = bTextColor
                    //shadow when compare
                    arrCode[3].style.boxShadow = shadow
                    arrCode[3].style.color = bTextColor
                }, i*speed)
            } 
            if(j%3 === 1 && animation[i][2] === 's'){
                setTimeout(()=>{
                    [arrBar[animation[i][0]].style.height, arrBar[animation[i][1]].style.height] = [arrBar[animation[i][1]].style.height, arrBar[animation[i][0]].style.height]
                    //unshadow after compare is true
                    arrCode[3].style.boxShadow = unshadow
                    arrCode[3].style.color = gTextColor
                    //shadow when change style after comparition
                    arrCode[4].style.boxShadow = shadow
                    arrCode[4].style.color = bTextColor
                }, i*speed)
            }
            if(j%3 === 2){
                setTimeout(()=>{
                    arrBar[animation[i][0]].style.backgroundColor = bColor
                    arrBar[animation[i][1]].style.backgroundColor = bColor
                    //unshadow after compare is false
                    arrCode[3].style.boxShadow = unshadow
                    arrCode[3].style.color = gTextColor
                    //unshadow after changing style
                    arrCode[4].style.boxShadow = unshadow
                    arrCode[4].style.color = gTextColor
                }, i*speed)
            }
           j++
        } 
    }
    setTimeout(() => {
        for(let k=0; k<N; k++){         //new Animation after first ani finishes set there color to initial
            arrBar[k].style.backgroundColor = bColor
        }
    }, animation.length*speed)
    return (animation.length*speed)
}