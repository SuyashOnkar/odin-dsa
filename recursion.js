function sumRange(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

function factorial(number) {
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function all(arr, callback) {
  let copy = [...arr];
  if (copy.length === 0) return true;
  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr.shift() * productOfArray(arr);
}

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

function totalIntegers(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  let first = arr.shift();
  if (Array.isArray(first)) {
    total += total + totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(arr);
}

function SumSquares(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  let first = arr.shift();
  if (Array.isArray(first)) {
    total += total + SumSquares(first);
  } else if (Number.isInteger(first)) {
    total += first ** 2;
  }

  return total + SumSquares(arr);
}

function replicate(times, number) {
  if (times < 1) {
    return arr;
  }
  return [number].concat(replicate(times - 1, number));
}
