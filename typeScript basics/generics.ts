// T is a 'Type' parameter
function values<T>(...values: T[]): T[] {
  return values
}

// T => number for function values
const numbers = values<number>(1, 2, 3, 4, 5)
console.log(`Numbers: ${numbers}`)

// T => string for function values
const strings = values<string>('Soligin', 'Dwostx', 'Krizon')
console.log(`Strings: ${strings}`)

// Class usage with 'Type' parameter
class Build<T> {
  size: T
  price: T

  constructor(size: T, price: T) {
    this.size = size
    this.price = price
  }
}
// T => number for class Build
let build = new Build<number>(123, 456000)
console.log(`Build: ${build.size} - ${build.price}`)
