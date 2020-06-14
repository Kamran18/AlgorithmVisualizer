export default function QuickRealizer([animation, N], speed){
    const gColor="#8bc34a", rColor="#f44336", bColor="#64b5f6",
    iColor="#3949ab", gTextColor='#757575', bTextColor="#212121"; 
    const arr = document.querySelectorAll('.Bar')

    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"
    let one=1
    // arrCode[2].style.boxShadow = unshadow
    // arrCode[2].style.color = gTextColor
    for(let i=0; i<animation.length; i++){
        //
        for(let k=0; k<10; k++){
            arrCode[k].style.color = gTextColor
        }
        if(animation[i][0] === 'g'){
            setTimeout(()=>{
                arr[animation[i][1]].style.backgroundColor = gColor
                if(animation[i][2] === 'a'){
                    arrCode[2].style.boxShadow = unshadow
                    arrCode[2].style.color = gTextColor
                }
                else{
                    arrCode[2].style.boxShadow = shadow
                    arrCode[2].style.color = bTextColor
                }
            }, i*speed)
        }
        else if(animation[i][0] === 'r'){
                setTimeout(()=>{
                    arr[animation[i][1]].style.backgroundColor = rColor
                    //
                    arrCode[3].style.boxShadow = shadow
                    arrCode[3].style.color = bTextColor
                }, i*speed)
            } 
        else if(animation[i][0] === 'ir'){
                setTimeout(()=>{
                    arr[animation[i][1]].style.backgroundColor = iColor
                    arr[animation[i][2]].style.backgroundColor = rColor
                    //
                    arrCode[4].style.boxShadow = shadow
                    arrCode[4].style.color = bTextColor
                    arrCode[6].style.boxShadow = unshadow
                    arrCode[6].style.color = gTextColor
                }, i*speed)
            }
        else if(animation[i][0] === 's'){
            setTimeout(()=>{
                [arr[animation[i][1]].style.height, arr[animation[i][2]].style.height] = [arr[animation[i][2]].style.height, arr[animation[i][1]].style.height]
                //
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
                arrCode[5].style.boxShadow = shadow
                arrCode[5].style.color = bTextColor
            }, i*speed)
        }
        else if(animation[i][0] === 'b'){
            setTimeout(()=>{
                arr[animation[i][1]].style.backgroundColor = bColor
                arr[animation[i][2]].style.backgroundColor = bColor
                //
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
                arrCode[5].style.boxShadow = unshadow
                arrCode[5].style.color = gTextColor
                arrCode[6].style.boxShadow = shadow
                arrCode[6].style.color = bTextColor
            }, i*speed)
        } 
        else if(animation[i][0] === 'gb'){
            setTimeout(()=>{
                arr[animation[i][2]].style.backgroundColor = bColor
                arr[animation[i][1]].style.backgroundColor = gColor
                //
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
                arrCode[6].style.boxShadow = unshadow
                arrCode[6].style.color = gTextColor
                if(animation[i][3] === 'a'){
                    [arr[animation[i][1]].style.height, arr[animation[i][2]].style.height] = [arr[animation[i][2]].style.height, arr[animation[i][1]].style.height]
                    arrCode[7].style.boxShadow = unshadow
                    arrCode[7].style.color = gTextColor
                }
                else{
                    arrCode[7].style.boxShadow = shadow
                    arrCode[7].style.color = bTextColor
                }
            }, i*speed)
        }
        //
        else if(animation[i][0] === 'start'){
            setTimeout(()=>{
                if(one===1){
                    arrCode[1].style.boxShadow = shadow
                    arrCode[1].style.color = bTextColor
                    one = 0
                }
                else{
                    arrCode[1].style.boxShadow = unshadow
                    arrCode[1].style.color = gTextColor
                    one = 1 
                }
            }, i*speed)
        }
        else if(animation[i][0] === 'quick'){
            setTimeout(()=>{
                if(animation[i][1] === 'n'){
                    arrCode[animation[i][2]].style.boxShadow = shadow
                    arrCode[animation[i][2]].style.color = bTextColor
                }
                else{
                    arrCode[animation[i][2]].style.boxShadow = unshadow
                    arrCode[animation[i][2]].style.color = gTextColor
                }
            }, i*speed)
        }
    }
    setTimeout(()=>{
        for(let k=0; k<10; k++){
            arrCode[k].style.color = bTextColor
        }
    }, animation.length*speed)
    
    setTimeout(() => {
        for(let k=0; k<N; k++){         //new Animation after first ani finishes set there color to initial
            arr[k].style.backgroundColor = bColor
        }
    }, (animation.length+1)*speed)
    return ((animation.length+1)*speed)
}