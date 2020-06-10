# this
- 指向函数的调用者
```
var obj = {
    foo: function() {
        console.log(this);
    }
};

obj.foo(); // obj
//以方法的形式调用时，this就是调用这个方法的对象；

var k = obj.foo;
k(); // window
//以函数的形式调用时，this永远是window；

function Person(){
    alert(this);
}// per{};
var per = new Person();
//当函数以构造函数的形式调用的时候，this就是新创建（new）的对象；
```

- 指向new出来的实例
```
function Person(name, age) {//构造函数，类型对象
    this.name = name;
    this.age = age;
}

var tom = new Person('Tom', 18);//根据类型对象创建实例对象
console.log(tom.age);

var john = new Person('John', 37);
console.log(john.age);
```

# 原型
- 原理：
![image](https://note.youdao.com/yws/public/resource/9185c4fc0bfb92d11cc5a6cef277c698/xmlnote/4F7363390FA64147B6950BFB90D4F6C6/4424)
- 作用：
  
  可以避免function写在全局作用域里面，污染全局作用域的命名空间；

  在创建构造函数的时候，可以将这个对象共有的属性和函数（主要是函数），统一加到构造函数的原型对象中；
  
- 备注

  原型也是对象，所以它也有原型；
  
  原型链
```
function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.legs = 2;

person.prototype.eat = function() {
    console.log('i am eating');
}

var tom = new person('Tom', 18);
console.log(tom.legs); // 2

var john = new person('John', 37);
john.eat(); // i am eating
```

# 类与继承
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('i am eating');
    }
}

class Student extends Person {
    constructor(grade, name, age) {
        super(name, age);
        this.grade = grade;
    }
}

let tom = new Student(5, 'tom', 18);
tom.eat();
console.log(tom.name);
```

# Promise
- promise是什么？

抽象：是JS中进行异步编程的新的解决办法；

具体：（1）从语法上来说，promise是一个构造函数（他的实例做什么事）；（2）从功能上来说，promise对象用来封装一个异步操作，并可以获取其结果；

- promise三个状态

pending（初始状态）

fulfilled（成功）结果为value

rejected（失败） 结果为reason

- promise基本流程

![image](https://note.youdao.com/yws/public/resource/9185c4fc0bfb92d11cc5a6cef277c698/xmlnote/454F30F3E01F4DB782B6D641816AAFF1/4507)

- promise基本使用

成功的回调，称为onResolved：
失败的回调，称为onRejected
```
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
- 为什么要使用promise

1、指定回调函数的方式更加灵活；

旧的：必须在启动异步任务前指定；

promise：启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数；

2、支持链式调用，解决回调函数嵌套调用；

终极解决方案：async/await(缺点：不是异步)

- promise异常传

当使用promise的then链式调用时，可以在最后指定失败的回调；前面操作的任何异常，都会传到最后失败的回调中处理；

```
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

- 中断promise链

当使用promise的then链式调用时，在中间中断，不再调用后面的回调函数；方法：在回调函数中返回一个pending状态的promise对象；

```
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

- **重点讲解内容**

1、 Promise是个类，可以new

2、Promise类里有then方法

3、then方法本身返回一个新的Promise

4、当执行resolve()时，通知then执行
```
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
```
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