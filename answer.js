var isValid = function(s) {

    //If odd amount, cannot be valid.
    if(s.length % 2 > 0){
        return false;
    }

    //Use this for possible left pairs
    let starts = new Set(["{","[","("]);
    //right pairs
    let compliments = {
        "}":"{",
        ")": "(",
        "]": "["
    }

    //String -> array
    let stringArr = s.split("");
    let stack = [];

    for(let i = 0; i < stringArr.length; i++ ){
        //If this is a valid start char, push to stack
        if(starts.has(stringArr[i])){
            stack.push(stringArr[i]);
        }

        else if(stack.length > 0){
            //If the there is data on stack, it may be valid
            //Does a pair for this other char exist? If so, is the compliment on the top of the stack?
            if(compliments[stringArr[i]] && stack[stack.length - 1] == compliments[stringArr[i]]){
                //If so its a match, pop the stack.
                stack.pop()
            }
            //If for any reason, there is no match, it is not valid.
            else{
                return false;
            }
        }
        //If it is not a start, and the stack is empty, it cannot be valid
        else{
            return false;
        }
    }

    //If the stack is empty at the end, it is valid
    if(stack.length == 0){
        return true;
    }
    //Otherwise it is invalid.
    return false;
};
