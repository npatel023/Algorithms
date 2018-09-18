function matrixElementSum(matrix){
    if(matrix.length === 1 && matrix[0][0] === 0){
        return 0;
    }

    const add = [];

    //every column with a 0 and any number below will be replaced with an x. 
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                matrix[i].splice(j, 1, 'x');
            }
            //if previous array in matrix is an x then current index will be turned into an x
            if(i >= 1){
                if(matrix[i-1][j] === 'x'){
                matrix[i].splice(j, 1, 'x');
                }
            }
        }
    }

    //push all the non x values into the add array
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] !== 'x'){
            add.push(matrix[i][j]);
        }
        }
    }

    return add.reduce((sum, num) => sum+num);
}

const matrix = [[0,1,1,2],
                [0,5,0,0],
                [2,0,3,3]];

