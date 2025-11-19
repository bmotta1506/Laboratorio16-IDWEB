const form = document.getElementById("formulario");
const nom = document.getElementById("nombre");
const correo = document.getElementById("correo");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.remove());

    let valido = true;

    if (!nom.value.trim()) {
        mostrarError(nom, "El nombre es obligatorio");
        valido = false;
    }

    if (!correo.value.trim()) {
        mostrarError(correo, "El correo es obligatorio");
        valido = false;
    }

    if (valido) {
        alert("Formulario válido");
        form.reset();
    }
});

function mostrarError(input, mensaje) {
    const span = document.createElement("span");
    span.textContent = mensaje;
    span.style.color = "red";
    span.className = "error";
    input.insertAdjacentElement("afterend", span);
}
