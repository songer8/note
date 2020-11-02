// 数组里面的5个数字，组成不重复的三位数
let array = [6, 8, 3, 1, 5];
// array.forEach(element => {
//     return element * 100;
// });

function task2(array){
    for (i = 0; i < array.length ; i++) {
        for (j = 0; j < array.length ; j++) {
            for (k = 0; k < array.length ; k++) {
                if (array[i] !== array[j] && array[j] !== array[k] && array[i] !== array[k]) {
                    console.log('' + array[i] + array[j] + array[k]);
                }
            }
        }
    }
}