const num1 = 284;
const num2 = 687;

let total1 = 0;
let total2 = 0;

const isFriend = (number1, number2) => {

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i;
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            total2 += i;
        }
    }

    return ((total1 == number2 && total2 == number1) ? "numbers are firend" : "not friend");
}

console.log(isFriend(num1,num2));