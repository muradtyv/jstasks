const arr = [1, 2, 3, 5, 7, 8, 9, 15];
let x = 0;
let arrLength = arr.length - 1;

const binarySearch = (num) => {
    while (x <= arrLength) {
        let midNum = Math.floor(x + (arrLength - x) / 2);

        if (arr[midNum] == num) {
            return midNum;
        }
        if (arr[midNum] < num) {
            x = midNum + 1;
        } else {
            arrLength = midNum - 1;
        }
    }
    return -1;
}
console.log(binarySearch(3));