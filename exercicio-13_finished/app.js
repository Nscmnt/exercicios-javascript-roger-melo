/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/

const getCatInfo = () => {
  const name = "Marcos";
  let age = 3;
  const color = "Cinza";
};

/*
  02

  - Adicione apenas duas linhas de código dentro da função "external" para exibir no console a string que a const movie armazena, com todas as letras  maiúsculas.
*/

const external = () => {
  const movie = "Parasite";

  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase());
    };
    extraInternal();
  };
  internal();
};

external();

/*
  03

  - Exiba no console o array abaixo com a ordem dos itens invertida;
  - O resultado exibido deve ser [1, 2, 3];

  Dica: procure pelo método reverse, no MDN.
*/

let randomNumbers = [3, 2, 1];

console.log(randomNumbers.reverse());
/*
  04

  - Exiba no console o array abaixo com o 1º item removido;

  Dica: procure pelo método shift, no MDN.
*/

let crazyArray = [
  { prop1: "1", prop2: "2" },
  function getMessage() {
    return "hi";
  },
  [5, 96, 53],
];

crazyArray[2].shift();

console.log(crazyArray);

/*
  05

  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto no console;

  Dica: procure pelo método find, no MDN.
*/

const dogs = [
  { name: "Olivia", age: 3, gender: "Female", breed: "Maltês" },
  { name: "Zé", age: 2, gender: "Male", breed: "Pug" },
  { name: "Jade", age: 4, gender: "Female", breed: "Shiba inu" },
  { name: "Zequinha", age: 7, gender: "Male", breed: "Poodle" },
  { name: "Xica", age: 6, gender: "Female", breed: "Chihuahua" },
];

const zaqDog = dogs.find((dog) => dog.name === "Zequinha");

console.log(zaqDog);

/*
  06

  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  página, através da classe dele;
  - Exiba a referência do título principal no console.

*/

const title = document.querySelector(".main-title");

console.log(title);

/*
  07

  - Obtenha um NodeList com as referências de todos os títulos secundários da página, através da classe deles;
  - Exiba esse NodeList no console.
*/

const secondaryTitles = document.querySelectorAll("h2");

console.log(secondaryTitles);
