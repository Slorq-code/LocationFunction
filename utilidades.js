alert("Esta interfaz no se ve bien en un movil")

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