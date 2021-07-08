const person = {name: 'zhangsan'};
const personProxy = new Proxy(person, {
    set: (own, property, value) => {
        console.log('111')
        own[property] =value;
    }
})

personProxy.age = 15;
console.log(person.age);