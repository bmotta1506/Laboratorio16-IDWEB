let usuarios = [];
const tabla = document.getElementById("tablaCrud");

document.getElementById("agregar").onclick = () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    const user = { id: Date.now(), nombre, edad };
    usuarios.push(user);
    mostrar();
};

function mostrar() {
    tabla.innerHTML = `
        <tr><th>Nombre</th><th>Edad</th><th>Acciones</th></tr>
    `;

    usuarios.forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${u.nombre}</td>
            <td>${u.edad}</td>
            <td>
                <button data-id="${u.id}" class="editar">Editar</button>
                <button data-id="${u.id}" class="eliminar">Eliminar</button>
            </td>`;
        tabla.appendChild(tr);
    });
}

tabla.addEventListener("click", e => {
    const id = e.target.dataset.id;

    if (e.target.classList.contains("eliminar")) {
        usuarios = usuarios.filter(u => u.id != id);
        mostrar();
    }

    if (e.target.classList.contains("editar")) {
        const nuevo = prompt("Nuevo nombre:");
        let u = usuarios.find(x => x.id == id);
        if (nuevo) u.nombre = nuevo;
        mostrar();
    }
});
