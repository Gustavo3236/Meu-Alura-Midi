const tecla = document.querySelectorAll('.tecla');

function tocaSom(elementoAudio) {
    document.querySelector(elementoAudio).play();
}

tecla.forEach(elemento => elemento.addEventListener('click', () => {
    let somId = `#som_${elemento.classList[1]}`;
    tocaSom(somId);
}));
