const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req); //只有当打开某些文件或者特定url，才会被触发，此处监听3000端口

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'}); //增加response header信息
        res.write('<h1>this is homepage</h1>'); // 可以返回html
        res.end();
    }
    if(req.url === '/user') {
        res.write('this is userInfo');
        res.end();
    }
})

server.listen(3000, () => {
    console.log('server is running')
})