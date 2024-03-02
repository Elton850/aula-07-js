// Crie uma arrow function chamada contarVogais que recebe uma
// string como argumento e retorna a quantidade de vogais na string.

const string = prompt("Digite uma palavra:")

const contarVogais = (string) => {
    
    const vogais = "aeiou"
    let contVogais = 0

    for (vogal of string) {
        if (vogais.includes(vogal.toLowerCase())) {
            contVogais++
        }    
    }
    return `A palavra informada contém ${contVogais} vogal(is)`
}

alert(contarVogais(string))