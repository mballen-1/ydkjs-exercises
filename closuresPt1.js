function isPrime() {
  let primesMap = {};
  return (v) => {
    if (primesMap[v] !== undefined) {
      return primesMap[v];
    }
    if (v <= 3) {
      primesMap[v] = v > 1;
      return (primesMap[v] = v > 1);
    }
    if (v % 2 == 0 || v % 3 == 0) {
      return (primesMap[v] = false);
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
      console.log("calculating");
      if (v % i == 0 || v % (i + 2) == 0) {
        primesMap[v] = false;
        return (primesMap[v] = false);
      }
    }
    return (primesMap[v] = true);
  };
}

const cacheIsPrime = isPrime();
// console.log("1st", cacheIsPrime(25));
// console.log("2nd", cacheIsPrime(25));

// console.log("3rd", cacheIsPrime(525));

// console.log("525 is prime?", cacheIsPrime(525));
// console.log("is 3 prime?", cacheIsPrime(3));
// console.log("is 5 prime?", cacheIsPrime(5));
// console.log("is 7 prime?", cacheIsPrime(7));
// console.log("is 757 prime?", cacheIsPrime(757));
// console.log("is 757 prime?", cacheIsPrime(757));

function factorize() {
  var factorizeMap = {};
  return (v) => {
    if (factorizeMap[v] !== undefined) {
      return factorizeMap[v];
    }

    if (!cacheIsPrime(v)) {
      let i = Math.floor(Math.sqrt(v));
      while (v % i != 0) {
        console.log("calculating with map...");
        i--;
      }
      return (factorizeMap[v] = [
        ...factorizeWithCache(i),
        ...factorizeWithCache(v / i),
      ]);
    }
    return (factorizeMap[v] = [v]);
  };
}

const factorizeWithCache = factorize();

console.log("factorizeWithCache(345)", factorizeWithCache(345));
console.log("factorizeWithCache(345)", factorizeWithCache(345));

console.log("isPrime(4327)", cacheIsPrime(4327));
console.log("isPrime(4327)", cacheIsPrime(4327));
