### React相关JS库
- react.js:核心库（必须）
- react-dom.js:提供DOM操作的react扩展库(必须)
- babel.min.js:解析JSX语法代码，转化为JS的语法代码的库

### 实现效果的基本语法
```html
<html>
  <head>
    <script src="../js/react.js"></script>
    <script src="../js/react-dom.js"></script>
    <script src="../js/browser.min.js"></script>
  </head>
  <body>
    <div id="test"></div>
    <script type="text/babel"> //告诉bable.js解析里面的jsx的代码
    //1、创建虚拟dom元素对象
    var vDom = <h1>Hello</h1> //hello没带引号，不是字符串
    //2、将虚拟dom渲染到页面的真实dom容器中；
    ReactDOM.render(vDom,document.getElementById('tset'));
    </script>
  </body>
</html>
```

### JSX
- 虚拟dom的2种创建方式
```html
<body>
    <div id="test1"></div>
    <div id="test2"></div>

    <script type="text/javascript">
    const msg = 'hello';
    const myId = 'test';

    //1、非JSX方法
    var vDom1 = React.createElement('h2',{id:myId},msg);
    ReactDOM.render(vDom1,document.getElementById('tset1'));

    <script type="text/babel">
    //2、JSX方法
    var vDom2 = <h3 id = {myId}>{msg}</h3> 
    //<>内部是标签代码，{}内部执行的都是js代码
    ReactDOM.render(vDom2,document.getElementById('tset2'));
    </script>
  </body>
```

- 虚拟dom和真实dom区别和关系

关系：虚拟dom都会转化成真实dom

区别：虚拟dom比较轻，且前端渲染，无需刷新页面；

### 如何将一个数据的数组转化为一个标签的数组；

使用arr.map方法：
```html
<body>
    <div id="test"></div>
    <script>
        const names = ['tom','jim','alice','rose'];
        const ul = (
        <ul> {names.map((name, index) => {return <li key={index}>{name}</li>})
        }</ul>
        )

        ReactDOM.rener(ul,document.getElementById('test'));
    </script>
</body>
```
