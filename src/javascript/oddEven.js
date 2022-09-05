var isEven = function (x) { return x % 2 === 0; };
var isOdd = function (x) { return !isEven(x); };
for (var index = 0; index < 10; index++) {
    console.log({ isEven: isEven(index), index: index });
}
