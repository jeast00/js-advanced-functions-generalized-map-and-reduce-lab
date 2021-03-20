// Add your functions here


function map(num, callBackFunction) {
    let n = [];

    for(let i = 0; i < num.length; i++) {
        let value = num[i];
        n.push(callBackFunction(value));
    }
    return n;
}

function reduce(num, callBackFunction, startPoint) {

    let n = (!!startPoint) ? startPoint : num[0];
    let i = (!!startPoint) ? 0 : 1;
    for(; i < num.length; i++) {
        n = callBackFunction(num[i], n);
    }

    return n;
}