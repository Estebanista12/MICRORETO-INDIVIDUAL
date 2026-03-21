// Seleccionamos elementos
const boton = document.querySelector("#boton-magico");
const parrafo = document.querySelector("#parrafo");

// Click: cambia texto y color del párrafo
boton.addEventListener("click", function() {
    parrafo.textContent = "¡Día fantástico para Esteban! (Ref: EM-2026)";
    parrafo.style.color = "magenta"; // color llamativo
});

// Mouseenter: cambia texto del botón y tamaño
boton.addEventListener("mouseenter", function() {
    boton.textContent = "¡Púlsame, Martin!";
    boton.style.fontSize = "1.2em"; // aumenta tamaño
});

// Mouseleave: vuelve a texto y tamaño originales
boton.addEventListener("mouseleave", function() {
    boton.textContent = "Cambiar Ánimo";
    boton.style.fontSize = "1em"; // tamaño original
});