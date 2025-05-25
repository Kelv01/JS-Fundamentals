const [, , arg1, arg2] = process.argv;

function add(a, b) {
  return a + b;
}

console.log(add(Number(arg1), Number(arg2)));
