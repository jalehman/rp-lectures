function accumulate(a, b, combine, start) {
  var result = start;
  for(var i = a; i < b; i++) {
    // combine should "combine" the previous result with the next i, returning
    // the "next" result
    result = combine(result, i);
  }
  return result;
}

function factorial(n) {
  var combine = function(result, i) {
    return result * i;
  };
  return accumulate(1, n, combine, 1);
}

function expt(base, exp) {
  var combine = function(result, i) {
    return result * base;
  };
  return accumulate(0, exp, combine, 1);
}

function summation(term, next, a, b) {
  var combine = function(result, i) {
    return result + term(i);
  };
  return accumulate(a, b, combine, 0);
}

function square(x) { return expt(x, 2); }

function cube(x) { return expt(x, 3); }

// 1. Compute the sum of squares up to `n`, where n is 10.
function sumOfSquares(n) {
  var next = function(i) { return i + 1; };
  return summation(square, next, 5, n);
}

sumOfSquares(10);

// 2. How about the sum of cubes of even numbers up to 10?
function sumEvenCubes(n) {
  var next = function(i) { return i + 2; };
  return summation(cube, next, 0, n);
}

sumEvenCubes(10);

// 3. Let's compute the sum of factorials from 3 to 11;

function sumFactorials(a, b) {
  var next = function(i) { return i + 1; };
  return summation(factorial, next, a, b);
}

sumFactorials(3, 11);
