### 登陆服务器
`ssh username@ip`
### 安装
`apt install nginx`
### 配置
- nginx安装在 `/etc/nginx`下;
- 新建目录 `/var/www/frontend`;(代码存放目录)
> cd `/var/www && mkdir frontend`(新建文件夹名称)
- 配置nginx规则;
> `cd /etc/nginx/conf.d && touch infomap.conf`新建文件
> `vi infomap.conf`进入infomap.conf
 - i 编辑
 - esc 退出编辑
 - :q 退出
 - :wq 保存退出
 - :q! 强制退出
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
- 删除老代码，重命名新代码
> `rm -rf infomap && mv build infomap `
- 重启nginx`service nginx restart`

