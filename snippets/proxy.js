const person = {name: 'zhangsan'};
const personProxy = new Proxy(person, {
    set: (own, property, value) => {
        console.log('111')
        own[property] =value;
    }
})

personProxy.age = 15;
console.log(person.age);


// 实现观察者模式
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn); //把fn加到queuedObservers数组里面去
const observable = obj => new Proxy(obj, { set });

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
}



// 使用方法
const person = observable({ //代理person的set方法
    name: '张三',
    age: 20
});

function print() {
    console.log(person.name, person.age )
}
observe(print);//注册观察者
person.name = '李四';