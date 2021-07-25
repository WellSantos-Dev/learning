function trocarImagem(filename, imagename) {
    document.querySelector('.img').setAttribute('src', '../imagens/'+filename);
    document.querySelector('.img').setAttribute('data-img', 'imagename')
}
