export default function getAnimation(Array){
    let AnimationArr = []
    let Arr = Array.slice()
    InsertionSort(Arr, AnimationArr)
    return [AnimationArr, Arr.length]
}

const InsertionSort = (Arr, AnimationArr) => {
    const n = Arr.length;
    AnimationArr.push([0])//first num is already sorted
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j>0; j--){
            AnimationArr.push([j, j-1, "r"])//red
            if(Arr[j] < Arr[j-1]){
                [Arr[j], Arr[j-1]] = [Arr[j-1], Arr[j]]
                AnimationArr.push([j, j-1, "s"])//style
                AnimationArr.push([j, j-1, "g", 'n'])//green
            }
            else{
                AnimationArr.push([j, j-1, "g", 'e'])//green
                break
            }
        }
    }
}