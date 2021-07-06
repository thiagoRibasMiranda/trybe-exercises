const pai = document.getElementById('pai');
for(let index = pai.childNodes.length - 1; index >= 0; inde -= 1) {
    const atualFilho = pai.childNodes[index];
    if(atualFilho.id !== 'elementoOndeVoceEsta') {
        atualFilho.remove();
    }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();