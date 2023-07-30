alert("Esta interfaz debe ser utilizada en un ordenador.")
function mostrarMensaje() {
  setTimeout(function() {
    alert("Esta interfaz está diseñada para ordenadores.");
  }, 9000);
}
function mostrarSaludo() {
    setTimeout(function() {
        alert("Siempre disponible Andres F. Rodriguez. Desarrollador mobile & front end");
    }, 30000);
}
mostrarMensaje();
mostrarSaludo();