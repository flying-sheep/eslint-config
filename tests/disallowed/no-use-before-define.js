const isEven = n => (n === 0 ? true : isOdd(n - 1))
const isOdd = n => (n === 0 ? false : isEven(n - 1))
