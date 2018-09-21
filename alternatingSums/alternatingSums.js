function alternatingSums(a){
    let sum1 = 0;
    let sum2 = 0;
    //check for if index is even or odd and sum the elements accordingly
    a.forEach((data, i) => {
        if(i % 2 === 0){
            sum1 += data;
        }
        else {
            sum2 += data;
        }
    });

    return [sum1, sum2];
}

const a = [50, 60, 60 ,45, 70];

console.log(alternatingSums(a));