const boton = document.getElementById("btnCambiar3");
const p = document.getElementById("parrafo3");

boton.addEventListener("click", () => {
    p.textContent = "Texto cambiado";
});
