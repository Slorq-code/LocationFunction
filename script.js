

console.log("Conexion con la logica del servicio resuelta!")

    // Función para obtener la ubicación y la altitud usando el servicio de Elevación de Google Maps
    function obtenerUbicacion(opciones) {
      // Devolver una promesa para manejar el resultado asincrónico de obtener la ubicación.
      return new Promise((resolve, reject) => {
        // Función interna para obtener la ubicación.
        const obtenerPosicion = () => {
          // Verificar si el navegador soporta geolocalización.
          if ("geolocation" in navigator) {
            // Configuración de opciones para la geolocalización.
            const opcionesGeolocalizacion = {
              enableHighAccuracy: opciones && opciones.enableHighAccuracy ? true : false,
              timeout: opciones && opciones.timeout ? opciones.timeout : 10000, // Tiempo máximo para obtener la ubicación (en milisegundos)
              maximumAge: opciones && opciones.maximumAge ? opciones.maximumAge : 0, // Tiempo máximo de antigüedad de la caché de la ubicación (en milisegundos)
            };
    
            // Solicitar la ubicación actual al navegador.
            navigator.geolocation.getCurrentPosition(
              // Éxito: se obtuvo la ubicación correctamente.
              function (posicion) {
                // Extraer información de la posición obtenida.
                const latitud = posicion.coords.latitude.toFixed(7);
                const longitud = posicion.coords.longitude.toFixed(7);
                const altitud = posicion.coords.altitude || null;
                const hora = new Date(posicion.timestamp).toLocaleTimeString();
                const googleMapsLink = `https://www.google.com/maps/place/${latitud}+${longitud}`;
    
                // Crear un objeto con los datos de ubicación.
                const ubicacion = {
                  latitud,
                  longitud,
                  altitud,
                  hora,
                  googleMapsLink,
                };
    
                // Mostrar información en la consola con los datos de la ubicación.
                console.log("La latitud es: " + latitud);
                console.log("La longitud es: " + longitud);
                console.log("La altitud es: " + (altitud !== null ? altitud : "No disponible"));
                console.log("La hora de la muestra es: " + hora);
                console.log("El link para buscar la ubicación en Google Maps es el siguiente: " + googleMapsLink);
    
                // Resolver la promesa con el objeto de ubicación.
                resolve(ubicacion);
              },
              // Error: no se pudo obtener la ubicación o se denegó el permiso.
              function (error) {
                // Verificar si el error es por permiso denegado.
                if (error.code === error.PERMISSION_DENIED) {
                  // Mensaje para indicar que se necesita permiso para acceder a la ubicación.
                  const mensaje = "Se requiere permiso para acceder a la ubicación. Por favor, otorga los permisos para continuar.";
                  // Crear un botón para permitir que el usuario intente nuevamente obtener la ubicación.
                  const botonPermitir = document.createElement("button");
                  botonPermitir.textContent = "Aceptar";
                  botonPermitir.addEventListener("click", () => {
                    // Cuando el usuario hace clic en el botón, volvemos a intentar obtener la ubicación llamando nuevamente la función obtenerPosicion().
                    obtenerPosicion();
                  });
    
                  // Mostramos un alert con el mensaje y el botón para permitir el acceso a la ubicación.
                  alert(mensaje);
                  // Rechazamos la promesa con un mensaje indicando que se requiere permiso para acceder a la ubicación.
                  reject("Se requiere permiso para acceder a la ubicación.");
                } else {
                  // Otro tipo de error, se puede intentar nuevamente o mostrar un mensaje de error.
                  // Rechazamos la promesa con un mensaje de error específico.
                  reject("Error al obtener la ubicación: " + error.message);
                }
              },
              opcionesGeolocalizacion // Pasamos las opciones de configuración a la función getCurrentPosition().
            );
          } else {
            // El navegador no soporta la geolocalización, rechazamos la promesa con un mensaje.
            reject("El navegador no soporta la geolocalización.");
          }
        };
    
        // Llamamos a la función interna para comenzar a obtener la ubicación.
        obtenerPosicion();
      });
    }
    


    function mostrarAlerta() {
      alert("Mira la consola");
      obtenerUbicacion();
    }