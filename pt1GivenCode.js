function isPrime(v) {
  if (v <= 3) {
    return v > 1;
  }
  if (v % 2 == 0 || v % 3 == 0) {
    return false;
  }
  var vSqrt = Math.sqrt(v);
  for (let i = 5; i <= vSqrt; i += 6) {
    console.log("calculating");
    if (v % i == 0 || v % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(25));
// console.log(isPrime(25));

function factorize(v) {
  if (!isPrime(v)) {
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      console.log("calculating without closure...");
      i--;
    }
    return [...factorize(i), ...factorize(v / i)];
  }
  return [v];
}

console.log(factorize(345));
console.log(factorize(345));
