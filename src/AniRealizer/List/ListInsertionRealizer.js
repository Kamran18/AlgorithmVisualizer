export default function SearchRealizer([animation, nodeValue, N], speed){//N => no of nodes
    //Box styling constants
    const rColor="#f44336", hColor='#00796b',wColor='white',bColor='#03a9f4',
    gTextColor='#9e9e9e',bTextColor="#212121";
    const bar = document.querySelectorAll('.Bar'),
    Head = document.getElementById('Head'),
    TempPtr = Head.nextElementSibling,
    TempNode = bar[N-1].parentNode.nextElementSibling,
    TempBar = TempNode.lastElementChild


    // //Paper styling constants
    const arrCode= document.querySelectorAll('.paper'),
    shadow = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    unshadow ="none"
    
    const Al = animation.length
    //Head box + Paper animation //head animation
    for(let i=0; i<2; i++){
        setTimeout(()=>{
            if(i===0){
                Head.style.borderColor = rColor
                //making all paper boxes grey
                for(let j=0;j<5;j++){
                    arrCode[j].style.boxShadow = unshadow
                    arrCode[j].style.color = gTextColor
                }
                arrCode[1].style.boxShadow = shadow
                arrCode[1].style.color = bTextColor
            }
            else{
                Head.style.borderColor = hColor
            }
        }, i*speed)
    }

    //Box + Paper animation //searching animation
    for(let i=2; i<Al+2; i++){
        setTimeout(()=>{
            if(animation[i-2][0]==='b'){            //consider -1 case also
                if(animation[i-2][1] > -1)//when node is other than first one
                    bar[animation[i-2][1]].style.backgroundColor = bColor
                else//first node
                    Head.style.borderColor = bColor
                //
            }
            else if(animation[i-2][0]==='r'){
                bar[animation[i-2][1]].style.backgroundColor = rColor
                //
            }
            else if(animation[i-2][0]==='h'){
                bar[animation[i-2][1]].style.backgroundColor = hColor
                //
            }
            else if(animation[i-2][0]==='rw'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = rColor
                bar[animation[i-2][1]].lastElementChild.style.color = wColor
                // 
            }
            else if(animation[i-2][0]==='w'){
                bar[animation[i-2][1]].lastElementChild.style.backgroundColor = wColor
                bar[animation[i-2][1]].lastElementChild.style.color = hColor
                // 
            }
        }, i*speed)
    }

    //insert Animation
    //makes the tempNode And pointer visible with correct values in it
    setTimeout(()=>{
        TempPtr.innerText = TempNode.firstElementChild.innerText
        TempPtr.style.borderColor = hColor
        TempPtr.style.color = hColor
        TempBar.firstElementChild.innerText = nodeValue 
        TempNode.style.filter = 'blur(0)'
        //
        arrCode[1].style.boxShadow = unshadow
        arrCode[1].style.color = gTextColor
        arrCode[2].style.boxShadow = shadow
        arrCode[2].style.color = bTextColor
    }, (Al+2)*speed)
    //making pointerBox red
    setTimeout(()=>{
        TempBar.lastElementChild.style.backgroundColor = rColor
        TempBar.lastElementChild.style.color = wColor
        if(animation[Al-1][1] > -1){//when node is other than first one
            bar[animation[Al-1][1]].lastElementChild.style.backgroundColor = rColor
            bar[animation[Al-1][1]].lastElementChild.style.color = wColor
        }
        else{//first node
            Head.style.backgroundColor = rColor
            Head.style.color = wColor
        }
        arrCode[2].style.boxShadow = unshadow
        arrCode[2].style.color = gTextColor
        arrCode[3].style.boxShadow = shadow
        arrCode[3].style.color = bTextColor
    }, (Al+3)*speed)
    //making newNode to point to its nextNode in the list
    setTimeout(()=>{
        if(animation[Al-1][1] > -1){//when node is other than first one
            TempBar.lastElementChild.innerText = bar[animation[Al-1][1]].lastElementChild.innerText
        }
        else{//first node
            TempBar.lastElementChild.innerText = Head.innerText
        }
    }, (Al+4)*speed)
    //making prevNode ptrBox points to new node
    setTimeout(()=>{
        if(animation[Al-1][1] > -1){//when node is other than first one
            bar[animation[Al-1][1]].lastElementChild.innerText = TempPtr.innerText
        }
        else{//first node
            Head.innerText = TempPtr.innerText
        }
        arrCode[3].style.boxShadow = unshadow
        arrCode[3].style.color = gTextColor
        arrCode[4].style.boxShadow = shadow
        arrCode[4].style.color = bTextColor
    }, (Al+5)*speed)
    //making pointerBox white
    setTimeout(()=>{
        TempBar.lastElementChild.style.backgroundColor = wColor
        TempBar.lastElementChild.style.color = hColor
        if(animation[Al-1][1] > -1){//when node is other than first one
            bar[animation[Al-1][1]].lastElementChild.style.backgroundColor = wColor
            bar[animation[Al-1][1]].lastElementChild.style.color = hColor
            bar[animation[Al-1][1]].style.backgroundColor = hColor
        }
        else{//first node
            Head.style.backgroundColor = wColor
            Head.style.color = hColor
        }
        arrCode[4].style.boxShadow = unshadow
        arrCode[4].style.color = gTextColor
    }, (Al+6)*speed)

    // Returnig back to original state
    setTimeout(()=>{
        for(let j=0;j<5;j++){
            arrCode[j].style.boxShadow = unshadow
            arrCode[j].style.color = bTextColor
        }
        for(let j=0; j<N; j++)
            bar[j].style.backgroundColor = hColor
        //reset nodes
        TempNode.style.filter = 'blur(100px)'
        TempPtr.style.borderColor = wColor
        TempPtr.style.color = wColor
        if(animation[Al-1][1] === -1){//first node
            Head.innerText = 'A'
            Head.style.borderColor = hColor
        }
        else//when node is other than first one
            bar[animation[Al-1][1]].lastElementChild.innerText = TempBar.lastElementChild.innerText
    }, (Al+7+5)*speed)//adding 5 for seeing final result before reset
    return ((Al+7+5)*speed)
}