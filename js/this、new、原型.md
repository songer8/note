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
![原型对象](../image/prototype.png)
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
```js
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
        super(name, age);//调用父类的构造函数或方法；
        this.grade = grade;
    }
}

let tom = new Student(5, 'tom', 18);
tom.eat();
console.log(tom.name);
```