export default (num) => {
    //Delete No. 
    const defaultDeleteNum = num[Math.floor(Math.random()*num.length)]
    let DeleteNum = Number(prompt(`Enter the number you want to Delete. On click "Cancel" random number will be taken`,[defaultDeleteNum]))
    DeleteNum = Number(DeleteNum) ? DeleteNum : defaultDeleteNum
    // console.log(DeleteNum)//

    const Index = num.indexOf(DeleteNum)
    // console.log(Index,'popo')//

    let AnimationArr = []
    let N = Index
    if(Index === -1)//if no. is not present
            N = num.length

    for(let i=0; i<N; i++){
        AnimationArr.push(['r', i])//red color to pteBox
        AnimationArr.push(['h', i])//default color of ptrBox
        AnimationArr.push(['rw', i])//red the pointer
        AnimationArr.push(['w', i])//white the pointer
    }
    if(Index === -1)                               //number not present
        AnimationArr.push(['n']) 
    else{                                          //on successful searched(no. is present)
        AnimationArr.push(['r', Index])//red
        AnimationArr.push(['b', Index-1])// prev Node
    }
    
    return [AnimationArr, Index, num.length]//np => element not present
}