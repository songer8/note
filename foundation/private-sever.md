- npm私服是需要另外搭建一套服务，里面放npm包
> 比如说我做了一个转日期格式的工具库，叫myMoment。
正常情况下，我可以把myMoment项目打包，发布到npmjs的公共库里，这样所有人想用这些功能，都可以通过 `npm install myMoment` 来安装。
但加入myMoment里有一些公司相关的代码，不适合发布到公共库里，那么我可以在公司内部服务器上，搭建一套npmjs的服务，模拟npm公共库。然后把myMoment打包发布到这个私服里，只有公司内部的人才可以通过npm install myMoment安装，外部的人装不到。

- 默认情况下，`npm install`安装包的地址如下：
```js
npm config set registry http://registry.npmjs.org
```

- 如果需要安装私服的包，则每个人需要设置一个全局配置 npm registry 为私服地址，就和你设置git set username类似。

- 另外一种方式是在项目里加个npmrc的配置文件，只对当前项目改registry
```js
registry=https://registry.npm.taobao.org
```
ps: 参考：https://juejin.cn/post/6983522411647860766

- 因为npm经常被封，或者网速不好，很多人会把registry设成淘宝的私服，淘宝的这个私服会每天跟npmjs公服同步，所以库都是最新的。
```js
npm config set registry https://registry.npm.taobao.org
```
- 然后就正常`npm install`