//给定一个排序数组和一个目标值，在数组中找到目标值，并返回起索引。如果目标值不存在于数组中，返回它将会被顺序插入的位置；（默认数组中元素无重复）
//eg:输入[1,3,5,6],5 输出2

//1、for循环
//2、insert函数


function search(arr, target) {
    for (i = 0; i < arr.length; i++) {
        if (target == arr[i]) {
            return i;
        }
    }
    insert(target);
    return search(arr, target);
}

function search2(arr, target) {
    if (arr.indexOf(target) > -1) {
        return index = arr.indexOf(target);
    }
    insert(target);
    return search2(arr, target);

}

function insert(target) {
    arr.push(target);
    arr.sort();
}

//大宝
function search3(arr, target) {
    if(target>arr[arr.length-1]){
        return arr.length;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= target){
            return i;
        }
    }
}

let arr = [1, 3, 5, 6];
let target = 9;
console.log(search2(arr, target)); 