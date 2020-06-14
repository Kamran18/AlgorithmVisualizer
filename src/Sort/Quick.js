export default function getAnimation(Array){
    let AnimationArr = []
    let Arr = Array.slice()//prevent accessing state directly
    QuickSort(Arr, AnimationArr, 0, Arr.length-1)
    return [AnimationArr, Arr.length] 
}

const QuickSort = (Arr, AnimationArr, start_index, pivot)=>{
    AnimationArr.push(['start'])//paper shadow
    AnimationArr.push(['start'])//paper unshadow
    if(start_index <= pivot)
    {
        if(start_index === pivot)
        {
            AnimationArr.push(['g', pivot, 'n'])//g for single bar
            AnimationArr.push(['g', pivot, 'a'])//paper animation
            return;
        }
        AnimationArr.push(['r', pivot])//r +for pivot bar
        let current_index = start_index, large_index = start_index;
        AnimationArr.push(['ir', large_index, current_index])//i, r
        while(current_index < pivot)
        {
            if(Arr[current_index] <= Arr[pivot])
            {
                [Arr[current_index], Arr[large_index]] = [Arr[large_index], Arr[current_index]];
                AnimationArr.push(['s', large_index, current_index])//style
                AnimationArr.push(['b', large_index, current_index])//b,b
                large_index++;
            }
            else{
                AnimationArr.push(['b', current_index, current_index])//b,b
            }
            current_index++;
            AnimationArr.push(['ir', large_index, current_index])//i, r
        }
        [Arr[pivot], Arr[large_index]] = [Arr[large_index], Arr[pivot]];
        // AnimationArr.push(['s', large_index, pivot])//style
        AnimationArr.push(['gb', large_index, pivot, 'n'])//g,b + style
        AnimationArr.push(['gb', large_index, pivot, 'a'])//paper
        AnimationArr.push(['quick', 'n', 8])//g,b + style
        AnimationArr.push(['quick', 'a', 8])//paper
        QuickSort(Arr, AnimationArr, start_index, large_index-1);
        AnimationArr.push(['quick', 'n', 9])//g,b + style
        AnimationArr.push(['quick', 'a', 9])//paper
        QuickSort(Arr, AnimationArr, large_index+1, pivot);
    }
}