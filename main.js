// === 1. ARQUITECTURA Y SELECCIÓN ===
const botonTema = document.querySelector("#boton-tema");
const mensaje = document.querySelector("#mensaje-estado");
const titulo = document.querySelector("#titulo-principal");
const body = document.body;

// === 2. MANIPULACIÓN DEL DOM (Punto 2.2.2) ===
// Cambiamos algo nada más cargar la página
titulo.textContent = "COLECCIÓN DE ESTEBAN v2.0";
titulo.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";

// === 3. GESTIÓN DE EVENTOS (Punto 2.2.3) ===
botonTema.addEventListener("mouseenter", () => {
    botonTema.style.cursor = "pointer";
    botonTema.style.transform = "scale(1.1)";
});

botonTema.addEventListener("mouseleave", () => {
    botonTema.style.transform = "scale(1)";
});

// === 4. CAMBIO DE ESTADO (Punto 2.2.4 - CLAVE PARA EL EXCELENTE) ===
botonTema.addEventListener("click", () => {
    // El uso de toggle es lo que pide la rúbrica
    body.classList.toggle("dark-mode");

    // Lógica extra para el feedback visual
    if (body.classList.contains("dark-mode")) {
        mensaje.textContent = "El tema actual es: Oscuro ";
        botonTema.textContent = "Pasar a Modo Claro";
    } else {
        mensaje.textContent = "El tema actual es: Claro ";
        botonTema.textContent = "Pasar a Modo Oscuro";
    }
 const modal = document.querySelector("#miModal");
const btnCerrar = document.querySelector("#cerrarModal");

// Abrir modal al hacer click en la imagen
document.querySelector("img").addEventListener("click", () => {
    modal.style.display = "block";
});

// Cerrar modal
btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});   
});
