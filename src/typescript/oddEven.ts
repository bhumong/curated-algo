const isEven = (x: number) => x % 2 === 0
const isOdd = (x: number) => !isEven(x)


for (let index = 0; index < 10; index++) {
    console.log({isEven: isEven(index), index})
}