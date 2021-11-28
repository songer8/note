let arr = [1, 6, 4, 7, 8, 4, 3, 0];
let point = arr.length - 1;
for (let i = point; i > 0; i--) {
    for (let j = point; j >= point - i; j--) {
        let temp;
        if (arr[j] < arr[j - 1]) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp
        } else {
            continue;
        }
    }
}
console.log(arr);