const [, , arg] = process.argv;
const times = Number(arg);

if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < times; i++) {
    console.log('C is fun');
  }
}
