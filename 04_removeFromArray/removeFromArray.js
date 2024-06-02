const removeFromArray = function (array, ...arg) {
    console.log("Hello")
    for (let i = 0; i < arg.length; i++) {
       
        let j = 0;
        while (j < array.length) {
            if (arg[i] === array[j]) {
                console.log(array[j]);
                array.splice(j, 1);
            }
            else
            {
                j++;
                }
        }
    }
    return array;
};


console.log(removeFromArray([1, 2, 3, 4], 4))

// Do not edit below this line
module.exports = removeFromArray;
