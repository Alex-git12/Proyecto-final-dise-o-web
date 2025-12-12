function Mostrartexto() {
    
    const textoOculto = document.getElementById('textoOculto');

    textoOculto.classList.add('textovisible');

    setTimeout(function() {
        textoOculto.classList.remove('textovisible');
    }, 3000); 
}

function validarYEnviar() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    const archivoInput = document.querySelector('input[type="file"]');
    
    const mensajeError = document.getElementById('mensaje-error');
    const mensajeExito = document.getElementById('mensaje-exito');

    
    function mostrarMensaje(elemento, texto, esVisible) {
       
        elemento.classList.remove('mensaje-visible');
        elemento.style.display = 'none';

       
        elemento.textContent = texto;

        setTimeout(() => {
            elemento.style.display = 'block';
            elemento.offsetWidth; 
            elemento.classList.add('mensaje-visible');
        }, 10); 
    }

   
    mensajeError.classList.remove('mensaje-visible');
    mensajeExito.classList.remove('mensaje-visible');
    mensajeError.style.display = 'none';
    mensajeExito.style.display = 'none';
    
    
    if (!nombre || !correo || !telefono || !mensaje || (archivoInput.files && archivoInput.files.length === 0)) {
        
        mostrarMensaje(mensajeError, 'Por favor, ingrese todos los datos requeridos.', true);
    } else {
       
        mostrarMensaje(mensajeExito, 'Gracias por enviar su solicitud. Nos pondremos en contacto pronto.', true);
        document.querySelector('.seccion-formulario').reset();
    }
}