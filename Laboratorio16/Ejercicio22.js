const perfilGuardado = JSON.parse(localStorage.getItem("perfil"));

if (perfilGuardado) {
    mostrar(perfilGuardado);
}

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nom").value,
        edad: document.getElementById("edad").value,
        pais: document.getElementById("pais").value
    };

    localStorage.setItem("perfil", JSON.stringify(datos));
    mostrar(datos);
});

function mostrar(p) {
    document.getElementById("perfil").textContent =
        `${p.nombre}, ${p.edad}, ${p.pais}`;
}
