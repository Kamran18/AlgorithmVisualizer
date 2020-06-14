export default (num) => {
    //Search No. 
    const defaultSearchNum = num[Math.floor(Math.random()*num.length)]
    let searchNum = Number(prompt(`Enter the number you want to search. On click "Cancel" random number will be taken`,[defaultSearchNum]))
    searchNum = Number(searchNum) ? searchNum : defaultSearchNum
    console.log(searchNum)//

    const Index = num.indexOf(searchNum)
    console.log(Index,'popo')//

    let AnimationArr = []
    let N = Index
    if(Index === -1)
            N = num.length

    for(let i=0; i<N; i++){
        AnimationArr.push(['r', i])//red color to pteBox
        AnimationArr.push(['h', i])//default color of ptrBox
        AnimationArr.push(['rw', i])//red the pointer
        AnimationArr.push(['w', i])//white the pointer
    }
    if(Index !== -1){
        AnimationArr.push(['r', Index])//red
        AnimationArr.push(['g', Index])//green
    }
    else
        AnimationArr.push(['l'])//for paper last item animation
    return [AnimationArr, num.length]
}