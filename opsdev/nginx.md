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

### 配置
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
        # root相当于替换url中的host
        root /var/www/frontend;
        index index.html;
        # 依次尝试查找文件, $uri指path部分
        try_files $uri $uri/ /index.html =404;
    }
}
```
### 发布
- 本地 `npm run build` 打包;（本地操作）
- 上传本地打包文件到frontend目录;(本地操作)
> `scp -r localdir(本地文件夹路径) root@ip:remotedir(远程文件夹路径)`
- 可能需要登陆，参考第一步，然后cd到远程文件夹路径
- 删除老代码，重命名新代码
> `rm -rf infomap && mv build infomap`
