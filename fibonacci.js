function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle, arr.length);

  result = merge(mergeSort(leftHalf), mergeSort(rightHalf));
  return result;
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

console.log(mergeSort([5, 3, 8, 10, 4, 1]));
