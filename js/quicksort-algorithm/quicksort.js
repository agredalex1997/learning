let unsorted = [10, 70, 20, 50, 60, 5, 100];

function quicksort(array) {
  if (array.length > 2) {
    let pivotPos = Math.floor(array.length / 2);
    let pivot = array[pivotPos];

    for (let i = 0; i < array.length; i++) {
      if (array[i] > pivot && i < pivotPos) {
        array.push(array[i]);
        array.splice(i, 1);
      } else if (array[i] < pivot && i > pivotPos) {
        array.unshift(array[i]);
        array.splice(i + 1, 1);
      }
    }

    return quicksort(array.slice(0, pivotPos)).concat(quicksort(array.slice(pivotPos, array.length)));
  } else {
    return array;
  }
}

console.log(unsorted);

console.log(quicksort(unsorted));