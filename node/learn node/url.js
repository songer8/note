const url =  require('url');

const address = 'http://localhost:8080/default.html?year=2022&month=November'

const parsedUrl = url.parse(address, true);

console.log('host', parsedUrl.host);
console.log('pathname', parsedUrl.pathname);
console.log('query', parsedUrl.query);