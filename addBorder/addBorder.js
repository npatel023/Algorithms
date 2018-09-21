
function addBorder(picture) {
    let topBottom = '';
    const newArr = [];
    //store asterisks for the top and bottom to a variable equal to the length of the strings plus 2 since they will have an asterisk on the left and right.
    for(let i = 0; i < picture[0].length+2; i++){
        topBottom += '*';
    };
    
    //add an asterisk to the left and right of the strings
    for(let i = 0; i < picture.length; i++){
        newArr.push(`*${picture[i]}*`);
    }
    
    //add asterisk to the top and bottom
    newArr.unshift(topBottom);
    newArr.push(topBottom);
    
    return newArr;
    
}
