const removeFromArray = function(array, ...args) {
    removedArray = []
    for (let i = 0; i < array.length; i++)
        if (!args.includes(array[i])) {
            removedArray.push(array[i])
        }
    return removedArray
};

// Do not edit below this line
module.exports = removeFromArray;
