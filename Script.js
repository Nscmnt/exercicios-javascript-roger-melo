// Criando hierarquia de classes utilizando a palavra extends

class Shape {
  // constructor() {}

  toString() {
    return ` Area: ${this.calculateArea()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    // constructor da super claas precisa ser chamado explicitamente

    super();
    this.side = side;
  }
  toString() {
    return `Side: ${this.side} | ${super.toString()}}`;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

// const square = new Square(4);

const square = Square.fromArea(16);

console.log(square);
console.log(square.calculateArea());
console.log(square.toString());
