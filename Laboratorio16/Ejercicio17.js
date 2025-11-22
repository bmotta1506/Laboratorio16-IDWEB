const usuario = {
    nombre: "Brayan",
    correo: "bmotta@unsa.edu.pe",
    rol: "estudiante"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const recuperado = JSON.parse(localStorage.getItem("usuario"));

document.getElementById("mostrar").textContent =
    `${recuperado.nombre} - ${recuperado.correo}`;
