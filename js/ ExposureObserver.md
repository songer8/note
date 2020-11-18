### 曝光打点
1. 通过监听scroll-top的变化；
- 性能不好，拖动的过程中会反复触发；

```js
window.onscroll = function (e) {
  // 当页面的滚动条滚动时,会执行这里的代码
  // 回掉函数里面监听到顶部的距离；
}
```
- 优化：加标记值，默认false，作为if条件，目的标记位打点只触发一次；

2. intersection Observer Api；

- 步骤
new一个实例；
entries为存放待打点的元素的数组；
threhold表示元素出现多少时，触发回掉（ps：0时默认触发，如不需要，加判断）；
io.observe(elementA); 调用方法；

- 在react中的应用例子：

```js
    useEffect(() => {
        var io = new IntersectionObserver(
            (entries) => {
                if (entries[0].intersectionRatio == 1 && hasGoHomeBtnShownRef.current == false) {
                    console.log(entries[0].target);
                    console.log(entries[0].intersectionRatio);
                    timerRef.current = setInterval(() => {
                        setTime(time => time - 1);
                    }, 1000);
                    hasGoHomeBtnShownRef.current = true;
                }
            },
            { threshold: 1.0 }
        );
        io.observe(buttonEl.current);
    }, [])
```