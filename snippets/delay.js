//封装方法
export const delay = (fn, wait) => {
    return function (...args) {
        setTimeout(() => {
            fn(...args);
        }, wait)
    }
}

//封装promise
export const sleep = (wait) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, wait)
    })
}

function sleep(wait) {
    return new Promise(resolve => {
        setTimeout(resolve, wait)
    });
}

sleep(300).then(() => fn());