- 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值。
```js
function buildArray(arr, length, min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) { arr.push(num); }
    return arr.length === length ? arr : buildArray(arr, length, min, max);
}
var result = buildArray([], 5, 2, 32);
console.log(result);
```

- 返回到顶部的方法有哪些？
```js
window.scrollTo(0,0); //ie不支持，但好用
document.documentElement.scrollTop = 0;
location.href += '#';
```
- 数组去重的办法
```js
[...new Set(array)]
```

- 获得精确小数的方式
```js
parseFloat((0.1+0.2).toFixed(10)) === 0.3//true
```

- 让一个数组乱序
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