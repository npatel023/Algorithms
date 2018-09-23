function firstDuplicate(a) {
    let obj = {};
    let count = 0;

    //use objects to store elements in array a
    //the first element key that has a value greater than 1 will be returned
    //otherwise -1 will be returned which means no duplicates
  for(let i = 0; i < a.length; i++){
      if(!obj.hasOwnProperty(a[i])){
          obj[a[i]] = 1; 
      }
      else{
          obj[a[i]]++;
      }

      if(obj[a[i]] > 1){
          return a[i];
      }
  }
  
  return -1;
}
