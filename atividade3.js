// Crie uma função chamada converterTemperatura que recebe uma
// temperatura em graus Celsius e uma função de callback para conversão
// como argumentos. A função deve aplicar a função de callback à
// temperatura e retornar o resultado.

function converterTemperatura (temperatura) {
    const conversao = (temperatura * 1.8) + 32
    alert(conversao.toFixed(1)) 
}

function callbackTemp(callback) {
    let temperatura = Number(prompt("Digite um valor:"))
    callback(temperatura)
}

callbackTemp(converterTemperatura)