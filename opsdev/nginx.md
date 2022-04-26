### 登陆服务器
`ssh username@ip eg:ssh root@47.102.209.111`
### 安装
`apt install nginx`

### nginx安装到指定目录
- 判断内核是ubuntu（apt），还是centOs（yum），敲一下命令就能判断
- 安装编译器和依赖
```
yum install libaio ncurses gcc gcc-c++ cmake ncurses-devel wget 
yum install pcre-devel zlib-devel
```

- 下载源码包并解压
```
wget http://nginx.org/download/nginx-1.16.1.tar.gz  # 下载源码包,包的版本去nginx官网找最新稳定版
tar -zxvf nginx-1.16.1.tar.gz  # 解压
cd nginx-1.16.1 //cd到下载的文件夹
```

- 编译安装
```
./configure --prefix=/txdisk/local/nginx  # =后面为指定安装目录
make && make install  # 安装
```

-  更改nginx用户

因为nginx默认的用户是nobody，权限很低,所以要将user改成root，#去掉
```
cd /txdisk/local/nginx/conf
vi nginx.conf
```

- 如需要指定error_log和access_log的目录地址
也是修改nginx用户的地方
```
error_log  /txdisk/logs/nginx/error.log;
access_log  /txdisk/logs/nginx/access.log;
```

- 启动和重启
```
/txdisk/local/nginx/sbin/nginx  # 启动nginx
/txdisk/local/nginx/sbin/nginx -s stop  # 停止
/txdisk/local/nginx/sbin/nginx -s reload  # 重新载入配置
```
- 当配置错误时，需要stop再start，直接reload无效;

[参考链接](https://zhuanlan.zhihu.com/p/111009323)

### nginx默认安装并配置
- nginx安装在 `/etc/nginx`下;
- 新建目录 `/var/www/frontend`;(代码存放目录)
> cd `/var/www && mkdir frontend`(新建文件夹名称)
- 配置nginx规则;
> `cd /etc/nginx/conf.d && touch infomap.conf`新建文件
> `vi infomap.conf`进入infomap.conf
 ` 
  i 编辑
  esc 退出编辑
  :q 退出
  :wq 保存退出
  :q! 强制退出
`
- 重启nginx`service nginx restart`
```
server {
    listen 80; 
    server_name 47.102.209.64; # 可以写多个，用空格隔开

    location /infomap {
        # /infomap/a.js + root => /var/www/frontend/infomap/a.js
        root /var/www/frontend;
        index index.html;
        # 依次尝试查找文件, $uri指path部分
        try_files $uri $uri/ /index.html =404;
    }
}
```

- nginx前后端路由配置（在安装nginx下的nginx.conf进行配置）
```
    # 将带有/demo-server 的请求转发给下一行的具体服务，进行转发的url不会含有/demo-server
    location /demo-server  { 
            # 本机ip+端口 = 具体服务
            proxy_pass http://127.0.0.1:8000/; 
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

	location /demo/ { 
            # demo/a.js + alias =>/txdisk/wxDemo/demo-html/a.js
            alias /txdisk/wxDemo/demo-html/; 
            index index.html;
            # 依次尝试查找文件, $uri指path部分
            try_files $uri $uri/ /index.html =404;
        }
```

- 安装目录新建
比如在/txdisk下 `mkdir /wxDemo`

### 发布
- 本地 `npm run build` 打包;（本地操作）
- 上传本地打包文件到frontend目录;(本地操作)
> `scp -r localdir(本地文件夹路径) root@ip:remotedir(远程文件夹路径)`
> 
> 如果权限不足，给对应文件夹加权限：chmod 777 dir(相对路径或者绝对路径)
- 可能需要登陆，参考第一步，然后cd到远程文件夹路径
- 删除老代码，重命名新代码
> `rm -rf infomap && mv build infomap`

### 启动node后台服务
```
nohup node app.js &
```

### 如果遇到服务跑不通的情况怎么处理？
![process](./nginx%E8%B0%83%E8%AF%95)
- 明白整个请求的流程
- `tail access.log / error.log` 查看前端请求是否成功打到了nginx
- 先在服务器跑服务端代码，看看curl或者localhost是不是能成功访问 `curl localhost:8000/getJsApiTicket`
- 在服务端代码加middleware，记录日志 
```js
app.use(function(req, res, next) {
    console.log(req.originalUrl);
    next();
})
```

### 命令
命令 | 注解
-- | --
lsof -i :8000 | 查看端口
kill -9 PID | 停止某个pid的服务
ps -aux | 查看全部在跑的服务
 