/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const p = document.createElement("p");
const input = document.querySelector("#username");

let isValidInput = false;

input.insertAdjacentElement("afterend", p);

const inputRule = /[a-zA-z]{6}/;

input.addEventListener("input", validField);

function validField({ target }) {
  const value = target.value;

  if (!inputRule.test(value)) {
    isValidInput = false;
    p.classList.remove("username-success-feedback");
    p.classList.add("username-help-feedback");
    p.textContent =
      "O valor deve conter no mínimo 6 caracteres,  com apenas letras maiúsculas e/ou minúsculas";
  } else {
    isValidInput = true;
    p.classList.remove("username-help-feedback");
    p.classList.add("username-success-feedback");
    p.textContent = "Username válido =)";
  }
}

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const form = document.querySelector("form");
const p2 = document.createElement("p");
form.insertAdjacentElement("afterend", p2);

form.addEventListener("submit", validForm);

function validForm() {
  event.preventDefault();
  if (isValidInput) {
    p2.classList.remove("submit-help-feedback");
    p2.classList.add("submit-success-feedback");
    p2.textContent = "Dados enviados =)";
  } else {
    p2.classList.remove("submit-success-feedback");
    p2.classList.add("submit-help-feedback");
    p2.textContent = "Por favor, insira um username válido";
  }
}

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa 6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

function some(arr, callback) {
  if (arr instanceof Array && typeof callback === "function") {
    let bool = false;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        bool = true;

        break;
      }
    }
    return bool;
  } else {
    return "Invalid Input";
  }
}

const testOne = some([1, 2, 3], (item) => item > 2);
const testTwo = some([1, 3, 5], (item) => item === 0);

console.log(testOne);
console.log(testTwo);
