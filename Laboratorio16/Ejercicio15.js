const cad = '{"nombre":"Mottita","edad":30}';
const obj = JSON.parse(cad);

document.getElementById("salida").textContent = obj.nombre;
