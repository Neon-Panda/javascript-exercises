const sumAll = function(firstInt, secondInt) {
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) return "ERROR";
    if (firstInt < 0 || secondInt < 0) return "ERROR";
    if (firstInt > secondInt) {
        const temp = firstInt
        firstInt = secondInt
        secondInt = temp
    }

    let totalSum = 0;

    for (let i = firstInt; i <= secondInt; i++) {
        totalSum += i
    }
    
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
