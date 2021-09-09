function bubbleSort(arr) {
    let len = arr.length;
    for(let j=0; j<len; j++) {
        for(let i=0; i<len; i++) {
            if(arr[i]>arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp
            }
        }
    }
    return arr;
}

let nums = [99,101,-23,0,54,2,1,3,1,200,34,2]
const res = bubbleSort(nums);
console.log(res);