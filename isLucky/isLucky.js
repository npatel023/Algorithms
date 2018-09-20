function isLucky(n){
 
    // convert integer to string
    const num = String(n);
    // store each character in a different index in the array
    const arr = num.split('');

    // if length of input is odd then return false
    if(arr.length % 2){
        return false;
    }

    // first half sum
    let sum1 = 0;
    // second half sum
    let sum2 = 0;

    // sum up first half of numbers
    const getFirstHalf = function(){
        for(let i = 0; i < arr.length/2; i++){
            sum1 += parseInt(arr[i]);
        }
        return sum1;
    }

    // sum up second half of numbers
    const getSecondHalf = function(){
        for(let i = arr.length-1; i >= arr.length/2; i--){
            sum2 += parseInt(arr[i]);
        }
        return sum2;
    }

    const firstHalf = getFirstHalf();
    const secondHalf = getSecondHalf();

    return firstHalf === secondHalf;

}

const n = 1230;

console.log(isLucky(n));