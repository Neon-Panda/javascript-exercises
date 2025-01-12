const repeatString = function(string, repeatTimes) {
    fullString = ""
    if ( repeatTimes < 0) {
        return `ERROR`
    }
    for (; repeatTimes > 0; repeatTimes--) {
        fullString += string
    }
    return fullString
}

// Do not edit below this line
module.exports = repeatString;
