export default function getAnimation(Array){
    let AnimationArr = []
    let Arr = Array.slice()
    SelectionSort(Arr, AnimationArr)
    return [AnimationArr, Arr.length]
}

const SelectionSort = (Arr, AnimationArr) => {
    const n = Arr.length
    let i
    for(i=0; i<n-1; i++){
        let j,max = 0
        for(j=1; j<=n-1-i; j++){
            AnimationArr.push([max, j])//purple red
            if(Arr[j] > Arr[max]){
                AnimationArr.push([j, max, 'c'])//purple blue
                max = j
            }
            else
                AnimationArr.push([max, j, 'n'])//purple blue
        }
        [Arr[max], Arr[j-1]] = [Arr[j-1], Arr[max]] 
        AnimationArr.push([max, j-1, 1])///style ,max blue, j-1 gColor
    }
}