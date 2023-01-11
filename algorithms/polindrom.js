const value = "tokya";

const isPolindrom = (value) => {
    const reverseValue = value.split("").reverse().join("");
    if (reverseValue === value) {
        return true;
    } else {
        return false;
    }
    //or 
    // return reverseValue === value;
}
console.log(isPolindrom(value));