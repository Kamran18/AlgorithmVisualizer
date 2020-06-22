export default (num) => {
    //New No. 
    const [defaultNewNum, defaultPosition] = [Math.floor(Math.random()*99),  Math.floor(Math.random()*num.length)]
    let EnterVal = prompt(`Enter the number you want to Add and comma seperated its position(Starts from 0). On click "Cancel" or Incorrect values entered random values will be taken`,[defaultNewNum, defaultPosition])
    EnterVal = EnterVal ? EnterVal : `${defaultNewNum}, ${defaultPosition}`;
    let [nodeValue, nodePosition] = EnterVal.split(",").map(numStr=>Number(numStr))
    nodeValue = Number(nodeValue) ? nodeValue : defaultNewNum
    nodePosition = (nodePosition >= 0) && (nodePosition < num.length+1) ? nodePosition : defaultPosition
    let AnimationArr = []

        //position finding animation
    for(let i=0; i<nodePosition; i++){
        AnimationArr.push(['r', i])//red color to pteBox
        AnimationArr.push(['h', i])//default color of ptrBox
        if( i<nodePosition-1){
            AnimationArr.push(['rw', i])//red the pointer
            AnimationArr.push(['w', i])//white the pointer
        }
    } 
    if(nodePosition)
        AnimationArr.push(['b', nodePosition-1])// prev Node
    else
        AnimationArr.push(['b', -1])
    
    return [AnimationArr, nodeValue, num.length]
}