### 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值。
```js
function buildArray(arr, length, min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) { arr.push(num); }
    return arr.length === length ? arr : buildArray(arr, length, min, max);
}
var result = buildArray([], 5, 2, 32);
console.log(result);
```

### 返回到顶部的方法有哪些？
```js
window.scrollTo(0,0); //ie不支持，但好用
document.documentElement.scrollTop = 0;
location.href += '#';
```
### 数组去重的办法
```js
[...new Set(array)]
```

### 获得精确小数的方式
```js
parseFloat((0.1+0.2).toFixed(10)) === 0.3//true
```

### 让一个数组乱序
```js
方法1:
arr.sort((a, b) => Math.random() - .5)
方法2:洗牌算法
let arr= [1,2,3,4,5,6,7,8,9,10];
arr.forEach((item,index)=>{
    let random =Math.floor(Math.random() * arr.length);
    [arr[index],arr[random]] = [arr[random],arr[index]];
});
console.log(arr);
```

### 内存泄漏
- 定义
由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费。
- 后果
影响系统运行速度
- 成因
1、死循环函数、递归
2、对象的引用地址丢失

### 写一个获取数组的最大值、最小值的方法
```js
Math.max.apply(Array,[25,62,91,78,34,62]) //  91
Math.min.apply(Array,[27,64,90,78,34,62]) // 27
```

### promise 的常用方法
- promise.then

- promise.catch
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

- promise.race
当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

- promise.all
promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功

### 闭包
``` js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
// 内部函数可以访问上级作用域的变量
```
### 对于模块化的理解
node用的是CommonJS，“require”
前端用的是ESModule，“import”
ps：最新版的nodeJS已经支持ESModule语法；

# NodeJs的理解
- 服务端编程语言，语法和js一样；
- 和ESModule的区别；
1、不存在window对象；
2、引入方式不同（require/import）；
3、NodeJs多很多接口；
```
eg：fileApi（用于操作本地文件）
process（进程/线程管理）
stream(流)
```

### apply、call、bind 的异同
call、apply、bind都是为了解决改变this的指向。
call、apply作用是相同的，只是传参的方式不同。除了第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。 
bind绑定完之后返回一个新的函数，不执行。

**详细说明**:https://www.runoob.com/w3cnote/js-call-apply-bind.html

### 深拷贝、浅拷贝
类型 | 和原数据是否指向同一对象 | 和原数据是否指向同一对象 | 原数据中包含子对象
---|---|---|---
赋值 | 
浅拷贝 | 
深拷贝 | 

深拷贝就是最里面一层的引用地址都和原数据最里面一层的引用地址不一致。
深拷贝最粗暴的方式为:
```js
JSON.parse(JSON.stringify(carts));
```

```js
const carts = [
    {name: '裤子', price: 1, count: 1},
    {name: '鞋', price: 3, count: 1},
    {name: 'T恤', price: 2, count: 2},
    {name: '毛衣', price: 0, count: 1}
]

// 浅拷贝
const newCarts = [...carts];

// 深拷贝
const newCarts = [];
carts.forEach((item) => {
    newCarts.push({...item});
})

console.log(carts === newCarts);
console.log(carts[0] === newCarts[0]);
```

### 捕获异常的方式
- 全局捕获未处理的
```js
window.onerror = function(message, source, lineno, colno, error) { ... }
```
- 全局捕获未处理的Promise rejection
```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```
- 非异步且不是Promise的异常捕获
把异步操作用 Promise 包装，通过内部判断，把错误 reject，在外面通过 promise.catch 捕获。
```js
const p3 = () =>  new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('async error');
  })
});

function main3() {
  p3().catch(e => console.log(e));
}
main3();
```

### 事件循环
![微任务和宏任务](../image/prototype.png)
**详细说明**：https://zhuanlan.zhihu.com/p/78113300

### 写个还剩下多少天今年结束的倒计时
```js
const day =  Math.floor((new Date('2020-12-31 23:59:59:999') - new Date()) / (1000 * 60 * 60 * 24))
```

### 写一个函数求出N的阶乘
```js
const stepNum = (num) => (num === 1 ? num : num * stepNum(num - 1));
```

### fetch 和 ajax 区别
fetch是对ajax做了一层promise的封装,但是对于请求的拦截,响应的拦截还是需要手动代码实现;
ajax发请求需要带上method、状态码等信息；

### 事件委托
即利用事件冒泡机制处理指定一个事件处理程序，来管理某一类型的所有事件
- 事件委托的作用
1、利用冒泡的原理，将事件加到父级身上，触发执行效果，这样只在内存中开辟一块空间，既节省资源又减少DOM操作，提高性能
2、可以为动态添加的元素绑定事件

- js实现事件委托的三大步骤：
1、给父元素绑定事件
给元素ul添加绑定事件，通过addEventListener为父元素绑定事件
2、监听子元素的冒泡事件
这里默认是冒泡，点击子元素li会向上冒泡
3、找到是哪个子元素的事件
通过匿名回调函数的参数e用来接收事件对象，通过target获取触发事件的目标

### download
```js
<a href="/i/w3school_logo_white.gif" download="w3logo">
<img border="0" src="/i/w3school_logo_white.gif" alt="W3School">
</a>
```

### 写一个函数找出给定数组中的最大差值
```js
function sum(x, y) {
    if (typeof y === 'undefined') {
        return function (y) {
            return x + y
        }
    } else {
        return x + y
    }
}
console.log(sum(1,2));
console.log(sum(1)(2));
```

### 写一个格式化金额的方法
```js
new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
```