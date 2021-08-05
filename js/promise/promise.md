
# promise是什么？

抽象：是JS中进行异步编程的新的解决办法；

具体：
1.从语法上来说，promise是一个类，它的内部实现了观察者模式
2.从功能上来说，promise对象用来封装一个异步操作；

# promise三个状态

pending（初始状态）

fulfilled（成功）结果为value

rejected（失败） 结果为reason

# promise基本流程

![image](https://note.youdao.com/yws/public/resource/9185c4fc0bfb92d11cc5a6cef277c698/xmlnote/454F30F3E01F4DB782B6D641816AAFF1/4507)

# promise基本使用

成功的回调，称为onResolved：
失败的回调，称为onRejected
```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

p.then((value) => {
  console.log(value);
  // expected output: "foo"
});
```
# 为什么要使用promise

1、指定回调函数的方式更加灵活；

旧的：必须在启动异步任务前指定；

promise：启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数；

2、支持链式调用，解决回调函数嵌套调用；

终极解决方案：async/await(缺点：不是异步)

# promise异常传透

当使用promise的then链式调用时，可以在最后指定失败的回调；前面操作的任何异常，都会传到最后失败的回调中处理；

```js
new promise((resolve,reject)=>{
    reject(1)
}).then(value =>{
    console.log(value)
    //最后指定失败回调，可以改写成以下两种方式
    //reason =>{throw reason}
    //reason => promise.reject(reason);
}).then(value =>{
    console.log(value)
}).catch(reason=>{
    console.log(reason)
})
```

# 中断promise链

当使用promise的then链式调用时，在中间中断，不再调用后面的回调函数；方法：在回调函数中返回一个pending状态的promise对象；

```js
new promise((resolve,reject)=>{
    reject(1)
}).then(value =>{
    console.log(value)
}).catch(reason=>{
    console.log(reason)
    return new promise(() =>{})//返回一个pending的promise，则不会继续向下执行
}).then(value =>{
    console.log(value)
})
```

# 重点讲解内容

1、 Promise是个类，可以new

2、Promise类里有then方法

3、then方法本身返回一个新的Promise

4、当执行resolve()时，通知then执行
```js
let p = new Promise(function (resolve, reject) {
    console.log('a');
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

console.log('b');

p.then(function (data) {
    console.log(data);
})

console.log('c');

// a, b, c, 10
```
fetch方法的结构
```js
function fetch(url) {
    return new Promise(function (resolve, rejcet) {
        // 下面都是ajax异步请求逻辑
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    // xhr.responseText是服务端返回的结果
                    resolve(xhr.responseText);
                }
            }
        }
        xhr.open("GET", url);
        xhr.send();
    });
}

fetch('http://47.102.209.46/cats').then(function (data) {
    console.log(data)
});
```