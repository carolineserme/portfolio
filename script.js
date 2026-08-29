// AGUARDA O CARREGAMENTO COMPLETO DO DOCUMENTO
document.addEventListener('DOMContentLoaded', () => {

    // BOTÃO DE ALTO CONTRASTE
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

    // BOTÕES DE AUMENTAR E DIMINUIR FONTE
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    
    let currentFontSize = 100; // Porcentagem inicial

    if (btnIncreaseFont) {
        btnIncreaseFont.addEventListener('click', () => {
            if (currentFontSize < 130) { // Limite máximo 130%
                currentFontSize += 10;
                document.documentElement.style.fontSize = `${currentFontSize}%`;
            }
        });
    }

    if (btnDecreaseFont) {
        btnDecreaseFont.addEventListener('click', () => {
            if (currentFontSize > 90) { // Limite mínimo 90%
                currentFontSize -= 10;
                document.documentElement.style.fontSize = `${currentFontSize}%`;
            }
        });
    }
});