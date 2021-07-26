let pessoa = {
    nome: 'Wellington',
    idade: 19,
    peso: 60,
    fala: "Ola amigo",
    prestandoAtencao: true,
    atencao:function() {
        if (this.prestandoAtencao === true){
            console.log('Ele está prestando atenção!')
        } else {
            console.log('Ele não está prestando atenção!')
        }
    },
    falar:function() {
        console.log('O '+this.nome+' Está falando!');
        console.log(this.nome+' falou: '+this.fala)
    }
}

console.log(pessoa.idade)
pessoa.falar()
pessoa.atencao()
