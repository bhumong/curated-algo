function generateCharacter(arr, numChar) {
    if (!Array.isArray(arr) || isNaN(numChar)) {
        throw new Error("invalid params");
    }
    let allCombination = [];
    let inLooping = function (arr, step, current = '') {
        if (step > 0) {
            for (let index = 0; index < arr.length; index++) {
                let element = current + arr[index];
                if (element.length == numChar) {
                    allCombination.push(element);
                }
                inLooping(arr, step - 1, element)
            }
        }
        return allCombination
    }
    inLooping(arr, numChar)
    return allCombination;
}
module.exports = {
    generateCharacter
}