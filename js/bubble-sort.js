let numberArray = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];

function bubbleSort(array) {

    let sortedArray = array.slice(0);

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

console.log(bubbleSort(numberArray));
console.log(numberArray);