export default (num) => {
    let AnimationArr = []
    for(let i=0; i<num.length; i++){
        AnimationArr.push(['g', i])//green
        AnimationArr.push(['r', i])//red
        AnimationArr.push(['w', i])//white ptrBox
    }
    return [AnimationArr, num.length]
}