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

# DOM和BOM的区别
### DOM
是Document Object Model的缩写，即文档对象模型。他们都是浏览器提供给JavaScript的API接口。

### BOM
是Browser Object Model的缩写，即浏览器对象模型。

### 常用BOM对象

- history：

当前浏览的历史记录；

用法：history.push("页面链接")

React Router 用的是history管理，用来管理url对应组件关系的路由。

- location

用法：location.href/location.search/location.domain

- navigator

存储浏览器信息

用法：navigation.useragent

![dom&bom](../image/dom&bom.png)

# 相比html,html5新增了哪些结构标签？
- 结构标签语义话，便于代码阅读；
- aside 侧边
- section 区块
- header 顶bar
- nav 导航栏
- footer 底bar（企业资质信息）

# 重排&重绘
### 触发重绘的条件：
改变元素外观属性。如：color，background-color，font-size等。

### 触发重排的条件：

任何页面布局和几何属性的改变都会触发重排，如下：
- 增删DOM元素
- 元素位置、尺寸变化，如：width、height、pading、margin、position
- 浏览器尺寸变化、文本的改变或图片大小改变
- 获取元素高宽（为了保证拿到的高宽是准确的，系统每次都是强制清空队列，即flush。如：offset-top（离浏览器上方的距离）、scroll-top（滚动条距离上边缘的距离）；

### 优化
- 浏览器批处理（浏览器自优化）
- 把需要的数据存在变量里面，不要经常访问浏览器的flush队列属性。如：循环li，放到一个数组里面，最后一起append到ul里面，可以变面多层次重排；
- 使用DocumentFragment创建完后一次性的加入document

# 发送请求依次经过哪些节点
1、客户端
2、浏览器是否命中强制缓存或者协商缓存？
3、域名通过DNS解析成ip地址；
4、建立链接，TPC 3次握手；
5、发送HTTP请求至CDN，看CDN有没有缓存；
6、没有的话，达到网关服务器Nginx（负载均衡）；
7、再由Nginx将请求分配到某一台服务器上面；

# TCP和UPD的区别
- TCP协议
用来建立客户端和服务端之间的链接；通过规定格式的来传递数据；
三次握手确保了双方通讯畅通，因此是一种连接的、可靠的、基于字节流的传输层通信协议；

- UDP协议
不校验对方是否收到数据，优先建立链接，因此比较TCP,并不可靠；
应用场景：直播/视屏；

# 缓存
- 为什么要有缓存？
所有请求都是请求的资源，资源缓存，可以节省贷款、提高加载速度、降低服务器压力；
http缓存机制主要在http响应头中设定，响应头中相关字段为Expires、Cache-Control、Last-Modified、Etag。

- 缓存类型
1、强制缓存
浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK
通过：Expires、Cache-Control、max-age
2、协议缓存
向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；
通过：ETAG和hash串进行比对；


**详细说明**：https://juejin.im/post/5ccfccaff265da03ab233bf5

# 闭包

# 跨域访问

# 前端性能优化的方案

