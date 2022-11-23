const fs = require('fs');

// fs.writeFile('message.txt', 'hello world', (err) => {
//     if(err) throw err;
//     console.log('file has been written');
// })

// console.log('has been execute earlier')

fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log('data:', data)
})

console.log('has been execute earlier')