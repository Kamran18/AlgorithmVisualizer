export default function InsertionRealizer([animation, N], speed){
    const gColor="#8bc34a", rColor="#f44336", bColor='#64b5f6',
    gTextColor='#9e9e9e',bTextColor="#212121";
    const arr = document.querySelectorAll('.Bar')

    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    arr[0].style.backgroundColor = gColor
    //
    arrCode[0].style.color = gTextColor
    arrCode[4].style.color = gTextColor
    arrCode[5].style.color = gTextColor
    for(let i=1; i<animation.length; i++){
        if(animation[i][2] === 'g'){
            setTimeout(()=>{
                arr[animation[i][0]].style.backgroundColor = gColor
                arr[animation[i][1]].style.backgroundColor = gColor
                //
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
                arrCode[4].style.boxShadow = unshadow
                arrCode[4].style.color = gTextColor
                if(animation[i][3] === 'e'){
                    arrCode[2].style.boxShadow = unshadow
                    arrCode[2].style.color = gTextColor
                    arrCode[5].style.boxShadow = shadow
                    arrCode[5].style.color = bTextColor
                }
                if(i === animation.length-1){
                    for(let k=0; k<6; k++){
                        arrCode[k].style.boxShadow = unshadow
                        arrCode[k].style.color = bTextColor
                    }
                }
            }, i*speed)
        }
        else if(animation[i][2] === 'r'){
                setTimeout(()=>{
                    arr[animation[i][0]].style.backgroundColor = rColor
                    arr[animation[i][1]].style.backgroundColor = rColor
                    //
                    arrCode[1].style.boxShadow = shadow
                    arrCode[2].style.boxShadow = shadow
                    arrCode[2].style.color = bTextColor
                    arrCode[3].style.boxShadow = shadow
                    arrCode[3].style.color = bTextColor
                    arrCode[5].style.boxShadow = unshadow
                    arrCode[5].style.color = gTextColor
                }, i*speed)
            } 
        else if(animation[i][2] === 's'){
                setTimeout(()=>{
                    [arr[animation[i][0]].style.height, arr[animation[i][1]].style.height] = [arr[animation[i][1]].style.height, arr[animation[i][0]].style.height]
                   //
                    arrCode[4].style.boxShadow = shadow
                    arrCode[4].style.color = bTextColor
                }, i*speed)
            }
    }
    setTimeout(() => {
        for(let k=0; k<N; k++){         //new Animation after first ani finishes set there color to initial
            arr[k].style.backgroundColor = bColor
        }
    }, (animation.length+1)*speed)
    return ((animation.length+1)*speed)
}