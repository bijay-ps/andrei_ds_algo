function findFactorialRecursive(num) {
    if(num === 1) {
        return 1
    } else {
        return num * findFactorialRecursive(num - 1)
    }
}

const res1 = findFactorialRecursive(5);

console.log(res1);

function findFactorialIterative(num) {
    let result = 1;
    for(let i=1; i<=num; i++) {
        result = result * i;
    }
    return result;
}

const res2 = findFactorialIterative(5);

console.log(res2);