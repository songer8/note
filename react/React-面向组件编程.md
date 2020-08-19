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
### 定义
组件内部的状态

### 用法概述
1、初始化状态
```
this.state = {statePropertyName1 : value1}
```
2、读取某个状态值
```
this.state.statePropertyName
```
3、更新状态 => 组件界面更新
```
this.setstate({statePropertyName2 : value2})
```

### 例子
```jsx
<body>

<div id="example"></div>

<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">
  /*
  需求: 自定义组件, 功能说明如下
    1. 显示h2标题, 初始文本为: 你喜欢我
    2. 点击标题更新为: 我喜欢你
  */
  class Like extends React.Component {
    constructor (props) {
      super(props)
      // 初始化状态
      this.state = {
        isLikeMe: true
      }
    }

    //更新isLikeMe的状态
    //ps：非component组件内的方法，必须使用箭头函数，否则this默认不是组件对象，而是undefined；（可使用bind方法，将新增加的方法绑定为组件对象）；
    change = () => {
      this.setState({
        isLikeMe: !this.state.isLikeMe
      })
    }

    render () {
      //读取状态
      console.log('render()')
      const text = this.state.isLikeMe ? '你喜欢我' : '我喜欢你'
      return <h2 onClick={this.change}>{text}</h2>
    }
  }
  ReactDOM.render(<Like />, document.getElementById('example'))
</script>
</body>

```

## props
### 定义
从外部拿数据
### 用法概述
1、标签内部读取属性值
```JSX
class Buttom extends React.Component{
  render(){
    return <buttom>{this.props.buttomName}</buttom>
  }
}
```
2、props的属性值设置类型限制和必要性限制
```JSX
Buttom.propTypes = {
  buttomName:propTypes.string.isRequired
}
```

3、默认属性值设置
```JSX
class Buttom extends React.Component{
  static defaultProps = {
  buttomName:'按钮'
}

  render(){
    return <buttom>{this.props.buttomName}</buttom>
  }
}

```

## refs与事件处理
### 定义
类似于选择器的功能

### 用法概述
```JSX
//写在render(){return()}里面
<input type="text" ref = "content" />
<input type="text" ref = {(input) => this.input = input } />
```