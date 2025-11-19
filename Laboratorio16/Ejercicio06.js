let valor = 0;

const span = document.getElementById("contador");
const msg = document.getElementById("mensaje");

document.getElementById("btnPlus").addEventListener("click", () => {
    valor++;
    span.textContent = valor;
    msg.textContent = "";
});

document.getElementById("btnMinus").addEventListener("click", () => {
    if (valor === 0) {
        msg.textContent = "El contador no puede bajar de cero";
        return;
    }
    valor--;
    span.textContent = valor;
});
