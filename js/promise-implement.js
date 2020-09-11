class MyPromise {
    constructor(fn) {
        fn(this.resolve, this.reject)
        this.pendding = true;
        this.fullfilled = false;
        this.rejected = false;
    }
    resolve = (data)=> {
        this.fullfilled = true;
        this.subscriber(data);
    }
    reject = (error)=> {
        this.rejected = true;
        this.errorSubcriber(error);
    }
    then = (callback)=> {
        this.subscriber = callback
    }
    catch = (callback)=> {
        this.errorSubcriber = callback;
    }
}

const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('qqq');
    }, 3000);
});

let callback = (value) => {
    console.log(value);
    // expected output: "foo"
};

p.then(callback)
p.catch((error) =>{
    console.log(error);
})