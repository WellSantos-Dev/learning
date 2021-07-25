function trocarImagem(filename) {
    document.querySelector('.img').setAttribute('src', 'imagens/'+filename);
}

function trocar() {
    if ( document.querySelector('button').classList.contains('preto') ) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto')
    }
}