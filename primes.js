const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    // if the division results in a whole number, it is not prime.
    if ((num / i) % 1 === 0) {
      return false;
    }
  }
  return true;
}

const primeSieve = (start, end) => {
  res = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
}

console.log(primeSieve(1, 25))
