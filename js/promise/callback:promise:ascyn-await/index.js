const fetch = require('node-fetch')
const fs = require('fs');
const { rejects } = require('assert');

// ---------callbacks---------

// 1.setTimeout
setTimeout(() => {
    console.log('一秒钟后执行')
}, 1000);
// 1秒后控制台打出“一秒钟后执行”；

//嵌套setTimeout
setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
    },1000)
}, 1000);
// 1秒后控制台打出“1”，再过1秒打出“2”；

// 浏览器事件监听
const btn;
btn.addEventListener('click', () => console.log('事件监听'))
// 用回调函数监听event

// 回调方式读取本地文件
fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.error(err);
    } else {
        console.log('SUCCESS')
        console.log(data)
    }
})

// ---------Promise---------

// 创建一个Promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2)//随机生成0或者1；
    if (rand === 0) {
        resolve();
    } else {
        reject();
    }
})
myPromise
    .then(() => console.log('成功输出0'))
    .catch(() => console.log('未能输出0'))

// 使用Promise读取本地文件
fs.promises.readFile('./text.txt', { encoding: 'utf-8' }).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})

// fetch
fetch('https://api.github.com/users/github').then(res => {
    return res.json()
}).then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
})

// ---------Promise---------

// 使用Async/Await读取本地文件，Async/Await是Promise的语法糖，所以此处也使用 fs.promises.readFile()；
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./text.txt', { encoding: 'utf-8' })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
loadFile();

// Async/Await调用远程Api
const fetchGithub = async () => {
    try {
        const res = await fetch('https://api.github.com/users/github')
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchGithub();

// Async/Await 传参
const fetchGithub = async(id) => {
    try {
        const res = await fetch(`https://api.github.com/users/github/${id}`)
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchGithub(2);
// 由于传参后，不符合github Api定义，所以触发error