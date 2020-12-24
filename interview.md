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

