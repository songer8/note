- code spilt
```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

- 兼容性问题
audio autoplay失效问题
touchstart 触发播放和暂停；

- 性能优化
从performanceAPI获取性能数据，比如加载时间，dns解析时间等，这些数据作为打点接口的入参

- 分拆打包
1. 直接用webpack指定不同的打包入口，代码方面不需要任何改动
2. 动态打包
只需要代码层面改动，webpack不需要任何改动

- promise
首先Promise是一个类，它的作用是将同步逻辑异步化
应用场景包括定时器，接口请求等，比如fetch就是利用promise对ajax做的封装
promise内部维护了三个状态，pending，fulfilled，rejected，通过resolve和reject方法来触发内部状态的改变
promise的常用方法有 all，any等

- 观察者模式
观察者模式主要是将同步调用，改为异步监听的一种方法
像react的state变化，引起组件重新渲染，本质上都是利用了观察者模式
实现逻辑主要是维护一个数组，用于保存监听函数，在数据变化的时候，遍历数组并执行监听函数
如果再细化一点的话，数组里可以不仅存储监听函数，还可以存储监听了哪个数据，只有对应数据变化了，才去执行对应的函数

- chrome插件
读取个人全部文章，用fetch获取每篇文章的HTML，然后利用HTML转markdown的库将文章转为markdown，最后利用a标签download属性，模拟点击，下载到本地

- 打点
append一个gif到html里面，用gif的src属性传值，将要打点的数据以query string的形式坠在url后面

- map & forEach
map返回新数组，forEach没有返回值，undefined

- props
父传子
区别就是，props传的是个值还是个function
如果传的是个function，子组件可以通过执行这个function来改变父组件的状态

- react router
是路由，路由的作用是建立url和组件之间的关系

- context
在入口组件createContext，通过provider放进去一些属性或方法
在用的地方，通过usecontext取出来这些属性和方法

2020.12.24 掌门一对一
- 原型和原型链
原型就是prototype，js没有类，用函数实现类，用原型实现类的继承；
什么是继承？eg：dog类继承animal类；

- js基础类型
number string boolean undefined null
symbol：保证变量唯一性

- 变量类型
基础类型、引用类型？

- 如何判断数据类型
typeOf：除了arr和obj，都能判断
instanceOf：判断arr、obj、是否是某个类的实例（eg：auto instanceOf Car //true 大众是不是Car类的实例）；

- es6
let const promise 箭头函数 set 解构赋值

- promise
promise是个类；
promise他不会影响后面代码的执行，只有等异步事件回掉的时候，才会执行then方法；
而await会block后续代码的执行；
ps：await必须用在async函数里面；
async await 如何捕获错误 try...catch...

- var let const
let:只在当前花括号内有效
const：引用地址不变，内部属性不可控制
var：function内定义，只在function内有效；if，for之类语句类的，无法隔离，外面也有效

- 事件循环
事件循环是异步回掉的机制（类似于只开一个窗口，排队拿好）
promise是微任务，setTimeout是宏任务；
在执行宏任务前，会先将微任务清空；

- 浏览器渲染过程
解析HTML,构建DOM树
构建css树
合并成渲染树
布局：计算出每个节点在屏幕中的位置
显示：画面显示

- setState是异步还是同步？
异步；
什么情况是同步？
state值传的是函数的情况下，是同步；

- state为什么不能循环
state是组件外部管理，是按照循序记录state的对应关系；

- react router是如何做到切换url，但是页面没刷新？
本质上是在切换dom，没有加载新的页面；
我们用hash router 在切换hash的时候，是不会想服务端发请求；
ps：browser router，是给服务端法请求，需要服务端配合，每次返回一个同一个html，如果做了缓存（304）

- 为什么要用intersection observer
用scroll，会引起重排重绘，要手工做截流；
intersection 是浏览器原生实现的；api友好，直接可以判断是否出现了，出现百分比多少，比预估scroll-top要方便，减少手工代码量；
封装曝光打点；

- 懒加载


- 闭包
函数里面return一个函数就是闭包；
内部函数能读到外部函数的变量；
eg：debounce，throttle