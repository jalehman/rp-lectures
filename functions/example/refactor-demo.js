// 1. Compute the sum of squares up to `n`, where n is 10.
var n = 10;
var i = 0;
var result = 0;
while (i < n) {
  result = result + (i * i);
  i++;
}
console.log(result);

// 2. How about the sum of cubes of even numbers up to 10?
n = 10;
i = 0;
result = 0;
while (i < n) {
  result = result + (i * i * i);
  i = i + 2;
}
console.log(result);
