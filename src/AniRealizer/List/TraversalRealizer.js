export default function TraversalRealizer([animation, N], speed){
    const gColor="#8bc34a", rColor="#f44336", hColor='#00796b',wColor='white',
    gTextColor='#9e9e9e',bTextColor="#212121";
    const bar = document.querySelectorAll('.Bar'),
    Head = document.getElementById('Head')

    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    for(let i=0; i<2; i++){//head animation
        setTimeout(()=>{
            if(i===0){
                Head.style.borderColor = rColor
                //
                for(let j=0;j<5;j++){
                    arrCode[j].style.boxShadow = unshadow
                    arrCode[j].style.color = gTextColor
                }
                arrCode[1].style.boxShadow = shadow
                arrCode[1].style.color = bTextColor
            }
            else{
                Head.style.borderColor = hColor
                //
                arrCode[1].style.boxShadow = unshadow
                arrCode[1].style.color = gTextColor
            }
        }, i*speed)
    }
    for(let i=2; i<animation.length+2; i++){//box animation
        setTimeout(()=>{
            if(animation[i-2][0]==='g'){
                bar[animation[i-2][1]].style.backgroundColor = gColor
                // 
                arrCode[2].style.boxShadow = shadow
                arrCode[2].style.color = bTextColor
                arrCode[3].style.boxShadow = shadow
                arrCode[3].style.color = bTextColor
            }
            else if(animation[i-2][0]==='r'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = rColor
                bar[animation[i-2][1]].lastElementChild.style.color = wColor
                // 
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
                arrCode[4].style.boxShadow = shadow
                arrCode[4].style.color = bTextColor
            }
            else if(animation[i-2][0]==='w'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = wColor
                bar[animation[i-2][1]].lastElementChild.style.color = hColor
                //    
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
            }
        }, i*speed)
    }
    setTimeout(()=>{
        for(let j=0;j<5;j++){
            arrCode[j].style.boxShadow = unshadow
            arrCode[j].style.color = bTextColor
        }
        for(let j=0; j<N; j++)
            bar[j].style.backgroundColor = hColor
    }, (animation.length+2+5)*speed)//adding 5 for seeing final result before reset
    return ((animation.length+3+5)*speed)
}