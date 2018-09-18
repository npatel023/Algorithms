function sortByHeight(a) {
    //find all -1s and place the index in an array
    const tree = function(){
        let arr = [];
        for(let i = 0; i < a.length; i++){
            if(a[i] === -1){
                arr.push(i);
            }
        }
        return arr;
    }
    const getPeople = function(){
        let arr = [];
        for(let i = 0; i < a.length; i++){
            if(a[i] !== -1){
                arr.push(a[i]);
            }
        }
        return arr;
    }
    const indexOfTrees = tree();
    const peopleOnly = getPeople();

    //sort people
    const peopleSort = peopleOnly.sort((a, b) => a - b);

    //place -1 back into peopleSort array
    for(let i = 0; i < indexOfTrees.length; i++){
        peopleSort.splice(indexOfTrees[i], 0, -1);
    }
    return peopleSort;
}


const a = [-1, 150, 190, 170, -1, -1];

sortByHeight(a);