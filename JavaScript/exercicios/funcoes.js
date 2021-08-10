// let nome = "Wellington"

// function resetaNome() {
//     nome = "Matheus";
//     return nome
// }

// console.log(nome)
// resetaNome()
// console.log(nome)




// function corSite(cor, tonalidade) {
//     return cor + tonalidade
// }

// console.log(corSite("Azul", "Ciano"))




// color = "red"

// function trocarCor(changeColor) {
//     color = changeColor
// }

// console.log(color)
// trocarCor("blue")
// console.log(color)



// function multiplicarValores(valor) {
//     return valor * 2
// }

// let resultado = multiplicarValores(5)

// console.log(resultado)



let cor = "Amarelo";
let cor2 = "Vermelho";
let cor3;

function trocaVar() {
    cor3 = cor2;
    cor2 = cor;
    cor = cor3;
}

console.log(cor, cor2)
trocaVar()

console.log(cor, cor2)