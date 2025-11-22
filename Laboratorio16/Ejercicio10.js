const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

document.getElementById("btnTabla").onclick = () => {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "<tr><th>Nombre</th><th>Precio</th></tr>";

    productos.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${p.nombre}</td><td>${p.precio}</td>`;
        tabla.appendChild(fila);
    });
};
