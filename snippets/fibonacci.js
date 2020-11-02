// 斐波那契数列
// 1 1 2 3 5 8 13 21 34

// 时间复杂度：O(2^n) 空间复杂度：O(1)
function fibonacci(index) {
    if (index < 2) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}

// 时间复杂度：O(n) 空间复杂度：O(n)
function fib(index) {
    let fibs = [];
    for (let i = 0; i < index + 1; i++) {
        if (i < 2) {
            fibs.push(1);
            continue;
        }
        let current = fibs[i - 1] + fibs[i - 2]
        fibs.push(current);
    }
    return fibs[index];
}

let index = 5;
console.log(fibonacci(index));
// console.log(fib(index))
