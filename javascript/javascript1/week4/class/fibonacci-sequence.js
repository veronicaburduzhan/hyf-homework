// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fib(fibNumber) {
  let a = 0;
  let b = 1;
  for (i = 3; i <= fibNumber; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3));
console.log(fib(10));
console.log(fib(34));
