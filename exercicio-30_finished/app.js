/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

function getUsers() {
  const xhr = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Não foi possível obter os dados dos usuários.");
        }
      }
    };
  });
}

// getUsers().then(console.log).catch(console.log);

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

function calculator(operation) {
  return function (a, b) {
    const operations = ["+", "-", "*", "/"];
    const operantionIsValid = operations.includes(operation);

    if (operantionIsValid) {
      const result = eval(a + operation + b);
      return `Resultado da operação: ${a} ${operation} ${b} = ${result}. `;
    } else {
      return "Operação inválida.";
    }
  };
}

const result = calculator("*")(5, 2);

// console.log(result);

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = ["Parana", "Santa Catarina", "Rio Grande Do Sul"];
const sudeste = [
  "Minas Gerais",
  "Espirito Santa",
  "Rio De Janeiro",
  "São Paulo",
];

const brasil = [...sul, ...sudeste];

// console.log(brasil);

brasil.unshift("Amazonia", "Acre", "Roraima");

// console.log(brasil.shift());

const newSul = brasil.slice(2, 5);

// console.log(newSul);
// console.log(brasil);

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

const nordeste = [
  "Natal",
  "Paraiba",
  "Pernambuco",
  "Sergipe",
  "Bahia",
  "Maranhão",
  "Ceara",
  "Piaui",
  "Alagoas",
];

// console.log(brasil);

const newSudeste = brasil.splice(6, 4);

// console.log(newSudeste);

brasil.push(...nordeste);

// console.log(brasil);

const newBrasil = brasil.map((estado, id) => {
  return { id, estado };
});

// console.log(newBrasil);

const allStatesContain7Letters = brasil.every((estado) => estado.length > 7);

if (allStatesContain7Letters) {
  console.log("Sim, todos os estados tem mais de 7 letras.");
} else {
  console.log("Nem todos os estados tem mais de 7 letras.");
}

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const hasCeara = brasil.includes("Ceara");

if (hasCeara) console.log("Ceara esta incluido");
else console.log("cera não foi incluido =/");

const Brasil = newBrasil.map((estado) => {
  estado.id++;
  estado.estado = `${estado.estado} pertence ao Brasil`;
  return estado;
});

// console.log(Brasil);

const brasilWithEvenId = Brasil.filter((estado) => estado.id % 2 === 0);

console.log(brasilWithEvenId);
