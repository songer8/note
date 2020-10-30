//debounce
//多次触发取最后一次
export const debounce = (fn, wait = 300) => {
    let timerId = null;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, wait)
    }
}

//throttle
//多次触发取第一次
export const throttle = (fn, wait = 300) => {
    let canRun = true;
    return function (...args) {
        if (canRun) {
            fn(...args);
            canRun = false;
            setTimeout(() => {
                canRun = true;
            }, wait)
        }
    }
}

//以上2个函数返回的是一个r函数；why？保证原业务代码调用时，只需要在原本的函数外部包上封装好的函数即可使用；
//为什么return的函数入参为...args？因为不知道入参是什么，有几个；

//以上两个函数与实际业务代码结合使用
const handleInputEnter = debounce((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (word && word.trim()) {
            search(e.target.value);
        }
    }
});

//由于debounce输出的是一个函数，所以handleInputEnter是函数；
//入参fn为(e) =>{...}
//入参...args根据代码为一个event事件；
//fn(...args)执行，将这个event传给了e；


