/*
    closure
    functions as first-class objects
    spread
*/ 
const once = fn => {
    let done = false;
    return (...args) => {
        if(!done){
            done = true;
            fn(...args);
        }
    }
}

const LogMyName = (name) => {
    console.log(name);
}

const onceLogMyName = once(LogMyName);
console.log(onceLogMyName)
onceLogMyName('Neda');
onceLogMyName('Neda');