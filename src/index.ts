/**
 * this is the yello world function
 */
export let yellow = ()=>{
    console.log(1);
    privateMethod();
}

/**
 * this is the 'yo' function
 */
export let yo = ()=>{
    console.log('yo');
    
}

export let returnOne = ()=>{
    return 1;
}

export let returnTow = () => {
    return returnOne() + returnOne();
}

let privateMethod = ()=>{
    console.log('this is private');
}