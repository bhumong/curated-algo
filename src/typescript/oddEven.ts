const isEven = (x: number) => x % 2 === 0
const isOdd = (x: number) => !isEven(x)

module.exports = {
    isEven, isOdd
}