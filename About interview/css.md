- 页面导入样式时，使用link和@import有什么区别？
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>

<style>
  @import "style.css";
</style>

从属关系：link属于html的标签，可以定义rel等属性，rss
加载顺序：
兼容性：
dom操作可执行性：
```

- CSS常用选择器
类选择器 ``` .class``` ```标签上2个class .class1.class2 ```
标签选择器 ``` button```
id选择器 ``` #id```
后代选择器 ``` div>span```
嵌套在元素中的元素 ``` .ulelement_firstLi ```
伪类选择器``` button:hover ```//悬停在按钮上，样式会、、、
伪元素选择器 ``` p::first-line ``` //每个p元素第一行会、、、

- 可继承属性
color
font-
text-
list-style-
etc...

- 画三角形 ：通过设置boder
```html
<body>
<div class='rect'></div>
<style>
    .rect {
      width: 0;
      height: 0;
      background-color: #fff;
      border-right: 100px solid transparent;
      border-left: 100px solid transparent;
      border-top: 100px solid rgb(29, 156, 194);
      border-bottom: 100px solid transparent;
    }
</style>
</body>

- 