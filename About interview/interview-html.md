# HTTP状态码
### 重点：
- 2**：成功
200：OK
201：Created 新增成功
- 3**：重定向
301：Moved Permanently 永久重定向
302：Found 临时重定向(l临时停服)
- 4**：客户端错误
403：Forbidden 权限不足
404：Not Found 请求失败
- 5**：服务端错误
500：Internal Server Error 服务端错误

### 明细：
https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81


# http请求方式
### 分类
- get 查询
- post 修改
- put 新增
- delete 删除
- options 预检请求（用于跨域访问）

### get和post的区别
- get请求都是以query string的方式，接在general里面的request url上面；
- post要带的信息是body里面的request payload里面，不在url上面

# SEO优化
- head标签里面的description和keywords命中关键词
- ssr（server side render）服务端渲染
- 伪静态:伪静态是给爬虫准备一份纯HTML
- 用户停留页面时长
- 外链：其他页面对于当前页面的引用
违规操作：（1）套娃（2）伪静态
- 页面存在的时间
- 百家号（自媒体平台）
- 语义化的HTML标签（选择符合语义的标签）
- img alt属性（鼠标放到这个图片上时，就会显示alt里的内容）
- url重写

# web会话跟踪
- cookie&session
session把用户数据以对象形式保存在服务端，同时生成一个sessionId，并且以setCookie的方式，放在Response headers里面，返回给浏览器。
![cookie](../image/cookies&session.png)

- token（包含用户信息的加密的串）
用户首次登陆，通过加密算法，将明文部分（eg：uid）+ 明文部分和秘钥生成的加密文件，放在cookie里面返回浏览器。当用户之后请求数据的时候，cookie中携带的token在服务端解密，明文部分和加密文件中的明文部分一致，则用户身份通过验证，可直接从token上获取需要的字段。

- token相较于session的优点
session对于数据库请求的压力很大，token则自带需要的信息，可以直接从token上取。

# viewpoint的使用
``` <meta name="viewport" content="width=device-width, initial-scale=1.0"> ```
还可能用到的设置：minimum-scale、maximum-scale(最大缩放值)、user-scalable（是否允许缩放）；

            <input type="text" ref={input => this.msgInput = input}/>{' '}