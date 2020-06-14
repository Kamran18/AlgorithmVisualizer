export default function getAnimation(Array){
    const AnimationArr = []
    let Arr = Array.slice()
    BubbleSort(Arr, AnimationArr)
    return [AnimationArr, Arr.length]
}

const BubbleSort = (Arr, AnimationArr) => {
    const n = Arr.length
    let i
    for(i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            AnimationArr.push([j, j+1])
            if(Arr[j] > Arr[j+1]){
                [Arr[j], Arr[j+1]] = [Arr[j+1], Arr[j]]
                AnimationArr.push([j+1, j, 's'])
            }
            else{
                AnimationArr.push([j, j+1, 'n'])//style when no swap
            }
            AnimationArr.push([j, j+1])
        }
        AnimationArr.push([n-i-1])
    }
    AnimationArr.push([n-i-1])
}

