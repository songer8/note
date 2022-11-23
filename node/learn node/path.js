const path = require('path');

const fileLoaction = path.join(__dirname, 'app.js');
const fileName = path.basename(fileLoaction);

console.log('fileLoaction', fileLoaction);
console.log('fileName', fileName);