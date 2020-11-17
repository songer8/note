//翻转字符串

function reverse(string) {
    let arr = string.split('');
    arr.reverse();
    let newString = arr.join('');
    console.log(newString);
}

let string = "hello"
reverse(string);


//给定两个数字数组，判断第一个数组，是否包含第二个数组的所有项

function compare(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {

        // 判断数组1是否包含数组2的第i项；
        let isContained = false;
        for (j = 0; j < arr1.length; j++) {
            // 找到数组2的第i项；
            if (arr1[j] == arr2[i]) {
                isContained = true;
                break;
            }
        }
        // 如果没有找到；
        if (!isContained) {
            return false;
        }
    }
    //每一项都找到了；
    return true;
}

let arr1 = [2, 7, 5, 9, 3]
let arr2 = [2, 3, 5]
console.log(compare(arr1, arr2));


let a = 1;
if (true) {
    a = 2;
}
console.log(a);


//给定两个数字数组，判断第一个数组，是否包含第二个数组的所有项
function find(bigArr, smallArr) {
    for (i = 0; i < smallArr.length; i++) {
        let isInclude = false;
        for (j = 0; j < bigArr.length; j++) {
            if(smallArr[i] == bigArr[j]){
                isInclude = true;
            }
        }
        if(!isInclude){
            return false;
        }      
    }
    return true;
}

let bigArr = [1, 3, 2, 6, 8, 5];
let smallArr = [1, 5, 7];
console.log(find(bigArr,smallArr))
