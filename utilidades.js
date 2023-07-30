

alert("Esta interfaz debe ser utilizada en un ordenador.")

function mostrarMensaje() {
  setTimeout(function() {
    alert("Esta interfaz está diseñada para ordenadores");
  }, 9000); // 3000 milisegundos = 3 segundos
}

// Llamamos a la función para que se ejecute el "alert" después de 3 segundos
mostrarMensaje();