const btn = document.getElementById("btnToggle4");
const p = document.getElementById("parrafo4");

let cambiado = false;

btn.addEventListener("click", () => {
    cambiado = !cambiado;
    p.textContent = cambiado ? "Texto cambiado" : "Texto original";
});