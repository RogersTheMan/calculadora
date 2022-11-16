const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
let select = document.querySelector("#calc");
const btn = document.querySelector("#btn");
const resp = document.querySelector("#resp");
resp.setAttribute("class", "text-center");

n1.focus();

btn.addEventListener("click", function calc() {
  if (n1.value.length === 0 || n2.value.length === 0) {
    alert("Digite um número para calcular!");
  } else {
    const num1 = Big(n1.value);
    const num2 = Big(n2.value);
    if (select.value === "mais") {
      resp.innerHTML = `<h2>O resultado da soma é ${somar(num1, num2)}</h2>`;
    } else if (select.value === "menos") {
      resp.innerHTML = `<h2>O resultado da subtração é ${subtrair(
        num1,
        num2
      )}</h2>`;
    } else if (select.value === "vezes") {
      resp.innerHTML = `<h2>O resultado da multiplicação é ${multiplicar(
        num1,
        num2
      )}</h2>`;
    } else if (select.value === "divisao") {
      resp.innerHTML = `<h2>O resultado da divisão é ${dividir(
        num1,
        num2
      ).toFixed(2)}</h2>`;
    } else if (select.value === "potência") {
      resp.innerHTML = `<h2>O resultado da potência é ${potência(
        num1,
        num2
      )}</h2>`;
    }
    n1.focus();
    n1.value = "";
    n2.value = "";

  }
});

const somar = (num1, num2) => num1.add(num2);

const subtrair = (num1, num2) => num1.minus(num2);

const multiplicar = (num1, num2) => num1.times(num2);

const dividir = (num1, num2) => num1.div(num2);

const potência = (num1, num2) => {
    num1 = Number(num1)
    num2 = Number(num2)
    return num1 ** num2
};
