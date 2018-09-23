//This function first loops through the string and creates each character as a key in an object and keeps a count of how many times a character shows up in the string
//Then it will loop through the object and find the key value pair with 1 as the value
//Return the value otherwise return '_' if all characters are repeating
function firstNotRepeatingCharacter(s) {
    let obj = {};
    
        for(let i = 0; i < s.length; i++){
            if(!obj.hasOwnProperty(s[i])){
                obj[s[i]] = 1;
            }
            else {
                obj[s[i]]++;
            }
        }
    
        for(object in obj){
            if(obj[object] === 1){
                return object;
            }
        }
    
        return '_';
    }
    