// function fibs(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;

//   let fib = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   return fib;
// }

// console.log(fibs(10));

function fibsRec(n, fib = [0, 1]) {
  console.log('This was printed recursively');
  if (n <= 0) return 0;
  if (n === 1) return fib;

  if (fib.length <= n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fibsRec(n, fib);
  }

  return fib;
}

console.log(fibsRec(8));