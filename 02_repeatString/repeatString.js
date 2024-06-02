const repeatString = function(string, times) {
    if (times < 0)
    {
        return "ERROR";
        }
    
    let ans = "";
    for (let i = 0; i < times; i++)
    {
        ans += string;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
