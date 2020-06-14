export default function getAnimation(Array){
    let AnimationArr = []
    let Arr = Array.slice()
    MergeSort(Arr, AnimationArr, 0, 0)
    return [AnimationArr, Arr.length]
}

function  MergeSort(Arr, AnimationArr, start_index, level){//Arr index of the element
    if(Arr.length>0){
        if(Arr.length === 1){
            AnimationArr.push(['to1', level, start_index])
            return
        }
        let middle_index = Math.floor(Arr.length/2),
        List1 = Arr.slice(0,middle_index),
        List2 = Arr.slice(middle_index)
        AnimationArr.push(['to', level, start_index, middle_index+start_index, start_index+Arr.length-1])
        // console.log("Arr",Arr,"L1",List1,"L2",List2,"Level",level,'start_index',start_index,'middle_index',middle_index)
        MergeSort(List1, AnimationArr, start_index, level+1)
        MergeSort(List2, AnimationArr, middle_index+start_index, level+1)
        merge(Arr,AnimationArr, List1, start_index, List2, level+1)
    }
}

const merge = (Arr, AnimationArr, List1, start_L1, List2, level) =>{
    let i=0,j=0,k=0
    while(i<List1.length && j<List2.length && k<Arr.length){
        // AnimationArr.push(['r', i+start_L1, j+start_L2])
        if(List1[i] <= List2[j]){
            Arr[k] = List1[i]
            AnimationArr.push(['g', level, k+start_L1, List1[i]]) //,i+start_L1, j+start_L2])//k(g, style),j(b)
            i++
        }
        else{
            Arr[k] = List2[j]
            AnimationArr.push(['g', level, k+start_L1, List2[j]])//, i+start_L1, j+start_L2])//g, style
            j++
        }
        k++
    }
    if(i<List1.length){
        while(k<Arr.length){
            Arr[k] = List1[i]
            // AnimationArr.push(['r', i+start_L1,  i+start_L1])
            AnimationArr.push(['g', level, k+start_L1, List1[i]])// i+start_L1,  i+start_L1])
            i++
            k++
        }
    }
    else if(j<List2.length){
        while(k<Arr.length){
            Arr[k] = List2[j]
            // AnimationArr.push(['r', j+start_L2, j+start_L2])
            AnimationArr.push(['g', level,  k+start_L1, List2[j]])//, j+start_L2, j+start_L2])
            j++
            k++
        }
    }
}