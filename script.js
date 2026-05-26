const luzes = document.querySelectorAll(".luz");

function mudarLuz(cor) {
    luzes.forEach((luz) => {
        luz.classList.remove("ativo");
    });

    document.getElementById(cor).classList.add("ativo");
}

mudarLuz("vermelho");

setInterval(() => {
    const luzAtiva = document.querySelector(".luz.ativo");
    const proximaLuz = luzAtiva.nextElementSibling || luzes[0];
    mudarLuz(proximaLuz.id);
}, 2000);
