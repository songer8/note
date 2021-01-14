### function
#### 定义function的方式
- 声明式
```js
function add(x,y){
    return x+y;
}
let result = add(1,2);//要使用函数的返回值，只能定义一个值收它；
```
- 对象字面量方式
```js
const add = ()=> {
    return x+y;
}
```
ps：面向字面量表达式一定要放在使用这个函数的代码的前面定义，否则会因为执行顺序导致不执行此函数；