const number = 15;
let isPrime = true;

for(let i = 2; i <number; i++){
    if(number % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("Prime number: "+isPrime)
}else{
    console.log("Prime number: "+isPrime)
}