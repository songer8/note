### 类组件
- 使用生命周期函数 shouldComponentUpdate
```
比方props里面传了很多数据，但是只有姓名改变的时候，页面才需要重新渲染；
ps：姓名修改了，但是还是原来的姓名，页面也不会渲染；
```
### 函数组件
- useRef存数据
- usememo：用于保存函数执行结果
- usecallback：把函数用usecallback包一下，传到子组件不会每次都渲染；