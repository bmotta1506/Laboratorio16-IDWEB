const input = document.getElementById("inputTexto");
const lista = document.getElementById("lista");

document.getElementById("btnAgregar").addEventListener("click", () => {
    const texto = input.value.trim();
    if (!texto) {
        alert("Escribe algo");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    input.value = "";
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("La lista está vacía");
    }
});
