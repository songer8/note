概念概述：
-----

CSS Grid将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Grid 布局与 FLEX布局有一定的相似性，但与FLEX布局不同，Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。

属性：
---

以下例子简单说明CSS Grid的属性。
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>Document</title>
    </head>
    <body>
        <div class="grid-container">
            <div class="grid-item1"></div>
            <div class="grid-item2"></div>
            <div class="grid-item3"></div>
        </div>
    </body>
    </html>
```

![](https://pic3.zhimg.com/v2-5d748fc802d645f36715ecf515861c2a_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1046' height='492'></svg>) -->

上图仅使用基础样式

*   **display: grid**指定一个容器采用网格布局。
*   **grid-template-columns**属性定义每一列的列宽。
```css
    .grid-container {
        display: grid;
        grid-template-columns: 200px 100px;
    }
```
![](https://pic1.zhimg.com/v2-390dd89716df1d5aeb26cc41f0dcc37c_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1010' height='344'></svg>) -->

上图使用绝对单位，指定列宽

*   **fr 关键字**，为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。
```css
    .grid-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
```

![](https://pic3.zhimg.com/v2-ff1acbbf36d378a211214fe6c9ef13ee_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1050' height='348'></svg>) -->

上图使用fr，自动横向撑满

*   **repeat()**；网格很多时。这时，可以使用repeat()函数，简化重复的值。
```css
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 100px);
    }
```

![](https://pic2.zhimg.com/v2-8bb8514136f476bda93c24cfcc2b8339_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1040' height='196'></svg>) -->

*   **grid-template-rows**属性定义每一行的行高。
```css
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: 200px 150px;
    }
```

![](https://pic2.zhimg.com/v2-87045a917c6f922637dd359868621ac9_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1040' height='782'></svg>) -->

为了查看效果，上图又增加2个div，显示行高设置

*   **grid-auto-rows**用于指定默认行高，被指定的行高不受其限制。**grid-auto-columns**同理。
```css
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-auto-rows: 150px;
        grid-template-rows: 200px;
    }
```

![](https://pic3.zhimg.com/v2-654dc33052f06bc4e9c7712266a4c746_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1056' height='776'></svg>) -->

*   **minmax()**，函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。如下图所示，内容多div高度为auto，无内容的则为默认高度150px。
```css
    .grid-container {
        display: grid;
        grid-template-columns: 200px 250px;
        grid-auto-rows: minmax(150px, auto);
    }
```

![](https://pic2.zhimg.com/v2-d95b7f631e89ed076e0a192b2c7940e1_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1018' height='852'></svg>) -->

*   **grid-gap** / **grid-colunm-gap** / **grid-row-gap** 用于用于设置行/列间距，现已被MDN删除，不做赘述；

  

*   **grid-template-areas**属性用于定义区域。以下代码设定grid-item1为header，因此grid-item1撑满整行，高度为150px；第二第三行均为左边sidebar，右边content，因此item2宽度200px，高度300px；同理item3高度250px，高度300px；
```css
    .grid-container {
        display: grid;
        grid-template-columns: 200px 250px;
        grid-auto-rows: minmax(150px, auto);
        grid-gap: 20px;
        grid-template-areas: 
            'header header'
            'sidebar content'
            'sidebar content'
        ;
    }
    .grid-item1 {
        grid-area: header;
    }
    .grid-item2 {
        grid-area: sidebar;
    }
    .grid-item3 {
        grid-area: content;
    }
```

![](https://pic4.zhimg.com/v2-b869fa9294c843c68881ddc9a69c4857_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1038' height='850'></svg>) -->

*   **grid-column** / **grid-row**，grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

以item1举例，item1占据第一行，从第一根列线到第三根列线。
```css
    /* 方式2 */
    .grid-container {
        display: grid;
        grid-template-columns: 200px 250px;
        grid-auto-rows: minmax(150px, auto);
        grid-gap: 20px;
    }
    .grid-item1 {
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .grid-item2 {
        grid-row-start: 2;
        grid-row-end: 4;
    }
    .grid-item3 {
        grid-row-start: 2;
        grid-row-end: 4;
    }
```

以上方式item1也可以写作以下方式，表示整行。
```css
    grid-column: 1 / -1;
```
*   **span关键字**，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。也可以达到刚才上图的效果
```css
    /* 方式3 */
    .grid-container {
        display: grid;
        grid-template-columns: 200px 250px;
        grid-auto-rows: minmax(150px, auto);
        grid-gap: 20px;
    }
    .grid-item1 {
        grid-column: span 2;
    }
    .grid-item2 {
        grid-row: span 2;
    }
    .grid-item3 {
        grid-row: span 2;
    }
```    

*   **justify-content** & **align-content** / **justify-items** & **align-items**

下图以justify-content: center为例，整个内容区域在容器里面的水平位置（左中右），align-content同理。
```css
    .grid-container {
        display: grid;
        grid-template-columns: 200px 250px;
        grid-auto-rows: minmax(150px, auto);
        grid-gap: 20px;
        justify-content: center;
    }
```

![](https://pic2.zhimg.com/v2-3871d01786edd08cdbc28290a5189bd5_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1332' height='726'></svg>) -->

下图以justify-items：center为例，设置单元格内容的水平位置（左中右），align-items同理。
```css
    justify-items: center;
```
![](https://pic2.zhimg.com/v2-da86f8c5501c4f92ba0af9bab29f16f1_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='998' height='728'></svg>) -->

ps：默认状态下，上面这些属性默认为**stretch**，拉伸占据整个网格容器。

*   **justify-self** / **align-self** ，跟justify-items属性的用法完全一致，但只作用于单个项目。
```css
    .grid-item1{
        align-self: start;
    }
```
![](https://pic3.zhimg.com/v2-3bccce142712483d95edbd0b34b3c08a_b.jpg)

<!-- ![](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1058' height='724'></svg>) -->

  

参考链接：

[https://youtu.be/9zBsdzdE4sM](https://link.zhihu.com/?target=https%3A//youtu.be/9zBsdzdE4sM)

[CSS Grid 网格布局教程 - 阮一峰的网络日志](https://link.zhihu.com/?target=https%3A//www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

[grid-template - CSS（层叠样式表） | MDN](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template)