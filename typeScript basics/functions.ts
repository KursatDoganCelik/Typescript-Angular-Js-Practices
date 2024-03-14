// Parameters 'number' - Return type 'string'
function add(a: number, b: number): string {
  let c: number = a + b
  return c.toString()
}
console.log(`Add: ${add(1, 2)}`)

// Parameters 'number' - Return type 'void'
function subtract(a: number, b: number): void {
  let c: number = a - b
  console.log(`Subtract: ${c}`)
}
subtract(3, 1)

// Parameters 'number' - Default value '5' for 'b'
function multiply(a: number, b: number = 5): number {
  let c: number = a * b
  return c
}
console.log(`Multiply: ${multiply(3)}`)

// Parameters 'number' - Default value 'undefined' for 'b'
function divide(a: number, b?: number): number {
  if (b) {
    return a / b
  }
  return a
}
console.log(`Divide: ${divide(10)}`)

// Rest Parameters
function peoples(...peoples: string[]): string {
  return peoples.join(' ')
}
console.log(`Peoples: ${peoples('Soligin', 'Dwostx', 'Krizon')}`)
