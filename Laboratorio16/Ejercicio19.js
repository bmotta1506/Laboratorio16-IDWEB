let persona = `{"nombre":"Juan","edad":25}`;

let obj = JSON.parse(persona);
obj.edad = 30;

let jsonNuevo = JSON.stringify(obj);
console.log(jsonNuevo);
