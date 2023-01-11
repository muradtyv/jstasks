
const mergeSort = (left, rigth) => {

    let result = [];

    while (left.length > 0 && rigth.length > 0) {
        result.push(left[0] < rigth[0] ? left.shift() : rigth.shift());
    }
    result = result.concat(left).concat(rigth);
    return result;
}

const divide = (arr) => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = divide(arr.slice(0,mid));
    const rigth = divide(arr.slice(mid));

    return mergeSort(left, rigth);
}

const arr = [96, 35, 1, 85, 56, 2, 74, 1, 2, 34];

console.log(divide(arr));
