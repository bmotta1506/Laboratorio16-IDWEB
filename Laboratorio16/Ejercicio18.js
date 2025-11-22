const jsonLibros = `
[
  {"titulo":"El Principito","autor":"Saint-Exupéry"},
  {"titulo":"1984","autor":"George Orwell"}
]
`;

const libros = JSON.parse(jsonLibros);

const tabla = document.getElementById("libros");
tabla.innerHTML = "<tr><th>Título</th><th>Autor</th></tr>";

libros.forEach(l => {
    tabla.innerHTML += `<tr><td>${l.titulo}</td><td>${l.autor}</td></tr>`;
});
