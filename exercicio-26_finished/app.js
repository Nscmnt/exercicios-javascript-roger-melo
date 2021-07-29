/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const currentDate = new Date();

function formatDate(date) {
  if (date instanceof Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  } else {
    console.log("Não é uma data válida");
  }
}

// console.log(formatDate(currentDate));

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const daysOfWeek = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const monthsOfYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function formatDateAndHours(date) {
  if (date instanceof Date) {
    return `${date.getHours()}:${date.getMinutes()} - ${
      daysOfWeek[date.getDay()]
    }, ${date.getDate()} de ${
      monthsOfYear[date.getMonth()]
    } de ${date.getFullYear()}`;
  } else {
    console.log("Não é uma data válida");
  }
}

// console.log(formatDateAndHours(currentDate));

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };

const { id, isVerified } = user;

// console.log(id, isVerified);

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: "Bender" };
const robotB = { name: "HAL 9000" };

const { name: nameA } = robotA;
const { name: nameB } = robotB;

// console.log(nameA, nameB);

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = "a";
const b = "b";
const c = "c";

const lettes = {
  a,
  b,
  c,
};

// console.log(lettes);

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = (value) => {
  console.log(value);
};

const updateSomething = (data = {}) => {
  let { target, property, willChange } = data;

  if (willChange === "valor indesejado") {
    willChange = "valor desejado";
  }

  useDataSomewhereElse({
    target,
    property,
    willChange,
  });
};

updateSomething({ target: "1", property: "2", willChange: "valor indesejado" });

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector(".clock-container");

const updateClock = () => {
  const present = new Date();
  
  const clock = {
    hours: present.getHours(),
    minutes: present.getMinutes(),
    seconds: present.getSeconds(),
  };

  const clockHTML = `
    <span>${clock.hours < 9 ? `0${clock.hours}` : clock.hours}</span> :
    <span>${clock.minutes < 9 ? `0${clock.minutes}` : clock.minutes}</span> :
    <span>${clock.seconds < 9 ? `0${clock.seconds}` : clock.seconds}</span>
  `;

  clockContainer.innerHTML = clockHTML;
};

setInterval(updateClock, 1000);
