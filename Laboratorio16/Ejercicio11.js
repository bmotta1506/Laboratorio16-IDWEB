const ul = document.getElementById("lista");

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
