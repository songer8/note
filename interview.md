- code spilt
在react引入时，通过以下方式引入，外加webpack配置，可以实现分开打包。
用于优化首页加载速度。
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
promise的常用方法有 all（全部成功，返回），race（返回第一个，不管resolve或reject），any（第一个成功的）等

- 观察者模式
观察者模式主要是将同步调用，改为异步监听的一种方法
像react的state变化，引起组件重新渲染，本质上都是利用了观察者模式
实现逻辑主要是维护一个数组，用于保存监听函数，在数据变化的时候，遍历数组并执行监听函数
如果再细化一点的话，数组里可以不仅存储监听函数，还可以存储监听了哪个数据，只有对应数据变化了，才去执行对应的函数

- chrome插件
读取个人全部文章，用fetch获取每篇文章的HTML，然后利用HTML转markdown的库将文章转为markdown，最后利用a标签download属性，模拟点击，下载到本地

- 打点
记录操作日志或者异常
服务端提供API，必须是get方法。
为了防止跨域问题，append一个gif到html里面，用gif的src属性传值，将要打点的数据以query string的形式坠在url后面

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
原型就是prototype，实现面向对象，js没有类，用函数实现类，用原型实现类的继承；
什么是继承？eg：dog类继承animal类；

- js基础类型
number string boolean undefined null
symbol：保证变量唯一性
Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

- 变量类型
基础类型、引用类型

- 如何判断数据类型
typeOf：判断string,number,boolean,undefined,function，obj，最常用的typeOf 
instanceOf：判断arr、obj、null,还能判断是否是某个类的实例（eg：auto instanceOf Car //true 大众是不是Car类的实例）；

- es6
let const promise 箭头函数 set 解构赋值 class

- promise
promise是个类；
promise他不会影响后面代码的执行，只有等异步事件回掉的时候，才会执行then方法；
而await会block后续代码的执行；
ps：await必须用在async函数里面；
async await 如何捕获错误 try...catch...
async函数是异步执行的，但是await会阻塞，是promise的语法糖。

- var let const
let:只在当前花括号内有效
const：常量。如果是引用类型，引用地址不变，内部属性不可控制。eg：const a = [1,2,3] a.push(4) //a = [1,2,3,4]
var：function内定义，只在function内有效；if，for之类语句类的，无法隔离，外面也有效

- 事件循环
浏览器中 JavaScript 的执行流程和 Node.js 中的流程都是基于 事件循环 的
事件循环是异步回掉的机制（类似于只开一个窗口，排队拿号）
promise是微任务，setTimeout是宏任务；
在执行下一个宏任务前，会先将微任务清空；

- 事件代理
将原本注册在li上的事件，注册到ul上，作用：减少事件注册的次数，动态增加子元素

- 事件模型
冒泡、捕获，默认冒泡。

- 浏览器渲染过程
解析HTML,构建DOM树
构建css树
合并成渲染树
布局：计算出每个节点在屏幕中的位置
显示：画面显示

- setState是异步还是同步？
setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。
React中会去维护一个标识（isBatchingUpdates），判断是直接更新还是先暂存state进队列。
原因是每次state变化都立即更新，会带来巨大的性能消耗。
可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

- useState为什么不能循环？，这个问题应该是不能放在逻辑分支
state是组件外部管理，是按照循序记录state的对应关系，也就是：useState里面数据值和组件里面是按顺序匹配的

- react router是如何做到切换url，但是页面没刷新？
本质上是在切换dom，没有加载新的页面；
我们用HashRouter 在切换hash的时候，是不会向服务端发请求；
ps：BrowserRouter，是给服务端法请求，需要服务端配合，每次返回一个同一个html，如果做了缓存（304），从浏览器本地拿。

- 为什么要用intersection observer
用scroll，会引起重排重绘，要手工做截流；
intersection 是浏览器原生实现的；api友好，直接可以判断是否出现了，出现百分比多少，比预估scroll-top要方便，减少手工代码量；
封装曝光打点；

- 懒加载


- 闭包
函数里面return一个函数就是闭包；
好处：内部函数能读到外部函数的变量；
害处：在ie9之前存在内存泄漏；但是现代浏览器默认使用标记清除作为垃圾回收的方法，已经不存在内存泄漏的问题了。（js垃圾回收机制：1、引用计数 2、标记清除）
eg：debounce，throttle

怎么看内存占用：chrome performance timeline

2021.10.24
- 深拷贝&浅拷贝
切断最外层引用关系为浅拷贝
切断所有层的引用关系为深拷贝
举个例子，就是遍历一个数组，把里面的每一项都放到一个新数组里面就是浅拷贝

- context和redux分别的使用场景

2021.10.25 天壤智能
- 笔试题
```js
// 1、已知Person类有两个属性：姓名（字符串）和老师（Person类型，可能为null），请定义该类

type IPerson: Person
class person{
    constructor(name: String, teacher: Iperson){
        this.name = name
        this.teacher = teacher
    }
}

// 2、请实现深度比较函数，判断两个Person实例是否值相等
/**
*深度比较，判断两个对象是否值相等
*@param p1{person} 可能为null
*@param p2{person} 可能为null
*@return {boolean}
*/

function isEquals(p1, p2){
    if((p1 === null && p2 !== null) || (p1 !== null && p2 === null)) {
        return false;
    }
    if(p1 === null && p2 === null) {
        return true;
    }
    if(p1.name !== p2.name) {
        return false;
    }
    return isEquals(p1.teacher, p2.teacher);
}

//3、请写一个Function组件，将Person的实例渲染出来

function Item({person}) {
    return (
        <div>
            { person && 
                <>
                    <h1>{person.name}</h1>
                    <Item person={person.teacher} />
                </>
            }
        </div>
    )
}
<Item person={person}>

function Item({children}) {
    return (
        <div>
            { children && 
                <>
                    <h1>{children.name}</h1>
                    <Item>{children.teacher}</Item>
                </>
            }
        </div>
    )
}
<Item>{person}</Item>
```

- useCallback & useMemo
本质都是做缓存，useCallback是缓存函数，useMemo是缓存结果；
useCallback：因为函数组件每次执行的时候，里面的函数都会重新定义，函数的引用地址就会变，所以useCallback就是为了防止函数被重新定义，否则某些场景会出错；
```jsx
//basicList通用模板渲染table
    const fetchData = useCallback(async () => {
      console.log({ pagination });
      setLoading(true);
      let res = await listDataAction?.({
        ...form.getFieldsValue(),
        ...pagination
      });
      setLoading(false);
      if (res?.success) {
        console.log(res.data);
        setDataSource(res.data.list);
        setTotal(res.data.total);
      }
    }, [pagination]);

    useEffect(() => {
      if (!!listDataAction) {
        fetchData();
      }
    }, [fetchData]);//依赖fetchData，如果没用useCallback，则每次执行，函数的引用地址都会变，造成每次都会执行；
```
useMemo：防止函数重复执行
```jsx
const value = useMemo(fnM, [a]);
// 计算多选框
const currentFlattenedRowKeys = useMemo(
      () => flatten(Object.values(selectedRowKeys)),
      [selectedRowKeys]//只有选中的多选框变化了，才会重新执行函数
    );
```

2021.10.27 烈熊网络

- 闭包是什么？好处/坏处 （上面有写）

- 堆和栈
基础数据类型都是直接存储在栈（stack）
引用数据类型是存在堆（heap）里面，
js里面只会比较栈，基础数据类型相同内容就相同，而引用数据类型，内容相同，引用地址不同，也是不同的。
```
let obj2 = obj1 //则他们的引用地址是一样的
```

- 什么是类？类的继承是如何实现的？
原型是函数上面的一个属性，里面存储类的所有实例共享的属性和方法。
属性的继承就是在子类的构造函数里面call父类的构造函数；
方法的继承就是子类的原型等于父类的实例；
```js
function Animal(name, legs){
    this.name = name;
    this.legs = legs
    this.colors = ['red', 'blue', 'green']
}
Animal.prototype.sayName = function(){
    console.log(this.name)
}

function Dog(name, legs, age){
    Animal.call(this, name, legs) // 第二次调用Animal，类似于bind
    this.age = age;
}

Dog.prototype = new Animal();//第一次调用Animal
Dog.prototype.sayAge = function(){
    console.log(this.age);
}
let woo = new Dog('旺财', 4, 10);
woo.sayName() //旺财
```

2021.10.29中证指数证券公司

- 生命周期函数
componentDidMount 挂载时执行
componentDidUpdate 组件更新时执行
componentWillUnmount 组件卸载时执行，比方说useEffect里面写了定时器
shouldComponentUpdate 判断组件是否需要更新，类似于React.memo
getDerivedStateFromProps 

- css选择器

- css水平垂直居中
```css
//flex 
justify-content: center;
align-items: center;

//margin 配合 transform
margin: 50% auto 0;
transform: translate(0, -50%);

//linehight 文字元素内居中 line-height和height同高
height: 50px;
line-height: 50px;
text-align: center; //水平居中，配合line-height使用，文字水平垂直居中
vertical-align: middle; //管子元素的垂直位置，但是经常不生效

```

- redux
action是定义动作
reducer是改变store

- 函数组件和类组件的区别
类组件是类，函数组件是函数
类组件通过React.Component获得生命周期函数方法，来控制组件；
函数组件通过hooks来控制组件

- webpack plugin
webpack的插件，可以做各种事情，比如htmlWebpackPlugin，用于将打包好的js插入html

