export default function SelectionRealizer([animation, N], speed){
    let j=0, maxHiglight = true;
    const gColor="#8bc34a", rColor="#f44336", bColor='#64b5f6',
    pColor="#8e24aa",gTextColor='#9e9e9e',bTextColor="#212121";
    const arr = document.querySelectorAll('.Bar')

    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"

    //for fixing jsHint error https://stackoverflow.com/questions/58816244/debugging-eslint-warning-function-declared-in-a-loop-contains-unsafe-reference
    const maxHiglightToggle = () =>{
        maxHiglight = !maxHiglight
        return !maxHiglight //old state
    }

    for(let i=0; i<animation.length; i++){
        //at the start make them light
        arrCode[0].style.color = gTextColor
        arrCode[5].style.color = gTextColor
        arrCode[6].style.color = gTextColor

        if(animation[i][2]===1){
            setTimeout(()=>{
                [arr[animation[i][0]].style.height, arr[animation[i][1]].style.height] = [arr[animation[i][1]].style.height, arr[animation[i][0]].style.height]
                arr[animation[i][0]].style.backgroundColor = bColor
                arr[animation[i][1]].style.backgroundColor = gColor
                //
                arrCode[3].style.boxShadow = unshadow
                arrCode[3].style.color = gTextColor
                arrCode[5].style.boxShadow = unshadow
                arrCode[5].style.color = gTextColor
                arrCode[6].style.boxShadow = shadow
                arrCode[6].style.color = bTextColor
                maxHiglightToggle()
            }, i*speed)
        }
        else{ 
            if(j%2 === 0){
                setTimeout(()=>{
                    arr[animation[i][0]].style.backgroundColor = pColor
                    arr[animation[i][1]].style.backgroundColor = rColor
                    //
                    arrCode[1].style.boxShadow = shadow
                    arrCode[3].style.boxShadow = shadow
                    arrCode[3].style.color = bTextColor
                    arrCode[4].style.boxShadow = shadow
                    arrCode[4].style.color = bTextColor
                    arrCode[5].style.boxShadow = unshadow
                    arrCode[5].style.color = gTextColor
                    arrCode[6].style.boxShadow = unshadow
                    arrCode[6].style.color = gTextColor
                    if(maxHiglightToggle()){
                        arrCode[2].style.boxShadow = shadow
                        arrCode[2].style.color = bTextColor
                        maxHiglightToggle()
                    }
                }, i*speed)
            } 
            else if(j%2 === 1 && animation[i][2]==='c'){
                setTimeout(()=>{
                    arr[animation[i][0]].style.backgroundColor = pColor
                    arr[animation[i][1]].style.backgroundColor = bColor 
                    //
                    arrCode[2].style.boxShadow = unshadow
                    arrCode[2].style.color = gTextColor
                    arrCode[4].style.boxShadow = unshadow
                    arrCode[4].style.color = gTextColor
                    arrCode[5].style.boxShadow = shadow
                    arrCode[5].style.color = bTextColor
                }, i*speed)
            }
            else if(j%2 === 1 && animation[i][2]==='n'){
                setTimeout(()=>{
                    arr[animation[i][0]].style.backgroundColor = pColor
                    arr[animation[i][1]].style.backgroundColor = bColor 
                    //
                    arrCode[2].style.boxShadow = unshadow
                    arrCode[2].style.color = gTextColor
                    arrCode[4].style.boxShadow = unshadow
                    arrCode[4].style.color = gTextColor
                }, i*speed)
            }
           j++
        } 
    }
    setTimeout(()=>{
        arr[0].style.backgroundColor = gColor
        //
        arrCode[1].style.boxShadow = shadow
        arrCode[3].style.boxShadow = unshadow
        arrCode[6].style.boxShadow = shadow
        arrCode[6].style.color = bTextColor
    }, animation.length*speed)
    setTimeout(()=>{
        for(let k=0; k<7; k++){
            arrCode[k].style.boxShadow = unshadow
            arrCode[k].style.color = bTextColor
        }
        for(let k=0; k<N; k++){         //new Animation after first ani finishes set there color to initial
            arr[k].style.backgroundColor = bColor
        }
        // console.log(N)
    }, (animation.length+1)*speed)
    return ((animation.length+2)*speed)
}