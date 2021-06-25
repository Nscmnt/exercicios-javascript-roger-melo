// Closures é uma função com escopo chain estatico que é definida no momento em que a função é criada , por isso todas as funções em JS são closures

const fn1 = function () {
  const v1 = 10;
  return function () {
    console.log(v1);
  };
};

const fn = fn1();
const v1 = 100;
fn(); // 10 - manten se o escopo do momento em que a função foi criada

// mantendo a variavel do momento de sua criação

const va1 = 100;

const fn3 = function () {
  console.log(va1);
};

function fn4(fn) {
  const va1 = 1000;
  fn();
}

fn4(fn3); // 10 -  va1 se mantém 10 porque mantém o estado da criação.

// Apersar de estático, o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.
