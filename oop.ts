// Class with constructor and properties
class Home {
  private _address: string
  _price: number

  constructor(address: string, price: number) {
    this._address = address
    this._price = price
  }

  // Getter address
  get address(): string {
    return this._address
  }

  // Setter price
  set price(price: number) {
    this._price = price
  }
}

// Create new instance of Home
let home = new Home('123 Main St', 123000)
console.log(`Home addres and price: ${home.address} - ${home._price}`)

// Set new price
home.price = 135000
console.log(`Home with new price: ${home.address} - ${home._price}`)
