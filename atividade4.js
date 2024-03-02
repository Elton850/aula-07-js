// Implemente uma função (callback) que receba um número como
// parâmetro e informe o cubo desse número


const numero = Number(prompt("Digite um número:"))

function cuboNumero (numero, callback) {
    const resposta = callback(numero)
    return resposta
}

function total (numero) {
    const resultado = numero ** 3
    return resultado
}

alert(`Cubo do número ${numero} é igual a ${cuboNumero(numero, total)}`)