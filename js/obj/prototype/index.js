// let animal = {};
// animal.name = 'Leo';
// animal.energy = 10;

// animal.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// animal.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }

// animal.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
// }

//函数输出
// function Animal(name, energy){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function (amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     }

//     animal.sleep = function (length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     }

//     animal.play = function (length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }
//     return animal;
// }

// const leo = Animal('Leo', 7);
// const snoop = Animal('Snoop', 10)

//函数方法指向对象，方法只需要创建一次
// const animalMethods = {
//     eat(amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep(length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play(length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }
// }
// function Animal(name, energy){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat;
//     animal.sleep = animalMethods.sleep;
//     animal.play = animalMethods.play;

//     return animal;
// }

//Object.Create()
// const animalMethods = {
//     eat(amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep(length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play(length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }
// }
// function Animal(name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name;
//     animal.energy = energy;

//     return animal;
// }
// const leo = Animal('Leo', 7);
// console.log(leo.play(7)) //Leo is playing.

//prototype
// function Animal(name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name;
//     animal.energy = energy;

//     return animal;
// }

// Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }
// Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }
// Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
// }

// const leo = Animal('Leo', 7);
// console.log(leo.eat(5)) //Leo is eating.

//关键词 new
function Animal(name, energy) {
    // let this = Object.create(Animal.prototype) //这一步的作用：1、创建对象 2、指向Animal.prototype
    this.name = name;
    this.energy = energy;

    // return this; //输出创建的对象
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}
Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}

const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10)
console.log(leo.sleep(15)) //Leo is sleeping.

//class关键词
// class Animal {
//     constructor(name, energy) {
//         this.name = name
//         this.energy = energy
//     }
//     eat(amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     }
//     sleep(length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     }
//     play(length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }
// }

// const leo = new Animal('Leo', 7);
// const snoop = new Animal('Snoop', 10)
// console.log(leo) //Animal { name: 'Leo', energy: 7 }
// console.log(leo.sleep(1)) //Leo is sleeping.

//数组原型
// const friends = [];
// const friends = new Array()

//对象原型
//1、   
const prototype = Object.getPrototypeOf(leo)
prototype
prototype === Animal.prototype //true

//2、获取对象上的属性
for (let key in leo) {
    console.log(`key: ${key}, value: ${leo[key]}`)
}

leo.hasOwnProperty('name')
leo.hasOwnProperty('sleep')
for (let key in leo) {
    if (leo.hasOwnProperty(key)) {
        console.log(`key: ${key}, value: ${leo[key]}`)
    }
}

//3、检查一个对象是不是一个class的特定实例
function User() { }
leo instanceof Animal
leo instanceof User;

//4、箭头函数
const ArrowFn = () => { }
const arrow = new ArrowFn()
ArrowFn.prototype