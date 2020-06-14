export default function DeletionRealizer([animation, numPresent, N], speed){
    //Box styling constants
    const gColor="#8bc34a", rColor="#f44336", hColor='#00796b',wColor='white',bColor='#03a9f4',
    gTextColor='#9e9e9e',bTextColor="#212121";
    const bar = document.querySelectorAll('.Bar'),
    Head = document.getElementById('Head'),
    Temp = Head.nextElementSibling

    //Paper styling constants
    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    const Al = animation.length
    //Head box + Paper animation 
    for(let i=0; i<2; i++){//head animation
        setTimeout(()=>{
            if(i===0){
                Head.style.borderColor = rColor
                //making all paper boxes grey
                for(let j=0;j<6;j++){
                    arrCode[j].style.boxShadow = unshadow
                    arrCode[j].style.color = gTextColor
                }
                arrCode[1].style.boxShadow = shadow
                arrCode[1].style.color = bTextColor
            }
            else{
                Head.style.borderColor = hColor
            }
        }, i*speed)
    }

    //Box + Paper animation 
    for(let i=2; i<Al+2; i++){//box animation
        setTimeout(()=>{
            if(animation[i-2][0]==='b'){            //consider -1 case also
                if(animation[i-2][1] > -1)//when node is other than first one
                    bar[animation[i-2][1]].style.backgroundColor = bColor
                else//first node
                    Head.style.borderColor = bColor
                //
                arrCode[2].style.boxShadow = shadow
                arrCode[2].style.color = bTextColor

            }
            else if(animation[i-2][0]==='r'){
                bar[animation[i-2][1]].style.backgroundColor = rColor
                //
            }
            else if(animation[i-2][0]==='h'){
                bar[animation[i-2][1]].style.backgroundColor = hColor
                //
            }
            else if(animation[i-2][0]==='rw'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = rColor
                bar[animation[i-2][1]].lastElementChild.style.color = wColor
                // 
            }
            else if(animation[i-2][0]==='w'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = wColor
                bar[animation[i-2][1]].lastElementChild.style.color = hColor
                // 
            }
            //
            else if(animation[i-2][0]==='n'){
                
                arrCode[1].style.boxShadow = unshadow
                arrCode[1].style.color = gTextColor
                arrCode[2].style.boxShadow = shadow
                arrCode[2].style.color = bTextColor
            }

        }, i*speed)
    }

    if(animation[Al-1][0] !== 'n'){//when node is present
        setTimeout(()=>{
            if(animation[Al-1][1] !== -1)//when node is other than first one
                Temp.innerText = bar[animation[Al-1][1]].lastElementChild.innerText
            else//first node
                Temp.innerText = 'A'

            Temp.style.borderColor = hColor
            Temp.style.color = hColor
            //
            arrCode[2].style.boxShadow = unshadow
            arrCode[2].style.color = gTextColor
            arrCode[3].style.boxShadow = shadow
            arrCode[3].style.color = bTextColor
        },(Al+3)*speed)
        setTimeout(()=>{
            if(animation[Al-1][1] !== -1)
                bar[animation[Al-1][1]].lastElementChild.style.backgroundColor = gColor
            else
                Head.style.backgroundColor = gColor
                
            bar[animation[Al-1][1]+1].lastElementChild.style.backgroundColor = gColor
            bar[animation[Al-1][1]+1].lastElementChild.style.color = wColor
            //
            arrCode[3].style.boxShadow = unshadow
            arrCode[3].style.color = gTextColor
            arrCode[4].style.boxShadow = shadow
            arrCode[4].style.color = bTextColor
        },(Al+4)*speed)
        setTimeout(()=>{
            if(animation[Al-1][1] !== -1){
                bar[animation[Al-1][1]].lastElementChild.innerText = bar[animation[Al-1][1]+1].lastElementChild.innerText
                bar[animation[Al-1][1]].lastElementChild.style.color = wColor
            }
            else{
                Head.innerText = bar[0].lastElementChild.innerText
                Head.style.color = wColor
            }
            //
            arrCode[4].style.boxShadow = shadow
            arrCode[4].style.color = bTextColor
        },(Al+5)*speed)
        setTimeout(()=>{
            Temp.style.borderColor = wColor
            Temp.style.color = wColor
            // bar[animation[Al-1][1]+1].style.backgroundColor = '#000'
            bar[animation[Al-1][1]+1].parentElement.style.filter = 'blur(100px)'
            if(animation[Al-1][1]+1){//when node is other than first one
                bar[animation[Al-1][1]].lastElementChild.style.color = hColor
                bar[animation[Al-1][1]].lastElementChild.style.backgroundColor = wColor
                bar[animation[Al-1][1]].style.backgroundColor = hColor
            }
            else{//first node
                Head.style.color = hColor
                Head.style.borderColor = hColor
                Head.style.backgroundColor = wColor
            }
            //
            arrCode[4].style.boxShadow = unshadow
            arrCode[4].style.color = gTextColor
            arrCode[5].style.boxShadow = shadow
            arrCode[5].style.color = bTextColor
        },(Al+6)*speed)
    }
    //Returnig back to original state PAPER
    const time = (animation[Al-1][0] === 'n') ? 2+5 : 7+5//adding 5 for seeing final result before reset
    setTimeout(()=>{
        for(let j=0;j<6;j++){
            arrCode[j].style.boxShadow = unshadow
            arrCode[j].style.color = bTextColor
        }
        for(let k=0; k<N; k++)
            bar[k].style.backgroundColor = hColor
        if(numPresent !== -1){
            bar[animation[Al-1][1]+1].lastElementChild.style.color = hColor//deleted node back to normal
            bar[animation[Al-1][1]+1].lastElementChild.style.backgroundColor = wColor
            bar[animation[Al-1][1]+1].parentElement.style.filter = 'blur(0)'
            if(animation[Al-1][1] !== -1)
                bar[animation[Al-1][1]].lastElementChild.innerText = bar[animation[Al-1][1]+1].previousElementSibling.innerText
            else
                Head.innerText = 'A'
        }
    }, ((Al + time) * speed))
    return (((Al + time) * speed)+200)//
}