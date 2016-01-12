function expt(base, exp) {
  var result = 1;
  for(var i = 0; i < exp; i++) {
    result = result * base;
  }
  return result;
}

function sum(term, next, n) {
  var i = 0;
  var result = 0;
  while (i < n) {
    result = result + term(i);
    i = next(i);
  }
  return result;
}

function square(x) {
  return expt(x, 2);
}

function cube(x) {
  return expt(x, 3);
}

// 1. Compute the sum of squares up to `n`, where n is 10.
function sumOfSquares(n) {
  var next = function(i) { return i + 1; };
  return sum(square, next, n);
}

sumOfSquares(10);

// 2. How about the sum of cubes up to 10?
function sumEvenCubes(n) {
  var next = function(i) { return i + 2; };
  return sum(cube, next, n);
}

sumEvenCubes(10);
