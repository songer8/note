export const delay = (fn ,wait) => {
    return function (...args){
        setTimeout(() => {
            fn(...args);
        },wait)
    }
}