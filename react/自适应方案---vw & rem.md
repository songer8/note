# react 配置 px 转换为 vw

-》https://www.cnblogs.com/ljh330/p/14833300.html

修改 package.json

```js
//更改前
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
//更改后
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

# react 配置 px 转换为 rem
在cra项目/public/index.html里面加上以下代码
```js
  <script>
    (function (doc,win) {
      var docEl = doc.documentElement;
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return 
        //这里假设在375px宽度设计稿的情况下，1rem = 10px；
        docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
      }
      if(!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc,false);
    })(document, window);
  </script>
```