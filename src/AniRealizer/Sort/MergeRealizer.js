export default function MergeRealizer([animation, N], speed){
    const gColor=   ['#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32'],
    // rColor=   "#f44336",
    bColor=   [['#8c9eff','#82b1ff'], ['#536dfe','#448aff'], ['#3d5afe','#2979ff'],
                    ['#304ffe','#2962ff'], ['#3f51b5','#2196f3'], ['#3949ab','#1e88e5'],
                    ['#303f9f','#1976d2'], ['#283593','#1565c0']],
    defaultColor = '#64b5f6'
    const arr = document.querySelectorAll('.Bar')

    for(let i=0; i<animation.length; i++){
        if(animation[i][0] === 'to'){
            setTimeout(()=>{
                for(let j=animation[i][2]; j<animation[i][3]; j++)
                    arr[j].style.backgroundColor = bColor[animation[i][1]][0]
                for(let j=animation[i][3]; j<=animation[i][4]; j++)
                    arr[j].style.backgroundColor = bColor[animation[i][1]][1]
            }, i*speed)
        }
        else if(animation[i][0] === 'to1'){
            setTimeout(()=>{
                arr[animation[i][2]].style.backgroundColor = gColor[7-animation[i][1]]
            }, i*speed)
        }
        else if(animation[i][0] === 'g'){
                setTimeout(()=>{
                    // arr[animation[i][4]].style.backgroundColor = bColor[animation[i][1]][1]
                    // arr[animation[i][5]].style.backgroundColor = bColor[animation[i][1]][1]
                    arr[animation[i][2]].style.backgroundColor = gColor[7-animation[i][1]]
                    arr[animation[i][2]].style.height = animation[i][3]*4+'px'
                }, i*speed)
            }
    }

    setTimeout(() => {
        for(let k=0; k<N; k++){         //new Animation after first ani finishes set there color to initial
            arr[k].style.backgroundColor = defaultColor
        }
    }, animation.length*speed)
    return (animation.length*speed)
}