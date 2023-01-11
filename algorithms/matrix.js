const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let left = 1;
let right = 1;
let total;

for (let i = 0; i < data.length; i++) {
    left *= data[i][i];
    right *= data[i][data.length - (i + 1)];

}
total = left + right;

console.log(total)