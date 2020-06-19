# 基本理解及使用
```html
<html>
  <head>
    <script src="../js/react.js"></script>
    <script src="../js/react-dom.js"></script>
    <script src="../js/browser.min.js"></script>
  </head>
  <body>
    <div id="example1"></div>
    <div id="example2"></div>

    <script type="text/babel"> 
    //1、定义组件
    // 方式1：函数组件(简单组件)
    function MyComponent(){
        return <h2>函数组件(简单组件)</h2>
    }

    // 方式2：ES6类组件（复杂组件）
    class MyComponent2 extends React.Component{//定义一个叫做MyComponent2的类，它继承了react的component类的属性
                    render(){//方法
                        return <h2>ES6类组件（复杂组件）</h2>
                    }
                }
    // 2、渲染组件标签 
    ReactDOM.render(<MyComponent />,document.getElementById('example1'));
    ReactDOM.render(<MyComponent2 />,document.getElementById('example2'));
    <!--渲染<MyComponent2 />，创建MyComponent2的实例对象，且调用render方法，得到一个虚拟dom并显示；-->

    </script>
  </body>
</html>

```
# 组件三大属性
## state
- 编码操作
1、初始化状态
2、读取某个状态值
3、更新状态 => 组件界面更新
```jsx


```

## props

## refs与事件处理
