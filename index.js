function Soma(a, b) {
  let soma = a + b
  return("A soma de " + a + " e " + b + " é: " + soma)
}

function Subtracao(a, b) {
  let subtracao = a - b
  return("A subtração de " + a + " e " + b + " é: " + subtracao)
}

function Multiplicacao(a, b) {
  let multiplicacao = a * b
  return("A multiplicação de " + a + " e " + b + " é: " + multiplicacao)
}

function Divisao(a, b) {
  let divisao = a / b
  return("A divisão de " + a + " e " + b + " é: " + divisao)
}

let resultadoSoma = Soma(10, 5)
let resultadoSubtracao = Subtracao(10, 5)
let resultadoMultiplicacao = Multiplicacao(10, 5)
let resultadoDivisao = Divisao(10, 5)

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)