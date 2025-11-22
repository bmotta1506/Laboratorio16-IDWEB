document.getElementById("btn").onclick = () => {
    const nombre = document.getElementById("nom").value;

    const obj = { nombre };
    console.log(JSON.stringify(obj));
};
