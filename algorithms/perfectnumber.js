const number = 29;
let sum = 0;

for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        sum+=i;
    }
}

if(number == sum){
    console.log(number + " is perfect")
}else{
    console.log("normal number ")
}