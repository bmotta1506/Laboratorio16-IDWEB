const cuadro = document.getElementById("cuadro");

document.getElementById("mover").onclick = () => {
    cuadro.classList.add("mover");
};

document.getElementById("reset").onclick = () => {
    cuadro.classList.remove("mover");
};
