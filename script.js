document.addEventListener("DOMContentLoaded", () => {
    let currentFontSize = 100;

    // BOTÕES DE FONTE
    const btnIncrease = document.getElementById("btn-increase-font");
    const btnDecrease = document.getElementById("btn-decrease-font");

    if (btnIncrease) {
        btnIncrease.addEventListener("click", () => {
            if (currentFontSize < 130) {
                currentFontSize += 10;
                document.documentElement.style.fontSize = currentFontSize + "%";
                document.body.style.fontSize = currentFontSize + "%";
            }
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener("click", () => {
            if (currentFontSize > 80) {
                currentFontSize -= 10;
                document.documentElement.style.fontSize = currentFontSize + "%";
                document.body.style.fontSize = currentFontSize + "%";
            }
        });
    }

    // BOTÃO DE CONTRASTE
    const btnContrast = document.getElementById("btn-contrast");

    if (btnContrast) {
        btnContrast.addEventListener("click", () => {
            document.body.classList.toggle("high-contrast");
            
            if (document.body.classList.contains("high-contrast")) {
                localStorage.setItem("highContrast", "enabled");
            } else {
                localStorage.setItem("highContrast", "disabled");
            }
        });
    }

    // PREFERÊNCIA DE CONTRASTE
    if (localStorage.getItem("highContrast") === "enabled") {
        document.body.classList.add("high-contrast");
    }
});