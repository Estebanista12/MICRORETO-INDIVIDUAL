// Seleccionamos elementos
const boton = document.querySelector("#boton-magico");
const parrafo = document.querySelector("#parrafo");

// Evento click
boton.addEventListener("click", function() {
    parrafo.textContent = "¡Día fantástico para Esteban! (Ref: EST)";
    parrafo.style.color = "orange";
});

// Evento mouseenter (cuando pasas el ratón por encima)
boton.addEventListener("mouseenter", function() {
    boton.textContent = "¡Púlsame, Martin!";
});