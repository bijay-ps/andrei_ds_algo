function selectionSort(arr) {
    let len = arr.length;

    for(let i=1; i<len; i++) {
        // set current index as minimum
        let min = i;
        let temp = arr[i];

        for(let j=i+1; j<len; j++) {
            // update the minimum if the current value is less than the min
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
    
    return arr;
}