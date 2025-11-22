const jsonTareas = `
[
  {"titulo":"Estudiar DOM","completada":true},
  {"titulo":"Hacer ejercicio","completada":false}
]
`;

const tareas = JSON.parse(jsonTareas);

tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.titulo;

    if (t.completada) li.classList.add("completa");

    document.getElementById("tareas").appendChild(li);
});
