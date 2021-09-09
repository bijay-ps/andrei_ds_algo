// 0 1 1 2 3 5 8 13 21 34 55 89.......

function fibonacciIterative(n) {
    const fibonacciArr = [0,1];
    for(let i=2; i<=n; i++) {
        fibonacciArr.push(fibonacciArr[i-2] + fibonacciArr[i-1]);
    }
    return fibonacciArr[n]
}

const res1 = fibonacciIterative(8);
console.log(res1);

function fibonacciRecursive(n) {
    if(n < 2) {
        return n;
    } else {
        return fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
    }
}

const res2 = fibonacciIterative(8);
console.log(res2);