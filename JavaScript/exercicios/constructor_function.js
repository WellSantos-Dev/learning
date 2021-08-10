// camel case = umDoisTresQuatro
// pascal case = UmDoisTresQuatro

function criarPessoa(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

let pessoa1 = new criarPessoa("Wellington", "Santos", 19)
console.log(pessoa1)

let pessoa2 = new criarPessoa("Nathally", "Jeniffer", 17)
console.log(pessoa2)