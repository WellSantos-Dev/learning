function criarPessoa(nome, idade, tamanho, peso) {
    return {
        nome,
        idade,
        tamanho,
        peso
    }
}

let pessoa1 = criarPessoa("Wellington", 19, 1.72, "65 kg")
console.log(pessoa1)