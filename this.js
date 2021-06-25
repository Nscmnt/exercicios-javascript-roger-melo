// New - Permite criação de objetos atraves de funções construtoras e classes.

// Função construtora retorna um objeto ao ser invocada por meio do operador new

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

// Toda função possui uma propriedade chamada prototype, que é vinculada ao __proto__ do objeto criado pelo operador new - ou seja - todo objeto criado pelo operador new herda funcionalidade adicionadas ao prototype (empty object) da função.

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

const me = new Person("Jorge", "São Paulo", 1989);

console.log(me); // Person { name: 'Jorge', city: 'São Paulo', year: 1989 }
console.log(me.getAge()); // 32

// Entendendo o new (implemetação)
const _new = function (fn, ...parans) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, parans);

  return obj;
};

const myWife = _new(Person, "Anna", "São Paulo", 1995);

console.log(myWife); // Person { name: 'Anna', city: 'São Paulo', year: 1995 }
console.log(myWife.getAge()); // 26
