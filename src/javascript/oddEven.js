var isEven = function (x) { return x % 2 === 0; };
var isOdd = function (x) { return !isEven(x); };
module.exports = {
    isEven: isEven,
    isOdd: isOdd
};
