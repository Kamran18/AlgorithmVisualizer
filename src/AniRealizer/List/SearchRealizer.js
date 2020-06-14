export default function SearchRealizer([animation, N], speed){
    //Box styling constants
    const gColor="#8bc34a", rColor="#f44336", hColor='#00796b',wColor='white',
    gTextColor='#9e9e9e',bTextColor="#212121";
    const bar = document.querySelectorAll('.Bar'),
    Head = document.getElementById('Head')

    //Paper styling constants
    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    //Head box + Paper animation 
    for(let i=0; i<2; i++){//head animation
        setTimeout(()=>{
            if(i===0){
                Head.style.borderColor = rColor
                //making all paper boxes grey
                for(let j=0;j<7;j++){
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

    //Box + Paper animation 
    for(let i=2; i<animation.length+2; i++){//box animation
        setTimeout(()=>{
            if(animation[i-2][0]==='g'){
                bar[animation[i-2][1]].style.backgroundColor = gColor
                // 
                arrCode[4].style.boxShadow = shadow
                arrCode[4].style.color = bTextColor
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
            }
            else if(animation[i-2][0]==='r'){
                bar[animation[i-2][1]].style.backgroundColor = rColor
                //
                arrCode[2].style.boxShadow = shadow
                arrCode[2].style.color = bTextColor
                arrCode[3].style.boxShadow = shadow
                arrCode[3].style.color = bTextColor
            }
            else if(animation[i-2][0]==='h'){
                bar[animation[i-2][1]].style.backgroundColor = hColor
                //
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
            }
            else if(animation[i-2][0]==='rw'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = rColor
                bar[animation[i-2][1]].lastElementChild.style.color = wColor
                // 
                arrCode[5].style.boxShadow = shadow
                arrCode[5].style.color = bTextColor
            }
            else if(animation[i-2][0]==='w'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = wColor
                bar[animation[i-2][1]].lastElementChild.style.color = hColor
                // 
                arrCode[5].style.boxShadow = unshadow
                arrCode[5].style.color = gTextColor
            }
            //
            else if(animation[i-2][0]==='l'){
                arrCode[6].style.boxShadow = shadow
                arrCode[6].style.color = bTextColor
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
            }

        }, i*speed)
    }
    //Returnig back to original state
    setTimeout(()=>{
        for(let j=0;j<7;j++){
            arrCode[j].style.boxShadow = unshadow
            arrCode[j].style.color = bTextColor
        }
        for(let j=0; j<N; j++)
            bar[j].style.backgroundColor = hColor
    }, (animation.length+2+5)*speed)//adding 5 for seeing final result before reset
    return ((animation.length+2+5)*speed)
}