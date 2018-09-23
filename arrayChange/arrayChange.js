function arrayChange(inputArray) {

    let index;
    let count = 0;
    let increaseCount = 0;

    //loop through the array, check if the elements are strictly increasing, 
    //if not then increase the element by 1 and reset the i counter 
    //the loop will run until count is equal to the length of the array - 1
    //which means the array elements are strictly increasing
    for(let i = 0; i < inputArray.length; i++){
        for(let j = i+1; j < i+2; j++){
            //if element i is greater than element j or if they are equal
            //then increase element j and increase the increaseCount variable
            //increaseCount keeps track of how many times the elements were incremented
            if(inputArray[i] > inputArray[j] || inputArray[i] === inputArray[j]){
                inputArray[j] = inputArray[j] + 1;
                increaseCount++;
            }
            //after increasing element j, check if it is greater than element i
            //increase the count variable letting us know element j is greater than element i
            //this way we aren't starting from the beginning of the loop
            if(inputArray[j] > inputArray[i]){
                count++;
            }
            //if element j is less than or equal to element i then decrease the i counter by 1
            //so we can increase element j by 1 again
            //repeat this until element j is greater than element i
            else{
                i = i-1;
            }
        }
        //when the count variable equal to the array length - 1 then we know that the elements in the array are in strictly increasing order
        if(count === inputArray.length-1){
            break;
        }
    }

    return increaseCount;
}
