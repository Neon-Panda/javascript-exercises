const fibonacci = function(number) {
    number = Number(number)
    if (number < 0) {
        return "OOPS"
    }
    if (number <= 1) {
        return number;
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
