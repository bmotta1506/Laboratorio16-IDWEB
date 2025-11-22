const principal = document.getElementById("imgPrincipal");
const minis = document.querySelectorAll(".mini");

minis.forEach(img => {
    img.addEventListener("click", () => {
        principal.src = img.src;
    });
});
