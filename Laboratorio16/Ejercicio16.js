let productos = [
    { nombre: "Teclado", precio: 50 },
    { nombre: "Audífonos", precio: 120 }
];

const json = JSON.stringify(productos);
const obj = JSON.parse(json);

obj.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    document.getElementById("listaProd").appendChild(li);
});
