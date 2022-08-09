## 常用方法
- 数组初始化
```js
//一维数组
let arr1 = new Array(26).fill(0)

//二维数组，用以上方法初始化会造成应用数据问题
for(let i = 0; i < 26; i++) {
    arr[i] = new Array();
    for(var j = 0; j < 3; j++) {
        arr[i][j] = 0;
    }
}
```

- 26个字母code转化
```js
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

```

## 类型分类