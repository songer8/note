//乱序数组排序

//从第一项开始，和i和i+1比值，大的往后；比length-1轮，每轮比前length-1项（递归）；
function bubbleSort(arr, length){
    for(i= 0; i<length; i++){
        if(arr[i]>arr[i+1]){
            swap(arr,i,i+1);
        }
    }
    if(length == 1) {
        return arr;
    }else{
        return bubbleSort(arr, length-1);
    }
}

let array = [3,4,16,9,10,4,29]
let sortedArr = bubbleSort(array, array.length)
console.log(sortedArr)

//每2项位置交换；
function swap(arr,i,j){
    let temp;
    temp = arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    // console.log(arr);
}

// swap([1,2,3],0,2);