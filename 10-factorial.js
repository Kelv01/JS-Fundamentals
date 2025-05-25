const [, , arg] = process.argv;
const num = Number(arg);

function factorial(n) {
  if (isNaN(n) || n <= 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(num));
