'use strict'


main(process.argv);


function main(args) {
    let n = parseInt(args[2]);
    let answer = factorial(n, 1);
    // let answer = loop(n);
    console.log(n + '! = ' + answer);
}


function loop(n) {
    let answer = n;
    for (let i = (n - 1); i > 1; i--) {
        answer = answer * i;
    }
    return answer;
}


function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
