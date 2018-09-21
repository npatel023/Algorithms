function reverseParentheses(s){
    let paren = '';
    
    for(let i = s.length-1; i >= 0; i--){
        if(s[i] === ')'){
            for(let j = 0; j < i; j++){
                if(s[j] === '('){
                    paren = s.substring(j, i+1);
                    break;
                }
            }
            break;
        }
    }
    console.log(paren);
}


const s = "co(de(fight)s)";

console.log(reverseParentheses(s));