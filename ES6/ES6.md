# let&const
## let
- let命令，只在let命令所在的代码块内有效。
- var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。let则不会。

## const
- const声明一个只读的常量。一旦声明，常量的值就不能改变。
- const只能保证指向固定的内存地址，至于它指向的数据结构是不是可变的，就完全不能控制了。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

#解构赋值
- 概念：按照一定模式，从数组和对象中提取值，对变量进行赋值
```js
//数组
let [a, b, c] = [1, 2, 3];

//对象
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

//函数
[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
```

- 解构赋值允许指定默认值。
```js
//数组
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
let [x, y = 'b'] = ['a', null]; // x='a', y = null

//对象
var {x, y = 5} = {x: 1};
//x = 1, y = 5

//函数
function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

```

# 模板字符串
- 模板字符串中嵌入变量，需要将变量名写在${}之中。
```
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```
# 函数扩展
## 函数参数指定默认值
- 例子
下面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
```
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]
```
