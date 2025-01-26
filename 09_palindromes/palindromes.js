const palindromes = function (string) {
    const lettersOnly = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = lettersOnly.split("").reverse().join("")
    if (lettersOnly === reverse) {
        return true;
    } else {
        return false;
    }
};

palindromes("Hello")

// Do not edit below this line
module.exports = palindromes;
