/*
O professor explicou que o .offSet mostra a dimensão dos elementos, porém,
contando a borda, paddind... Acho que da pra resolver isso com 
* {
box-sizing: border-box;
margin:0;
padding:0
}

... no css!



O clientWidth pega a largura excluindo o scroll-bar
o clientHeight não pega esse conteudo



O scrollWidth e o scrolHeight pega todo conteudo, idependente do scroll

Se o scroll for na tela inteira usar:
window.scrollX ou window.scrollY

Se o scroll estiver em um elemento especifico:
document.querySelector('classe ou id').scrollTop ou .scrollLeft
*/

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function defineBotao() {
    if(window.scrollY === 0) {
        document.querySelector('.botaoscroll').style.display = 'none';
    } else {
        document.querySelector('.botaoscroll').style.display = 'block';
    }
}

setInterval(defineBotao, 100)
