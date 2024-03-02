const senha = prompt("Digite uma senha:")

function verificarSenha (senha) {

    const alfabeto = "abcçdefghijklmnopqrstuvwxyzáàãéèíóòõúù"
    const numero = "1234567890"
    const caracEspecial = "@#$&*"

    let validacaoTamanho = false
    let validacaoMaiuscula = false
    let validacaoMinuscula = false
    let validacaoNumero = false
    let validacaoCarac = false

    if (senha.length >= 8) {
        validacaoTamanho = true
    }

    for (caracter of senha) {
        if (alfabeto.includes(caracter)) {   
            validacaoMinuscula = true 
        } else if (alfabeto.toUpperCase().includes(caracter)) {
            validacaoMaiuscula = true
        } else if (numero.includes(caracter)) {
            validacaoNumero = true  
        } else if (caracEspecial.includes(caracter)) {
            validacaoCarac = true
        } else {
            alert("erro")
        }
    } 

    const resultados = [validacaoMaiuscula, validacaoMinuscula, validacaoNumero, validacaoTamanho, validacaoCarac] 
    let acertos = 0

    for (alternativa of resultados) {
        if (alternativa) {
            acertos++
        }
    }

    if (acertos <= 2) {
        return "Senha Fraca"
    } else if (acertos <= 4) {
        return "Senha Média"
    } else {
        return "Senha Forte"
    }
}

alert(verificarSenha(senha))